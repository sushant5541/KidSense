import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import OurTeam from './pages/OurTeam'
import Contact from './pages/Contact'
import OccupationalTherapyPage from './pages/OccupationalTherapyPage'
import SpeechTherapyPage from './pages/SpeechTherapyPage'
import LocationsPage from './pages/LocationsPage'
import CorporatePage from './pages/CorporatePage'
import TherapyDeliveryPage from './pages/TherapyDeliveryPage'
import NDISPage from './pages/NDISPage'
import EducatorPage from './pages/EducatorPage'
import AreasOfConcernPage from './pages/AreasOfConcernPage'
import ResourcesPage from './pages/ResourcesPage'
import ComingSoon from './pages/ComingSoon'
import ScrollToTop from './components/ScrollToTop'
import ChatBot from './components/ChatBot'
import AuthPage from './pages/AuthPage'
import QuizPage from './pages/QuizPage'
import GrowthTrackerPage from './pages/GrowthTrackerPage'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ChatBot />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-kid-sense" element={<About />} />
            
            {/* Catch-all for all other routes to show ComingSoon */}
            <Route path="/about" element={<About />} />
            <Route path="/about/:subpage" element={<ComingSoon />} />
            <Route path="/corporate" element={<CorporatePage />} />
            <Route path="/corporate/:subpage" element={<ComingSoon />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:subpage" element={<ComingSoon />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/contact-us" element={<Contact />} />
            
            <Route path="/occupational-therapy" element={<OccupationalTherapyPage />} />
            <Route path="/speech-therapy" element={<SpeechTherapyPage />} />
            
            <Route path="/therapy-delivery" element={<TherapyDeliveryPage />} />
            <Route path="/therapy-delivery/:subpage" element={<ComingSoon />} />
            <Route path="/educator" element={<EducatorPage />} />
            <Route path="/educator/:subpage" element={<ComingSoon />} />
            <Route path="/areas-of-concern" element={<AreasOfConcernPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/:subpage" element={<ComingSoon />} />
            
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/locations/:subpage" element={<ComingSoon />} />
            <Route path="/ndis-services" element={<NDISPage />} />
            <Route path="/new-enquiry" element={<Contact />} />
            
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/growth-tracker" element={<GrowthTrackerPage />} />

            {/* Default 404 behavior */}
            <Route path="*" element={<ComingSoon />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
