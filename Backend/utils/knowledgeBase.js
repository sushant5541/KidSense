/**
 * Kid Sense Knowledge Base
 * Comprehensive Q&A engine for child development topics
 */

const knowledgeBase = {
  // ─── Services ───────────────────────────────────────
  services: {
    keywords: ['service', 'offer', 'provide', 'therapy', 'therapies', 'help', 'treatment', 'what do you do', 'programs', 'program'],
    responses: [
      `We offer a comprehensive range of paediatric therapy services to support your child's development 🌟\n\n**Our Core Services:**\n• **Occupational Therapy** — Helps children develop fine motor skills, sensory processing, self-care skills, and school readiness\n• **Speech Pathology** — Supports language development, articulation, fluency, social communication, and literacy skills\n• **Psychology** — Behavioural support, emotional regulation, anxiety management, and social skills development\n• **Dietetics** — Nutrition support, fussy eating management, and food-related sensory issues\n\n**Group Programs:**\n• School readiness programs\n• Social skills groups\n• Handwriting programs\n• Sensory processing groups\n\nWould you like to know more about any specific service? 😊`
    ]
  },

  // ─── Occupational Therapy ───────────────────────────
  occupationalTherapy: {
    keywords: ['occupational therapy', 'ot ', 'fine motor', 'sensory', 'handwriting', 'self-care', 'daily living', 'coordination', 'motor skills', 'sensory processing'],
    responses: [
      `**Occupational Therapy (OT)** at Kid Sense helps children participate in everyday activities with confidence! ✋\n\n**Our OT team can help with:**\n• **Fine Motor Skills** — Pencil grip, cutting with scissors, manipulating small objects\n• **Sensory Processing** — Helping children who are over or under-sensitive to sensory input\n• **Handwriting** — Letter formation, sizing, spacing, and speed\n• **Self-Care Skills** — Dressing, eating, toileting, and grooming\n• **Gross Motor Skills** — Balance, coordination, ball skills, and playground activities\n• **School Readiness** — Preparing children for the classroom environment\n• **Visual Perception** — Understanding what they see for reading and writing\n\n**Signs your child may benefit from OT:**\n• Difficulty holding a pencil or using scissors\n• Avoids messy play or certain textures\n• Struggles with buttons, zippers, or shoelaces\n• Has trouble sitting still or paying attention\n• Bumps into things or seems clumsy\n\nTo book an OT assessment, call us at **+91 80 4123 4567** or email **contact@kidsense.in** 📞`
    ]
  },

  // ─── Speech Therapy ─────────────────────────────────
  speechTherapy: {
    keywords: ['speech', 'language', 'talk', 'talking', 'speak', 'speaking', 'stutter', 'stammer', 'lisp', 'pronunciation', 'articulation', 'communication', 'words', 'sentences', 'literacy', 'reading'],
    responses: [
      `**Speech Pathology** at Kid Sense supports your child's communication journey! 🗣️\n\n**Our Speech Pathologists help with:**\n• **Articulation & Phonology** — Pronouncing sounds clearly\n• **Language Development** — Understanding and using words, sentences, and stories\n• **Fluency (Stuttering)** — Smooth, confident speech\n• **Social Communication** — Conversation skills, understanding social cues\n• **Literacy** — Reading, spelling, and written expression\n• **Voice** — Pitch, volume, and vocal quality\n• **Feeding & Swallowing** — Oral motor skills for eating\n\n**Signs your child may need speech therapy:**\n• Hard to understand when they speak\n• Uses fewer words than other children their age\n• Struggles to follow instructions\n• Difficulty making friends or playing with others\n• Has trouble with reading or spelling\n• Stutters or gets stuck on words\n\nEarly intervention makes a big difference! Call **+91 80 4123 4567** to book an assessment 😊`
    ]
  },

  // ─── Psychology ─────────────────────────────────────
  psychology: {
    keywords: ['psycholog', 'behaviour', 'behavior', 'anxiety', 'anxious', 'emotional', 'emotion', 'angry', 'anger', 'tantrum', 'meltdown', 'social skills', 'friends', 'bully', 'confidence', 'self-esteem', 'worry', 'worried', 'fear', 'scared', 'sad', 'depression', 'mental health'],
    responses: [
      `**Psychology Services** at Kid Sense provide compassionate support for your child's emotional wellbeing 💙\n\n**Our Psychologists help with:**\n• **Anxiety & Worry** — Managing fears, separation anxiety, and social anxiety\n• **Behavioural Challenges** — Tantrums, aggression, defiance, and emotional meltdowns\n• **Emotional Regulation** — Understanding and managing big feelings\n• **Social Skills** — Making friends, resolving conflicts, and understanding social cues\n• **Self-Esteem & Confidence** — Building a positive self-image\n• **Autism Spectrum** — Diagnosis, support, and strategies\n• **ADHD** — Assessment and management strategies\n• **Grief & Loss** — Supporting children through difficult times\n\n**Signs your child may benefit from psychology support:**\n• Frequent tantrums or meltdowns beyond the expected age\n• Excessive worrying or fearfulness\n• Difficulty making or keeping friends\n• Sudden changes in behaviour or mood\n• Trouble coping with change or transitions\n\nOur psychologists use evidence-based, child-friendly approaches. Call **+91 80 4123 4567** to learn more 🤗`
    ]
  },

  // ─── Dietetics ──────────────────────────────────────
  dietetics: {
    keywords: ['diet', 'nutrition', 'food', 'eating', 'fussy', 'picky', 'feed', 'feeding', 'meal', 'weight', 'growth', 'allergy', 'intolerance'],
    responses: [
      `**Dietetics Services** at Kid Sense help children develop a healthy relationship with food 🥗\n\n**Our Dietitians help with:**\n• **Fussy/Picky Eating** — Expanding food variety and reducing mealtime stress\n• **Food Sensory Issues** — Addressing texture, smell, and taste sensitivities\n• **Growth Concerns** — Ensuring adequate nutrition for healthy development\n• **Food Allergies & Intolerances** — Safe meal planning and nutritional adequacy\n• **Weight Management** — Healthy eating habits for children\n• **Mealtime Behaviour** — Creating positive, stress-free mealtimes\n\n**Signs your child may benefit from dietetics support:**\n• Eats fewer than 20 different foods\n• Refuses entire food groups (e.g., all vegetables)\n• Gags or vomits when trying new foods\n• Mealtimes are stressful for the whole family\n• Concerns about growth or weight\n\nCall **+91 80 4123 4567** to book a consultation 😊`
    ]
  },

  // ─── Locations ──────────────────────────────────────
  locations: {
    keywords: ['location', 'where', 'address', 'clinic', 'office', 'branch', 'near me', 'suburb', 'find', 'indiranagar', 'koramangala', 'jayanagar', 'hsr', 'whitefield', 'malleshwaram', 'bengaluru', 'bangalore', 'karnataka', 'ka '],
    responses: [
      `We have **6 clinic locations** across Bengaluru to make it easy for you! 📍\n\n**Our Locations:**\n🏥 **Indiranagar** (Main Office) — 123, 100 Feet Rd, Indiranagar, Bengaluru KA 560038\n🏥 **Koramangala** — Serving Bengaluru's south-east\n🏥 **Jayanagar** — Serving Bengaluru's south\n🏥 **HSR Layout** — Serving Bengaluru's IT-hub\n🏥 **Whitefield** — Serving Bengaluru's east\n🏥 **Malleshwaram** — Serving Bengaluru's north\n\nEach clinic is purpose-built with child-friendly therapy rooms, sensory gyms, and welcoming waiting areas.\n\nFor specific clinic addresses and availability, call **+91 80 4123 4567** or visit **kidsense.in/locations** 😊`
    ]
  },

  // ─── Booking ────────────────────────────────────────
  booking: {
    keywords: ['book', 'appointment', 'schedule', 'referral', 'how to start', 'get started', 'first visit', 'initial', 'assessment', 'wait', 'waiting list', 'available', 'availability', 'register'],
    responses: [
      `Great — let's get you booked in! 📅\n\n**How to Book an Appointment:**\n\n1️⃣ **Phone:** Call **+91 80 4123 4567** (Mon-Fri, 8:15am - 5:15pm)\n2️⃣ **Email:** Send us a message at **contact@kidsense.in**\n3️⃣ **Online:** Visit **kidsense.in** and use the enquiry form\n\n**What you'll need:**\n• Your child's name and date of birth\n• A brief description of your concerns\n• Any referrals you may have (GP, paediatrician)\n• Your preferred clinic location\n\n**What happens first:**\n• Our intake team will discuss your concerns\n• We'll match your child with the right therapist\n• An initial assessment will be scheduled\n• You'll receive a thorough report with recommendations\n\n**Referral:** A GP referral is helpful for insurance but is NOT required to book. You can self-refer anytime!\n\nOur friendly team is here to help — don't hesitate to reach out! 😊`
    ]
  },

  // ─── Support Services ──────────────────────────────
  support: {
    keywords: ['ndis', 'support', 'funding', 'insurance', 'corporate', 'scheme', 'government', 'niramaya', 'swavalamban', 'early intervention'],
    responses: [
      `Kid Sense provides support for various **Support Services & Insurance Schemes** in India! 🌈\n\n**Support at Kid Sense:**\n• ✅ Insurance / Corporate Benefits\n• ✅ Private Health Insurance\n• ✅ Government Schemes support\n• ✅ Occupational Therapy support\n• ✅ Speech Pathology support\n• ✅ Psychology support\n• ✅ Dietetics support\n\n**Getting started with support at Kid Sense:**\n1. Share your insurance or scheme details with our team\n2. We'll check your coverage and budgets\n3. A Service Agreement will be created\n4. Therapy sessions begin!\n\n**Early Childhood Intervention:**\nChildren under 9 may access specialized early intervention programs, even without a formal diagnosis.\n\n**Need help navigating support options?** Call **+91 80 4123 4567** — our team can guide you through the process 💛`
    ]
  },

  // ─── Costs & Fees ──────────────────────────────────
  costs: {
    keywords: ['cost', 'fee', 'price', 'how much', 'expensive', 'afford', 'payment', 'pay', 'rebate', 'private health', 'insurance', 'bulk bill', 'gap', 'fund'],
    responses: [
      `Here's what you need to know about fees and funding options 💰\n\n**Funding Options at Kid Sense:**\n\n💼 **Private Health Insurance:**\n• We accept all major health funds\n• Rebates depend on your level of cover\n\n🏢 **Corporate Benefits:**\n• Many corporate insurance plans cover paediatric therapy\n• Check with your HR for wellness benefit details\n\n💳 **Private/Self-Funded:**\n• Available for families without referrals or funding\n• Payment on the day of service\n\nFor specific fee information, please call **+91 80 4123 4567** — our team can explain all your options! 😊`
    ]
  },

  // ─── Hours ──────────────────────────────────────────
  hours: {
    keywords: ['hour', 'open', 'close', 'time', 'when', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'weekend'],
    responses: [
      `Here are our operating hours ⏰\n\n**Main Office Hours:**\n📅 Monday – Friday: **8:15am – 5:15pm**\n📅 Saturday & Sunday: **Closed**\n\n⚠️ **Please note:** Individual clinic hours may vary. Some locations offer early morning or late afternoon sessions.\n\nFor specific clinic availability, please call **+91 80 4123 4567** and our friendly reception team will help you find a time that works for your family! 😊`
    ]
  },

  // ─── Contact ────────────────────────────────────────
  contact: {
    keywords: ['contact', 'phone', 'call', 'email', 'reach', 'touch', 'number', 'enquiry', 'enquire'],
    responses: [
      `We'd love to hear from you! Here's how to reach us 📞\n\n**Contact Details:**\n📞 **Phone:** +91 80 4123 4567\n📧 **Email:** contact@kidsense.in\n🌐 **Website:** kidsense.in\n📍 **Main Office:** 123, 100 Feet Rd, Indiranagar, Bengaluru KA 560038\n\n**Office Hours:** Mon-Fri, 8:15am – 5:15pm\n\nOur reception team is friendly and knowledgeable — they can answer your questions and help you get started! 😊`
    ]
  },

  // ─── Milestones ─────────────────────────────────────
  milestones: {
    keywords: ['milestone', 'development', 'developmental', 'age', 'stage', 'normal', 'expected', 'typical', 'behind', 'delay', 'delayed', 'late', 'should my child', 'when should'],
    responses: [
      `Understanding developmental milestones helps you know when to seek support 📊\n\n**Key Milestones to Watch:**\n\n👶 **0-12 months:**\n• Babbling by 6 months\n• Responding to their name by 9 months\n• First words around 12 months\n• Reaching and grasping objects\n\n🧒 **1-2 years:**\n• Walking independently by 18 months\n• Combining 2 words by age 2\n• Using a spoon, drinking from a cup\n• Simple pretend play\n\n👧 **2-3 years:**\n• Speaking in short sentences\n• Running, jumping, climbing\n• Playing alongside other children\n• Following 2-step instructions\n\n🧒 **3-5 years:**\n• Understood by unfamiliar people (by age 4)\n• Holding a pencil, drawing shapes\n• Taking turns, sharing, cooperative play\n• Dressing independently\n\n⚠️ **Remember:** Every child develops at their own pace. If you have concerns, early assessment is always a good idea!\n\nCall **+91 80 4123 4567** for a developmental screening 🌟`
    ]
  },

  // ─── Autism / ASD ───────────────────────────────────
  autism: {
    keywords: ['autism', 'asd', 'spectrum', 'autis', 'asperger', 'social communication', 'repetitive', 'stimming', 'eye contact', 'diagnosis'],
    responses: [
      `We provide comprehensive support for children on the Autism Spectrum 💙\n\n**Autism Support at Kid Sense:**\n• **Diagnostic Assessments** — Multi-disciplinary assessment for ASD\n• **Occupational Therapy** — Sensory processing, daily living skills, fine motor development\n• **Speech Pathology** — Social communication, language skills, pragmatic language\n• **Psychology** — Social skills, emotional regulation, behaviour support\n• **Group Programs** — Social skills groups for children with ASD\n\n**Early signs to look for:**\n• Limited eye contact or social smiling\n• Delayed speech or loss of previously acquired words\n• Repetitive behaviours or intense interests\n• Difficulty with change or transitions\n• Sensory sensitivities (noise, textures, lights)\n• Preferring to play alone\n\n**Important:** Early intervention is key! The earlier support begins, the better the outcomes.\n\n💛 Our team is experienced and compassionate. Call **+91 80 4123 4567** to discuss your concerns — no referral needed to start the conversation.`
    ]
  },

  // ─── ADHD ───────────────────────────────────────────
  adhd: {
    keywords: ['adhd', 'attention', 'hyperactiv', 'focus', 'concentrate', 'concentration', 'distract', 'impulsive', 'fidget', 'sit still', 'restless'],
    responses: [
      `We understand the challenges of ADHD and are here to help! 🧠\n\n**ADHD Support at Kid Sense:**\n• **Psychology** — Behavioural strategies, organisational skills, emotional regulation\n• **Occupational Therapy** — Attention strategies, sensory regulation, classroom tools\n• **Assessment** — Comprehensive ADHD assessments and support plans\n\n**Signs that may suggest ADHD:**\n• Difficulty staying focused on tasks\n• Frequently losing belongings\n• Trouble following multi-step instructions\n• Excessive fidgeting or inability to sit still\n• Acting impulsively without thinking\n• Difficulty waiting their turn\n• Struggling with organisation and time management\n\n**What we can do:**\n• Develop strategies for home and school\n• Sensory tools and regulation techniques\n• Work with teachers to support classroom learning\n• Build self-esteem and confidence\n\nCall **+91 80 4123 4567** to book an assessment 📞`
    ]
  },

  // ─── School ─────────────────────────────────────────
  school: {
    keywords: ['school', 'kinder', 'kindergarten', 'prep', 'classroom', 'teacher', 'learn', 'learning', 'homework', 'academic', 'writing', 'read', 'spell'],
    responses: [
      `We help children thrive at school! 🎓\n\n**School Support Services:**\n• **School Readiness Programs** — Preparing children for the classroom\n• **Handwriting Support** — Letter formation, sizing, speed, and legibility\n• **Literacy Support** — Reading, spelling, and written expression\n• **Attention & Focus** — Strategies to stay on task in the classroom\n• **Social Skills** — Making friends and navigating the playground\n• **Sensory Strategies** — Managing sensory needs in a busy classroom\n\n**Signs your child may need school support:**\n• Struggling to keep up with classmates\n• Avoiding writing tasks or homework\n• Difficulty sitting at a desk for extended periods\n• Trouble making friends at school\n• Teacher expressing concerns about progress\n\nWe can also work directly with your child's school to implement support strategies.\n\nCall **+91 80 4123 4567** to discuss how we can help your child succeed at school! 📚`
    ]
  },

  // ─── Greeting ───────────────────────────────────────
  greeting: {
    keywords: ['hello', 'hi ', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy', 'g\'day', 'greetings'],
    responses: [
      `Hello! 👋 Welcome to Kid Sense Child Development! I'm here to help you with any questions about:\n\n• 🩺 Our therapy services (OT, Speech, Psychology, Dietetics)\n• 📍 Clinic locations across Bengaluru\n• 📅 Booking appointments\n• 🌈 Support and funding options\n• 📊 Child development milestones\n• ❓ Any other questions!\n\nWhat would you like to know? 😊`
    ]
  },

  // ─── Thanks ─────────────────────────────────────────
  thanks: {
    keywords: ['thank', 'thanks', 'cheers', 'appreciate', 'helpful', 'great info', 'awesome', 'perfect', 'wonderful'],
    responses: [
      `You're very welcome! 😊 We're always happy to help.\n\nIf you have any more questions in the future, don't hesitate to ask! You can also reach our team directly:\n\n📞 **+91 80 4123 4567**\n📧 **contact@kidsense.in**\n\nWishing you and your family all the best! 💛`
    ]
  },

  // ─── Goodbye ────────────────────────────────────────
  goodbye: {
    keywords: ['bye', 'goodbye', 'see you', 'take care', 'good night', 'gotta go', 'got to go', 'later'],
    responses: [
      `Goodbye! 👋 It was lovely chatting with you.\n\nRemember, our team is always here if you need us:\n📞 **+91 80 4123 4567** | 📧 **contact@kidsense.in**\n\nTake care and all the best to your family! 💛`
    ]
  },

  // ─── Emergency ──────────────────────────────────────
  emergency: {
    keywords: ['emergency', 'urgent', 'crisis', 'danger', 'suicide', 'self-harm', 'harm', 'hurt', 'hospital', 'ambulance', '112'],
    responses: [
      `⚠️ **If life is in danger, please call 112 immediately.**\n\nKid Sense is a scheduled multidisciplinary clinic and is **not equipped to handle medical emergencies**.\n\n**Crisis Support Services:**\n🆘 **Emergency:** 112\n📞 **Aasra:** 9152987821 (24/7)\n📞 **Childline India:** 1800 11 2345\n📞 **Kiran Helpline:** 1800 599 0019\n\nPlease reach out to these services if you or your child needs urgent support. You are not alone. 💙`
    ]
  },

  // ─── About Kid Sense ────────────────────────────────
  about: {
    keywords: ['about kid sense', 'who are you', 'what is kid sense', 'tell me about kid sense', 'tell me about you', 'history', 'team', 'staff', 'therapist', 'experience', 'how long have you', 'years of experience'],
    responses: [
      `**About Kid Sense Child Development** 🌟\n\nKid Sense is a leading paediatric therapy clinic with over **20 years of experience** helping children reach their full potential.\n\n**What makes us special:**\n• 🏆 **20+ years** of experience in child development\n• 👨‍⚕️ **Multi-disciplinary team** of experienced therapists\n• 📍 **6 clinic locations** across Bengaluru\n• 🌈 **Certified Support Center**\n• 📋 **Evidence-based** therapy approaches\n• 👨‍👩‍👧‍👦 **Family-centred** care model\n• 🏥 **Purpose-built** child-friendly clinics\n\n**Our Philosophy:**\nWe believe every child deserves the opportunity to thrive. Our therapists work closely with families to set meaningful goals and celebrate every achievement.\n\n**Website:** kidsense.in\n📞 **+91 80 4123 4567** to meet our team! 😊`
    ]
  }
};

