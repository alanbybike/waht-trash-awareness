import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import OurWork from './components/OurWork';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import SocialMedia from './components/SocialMedia';
import VideoPlaceholder from './components/VideoPlaceholder';
import SocialFeedPlaceholder from './components/SocialFeedPlaceholder';
import Legal from './components/Legal';
import Cookies from './components/Cookies';
import Contact from './components/Contact';

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header>
          <Navigation />
          <SocialMedia />
        </Header>
        <Routes>
          <Route path="/" element={
            <Main>
              <h1 className="text-2xl font-bold mb-4">{t('hello')}</h1>
              <p className="text-gray-700">{t('sample')}</p>
              <VideoPlaceholder />
              <SocialFeedPlaceholder />
            </Main>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/our-work" element={<OurWork />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;