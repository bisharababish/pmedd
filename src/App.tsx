import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSlideshow from './components/HeroSlideshow';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import ResearchSection from './components/ResearchSection';
import EventsSection from './components/EventsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TeamSection from './components/TeamSection';
import CardiologyPage from './components/CardiologyPage';
import PodcastPage from './components/PodcastPage';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTopButton />
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HeroSlideshow />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/programs" element={<ProgramsSection />} />
          <Route path="/research" element={<ResearchSection />} />
          <Route path="/events" element={<EventsSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/team" element={<TeamSection />} />
          <Route path="/cardiology" element={<CardiologyPage />} />
          <Route path="/podcast" element={<PodcastPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;