/**
 * Find the best matching topic based on user message
 */
function findBestMatch(message) {
  const lowerMessage = message.toLowerCase();
  let bestMatch = null;
  let highestScore = 0;

  for (const [topic, data] of Object.entries(knowledgeBase)) {
    let score = 0;
    let matchCount = 0;

    for (const keyword of data.keywords) {
      if (lowerMessage.includes(keyword.toLowerCase())) {
        matchCount++;
        const wordCount = keyword.trim().split(/\s+/).length;
        const specificityBonus = wordCount > 1 ? wordCount * 3 : 0;
        score += keyword.length + specificityBonus;
      }
    }

    if (matchCount > 1) {
      score += matchCount * 2;
    }

    if (matchCount > 0 && score > highestScore) {
      highestScore = score;
      bestMatch = topic;
    }
  }

  return bestMatch;
}

/**
 * Generate a response based on the user message and conversation history
 */
export function generateResponse(message, history = []) {
  const topic = findBestMatch(message);

  if (topic) {
    const responses = knowledgeBase[topic].responses;
    return {
      reply: responses[Math.floor(Math.random() * responses.length)],
      topic,
      confidence: 'high',
    };
  }

  // Fallback for unrecognized questions
  return {
    reply: `That's a great question! 🤔 While I may not have the specific answer right now, our expert team would love to help you personally.\n\n**Here's how to reach us:**\n📞 **Phone:** +91 80 4123 4567 (Mon-Fri, 8:15am-5:15pm)\n📧 **Email:** contact@kidsense.in\n🌐 **Website:** kidsense.in\n\nIn the meantime, I can help you with:\n• Our therapy services (OT, Speech, Psychology, Dietetics)\n• Clinic locations across Bengaluru\n• Booking appointments\n• Support & funding options\n• Child development milestones\n\nJust ask! 😊`,
    topic: 'fallback',
    confidence: 'low',
  };
}

export default knowledgeBase;
