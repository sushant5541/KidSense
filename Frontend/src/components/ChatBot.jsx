import { useState, useRef, useEffect } from 'react'

const CHATBOT_API = 'http://localhost:5000/api/chatbot'

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('kidsense_chat_history')
    return saved ? JSON.parse(saved) : [
      {
        role: 'assistant',
        content: "Hi there! 👋 I'm the KidSense Assistant. I can help you with questions about child development, our services, locations, and booking. How can I help you today?",
      }
    ]
  })
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showBadge, setShowBadge] = useState(true)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Save history to localStorage
  useEffect(() => {
    localStorage.setItem('kidsense_chat_history', JSON.stringify(messages))
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setShowBadge(false)
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen])

  const sendMessage = async (directMessage) => {
    const trimmed = (directMessage || input).trim()
    if (!trimmed || isTyping) return

    const userMessage = { role: 'user', content: trimmed }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput('')
    setIsTyping(true)

    try {
      const res = await fetch(CHATBOT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          history: updatedMessages.slice(-5).map(m => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      const data = await res.json()

      if (data.success) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
      } else {
        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            content: "I'm sorry, I'm having trouble right now. Please try again or call us at **+91 80 4123 4567**.",
          },
        ])
      }
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: "Oops! I can't connect to the server right now. Please make sure the backend is running, or contact us directly at **+91 80 4123 4567**.",
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  const clearChat = () => {
    if (window.confirm('Clear conversation history?')) {
      const initialMessage = [
        {
          role: 'assistant',
          content: "Hi there! 👋 I'm the KidSense Assistant. How can I help you today?",
        }
      ]
      setMessages(initialMessage)
      localStorage.setItem('kidsense_chat_history', JSON.stringify(initialMessage))
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  // Markdown renderer — handles bold, line breaks, and bullets
  const renderText = (text) => {
    const lines = text.split('\n')
    return lines.map((line, lineIdx) => {
      const trimmedLine = line.trim()
      if (!trimmedLine) return <br key={`br-${lineIdx}`} />

      const parseBold = (str) => {
        const parts = str.split(/(\*\*[^*]+\*\*)/g)
        return parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>
          }
          return part
        })
      }

      if (trimmedLine.startsWith('•') || trimmedLine.startsWith('-')) {
        const content = trimmedLine.replace(/^[•\-]\s*/, '')
        return (
          <div key={lineIdx} className="flex items-start gap-1.5 ml-1 my-0.5">
            <span className="text-ks-gold mt-0.5 flex-shrink-0">•</span>
            <span>{parseBold(content)}</span>
          </div>
        )
      }

      if (/^\d+️?⃣?\s/.test(trimmedLine) || /^\d+\.\s/.test(trimmedLine)) {
        return (
          <div key={lineIdx} className="ml-1 my-0.5">
            {parseBold(trimmedLine)}
          </div>
        )
      }

      return (
        <div key={lineIdx} className="my-0.5">
          {parseBold(trimmedLine)}
        </div>
      )
    })
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        id="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 group"
        style={{
          background: isOpen
            ? 'linear-gradient(135deg, #1a2744, #243352)'
            : 'linear-gradient(135deg, #D4A853, #b8922e)',
          boxShadow: isOpen
            ? '0 8px 32px rgba(26, 39, 68, 0.4)'
            : '0 8px 32px rgba(212, 168, 83, 0.4)',
        }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {/* Notification Badge */}
        {showBadge && !isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white animate-bounce">
            1
          </span>
        )}

        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute w-full h-full rounded-full animate-ping opacity-30"
            style={{ background: 'linear-gradient(135deg, #D4A853, #b8922e)' }}
          />
        )}

        {isOpen ? (
          <svg className="w-7 h-7 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 transition-all duration-500 ease-out ${
          isOpen
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
        }`}
        style={{ width: 'min(400px, calc(100vw - 48px))' }}
      >
        <div
          className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col"
          style={{
            height: 'min(550px, calc(100vh - 160px))',
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2)',
          }}
        >
          {/* Header */}
          <div
            className="px-6 py-4 flex items-center gap-3 relative"
            style={{
              background: 'linear-gradient(135deg, #1a2744, #243352)',
            }}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                style={{ background: 'linear-gradient(135deg, #D4A853, #b8922e)' }}
              >
                🤖
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#1a2744]" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-sm tracking-wide">KidSense AI</h3>
              <p className="text-emerald-400 text-xs font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block animate-pulse" />
                Active now
              </p>
            </div>
            
            {/* Header Actions */}
            <div className="flex items-center gap-1">
              <button
                onClick={clearChat}
                title="Clear Chat"
                className="text-white/40 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth" id="chatbot-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs mr-2 mt-1 shadow-sm"
                    style={{ background: 'linear-gradient(135deg, #D4A853, #b8922e)' }}
                  >
                    🤖
                  </div>
                )}
                <div
                  className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'rounded-2xl rounded-br-md text-white'
                      : 'rounded-2xl rounded-bl-md text-gray-700 bg-gray-50 border border-gray-100'
                  }`}
                  style={
                    msg.role === 'user'
                      ? { background: 'linear-gradient(135deg, #1a2744, #2a3a5c)' }
                      : {}
                  }
                >
                  {renderText(msg.content)}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-fadeIn">
                <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs mr-2 mt-1 shadow-sm"
                  style={{ background: 'linear-gradient(135deg, #D4A853, #b8922e)' }}
                >
                  🤖
                </div>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-bl-md px-5 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-ks-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-ks-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-ks-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {messages.length < 5 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {[
                '📋 Services',
                '📍 Clinics',
                '📅 Book',
                '🌈 Support',
                '📊 Milestones',
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-[11px] px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:bg-ks-gold hover:text-white hover:border-ks-gold transition-all duration-300 hover:scale-105"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="px-4 py-3 border-t border-gray-100 bg-white">
            <div className="flex items-center gap-2 bg-gray-50 rounded-2xl px-4 py-2 border border-gray-200/70 focus-within:border-ks-gold focus-within:ring-2 focus-within:ring-ks-gold/20 transition-all shadow-inner">
              <input
                ref={inputRef}
                id="chatbot-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                disabled={isTyping}
                className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 disabled:opacity-50 h-9"
              />
              <button
                id="chatbot-send"
                onClick={() => sendMessage()}
                disabled={!input.trim() || isTyping}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 shadow-md"
                style={{
                  background: input.trim() && !isTyping
                    ? 'linear-gradient(135deg, #D4A853, #b8922e)'
                    : '#e5e7eb',
                }}
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-center text-[9px] text-gray-400 mt-2 font-medium uppercase tracking-wider">
              Powered by KidSense AI
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        #chatbot-messages::-webkit-scrollbar {
          width: 4px;
        }
        #chatbot-messages::-webkit-scrollbar-track {
          background: transparent;
        }
        #chatbot-messages::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        #chatbot-messages::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </>
  )
}
