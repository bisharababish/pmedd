import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import LoadingSkeleton from './components/LoadingSkeleton';

const HeroSlideshow = lazy(() => import('./components/HeroSlideshow'));
const AboutSection = lazy(() => import('./components/AboutSection'));

const ContactSection = lazy(() => import('./components/ContactSection'));
const TeamSection = lazy(() => import('./components/TeamSection'));
const CardiologyPage = lazy(() => import('./components/CardiologyPage'));
const PodcastPage = lazy(() => import('./components/PodcastPage'));
const NewsPage = lazy(() => import('./components/NewsPage'));
const LandingPage = lazy(() => import('./components/LandingPage'));

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTopButton />
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Suspense fallback={<LoadingSkeleton />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HeroSlideshow />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/about_mission" element={<AboutSection />} />
            <Route path="/about_deliverables" element={<AboutSection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/team" element={<TeamSection />} />
            <Route path="/cardiology" element={<CardiologyPage />} />
            <Route path="/podcast" element={<PodcastPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/landing" element={<LandingPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;