import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/home/home';
import Navbar from './views/navbar/navbar';
import Contactus from './views/contactus/contactus';

import Footer from './views/Footer/Footer'

function App() {
  return (
    <Router>
      
      <Navbar home = "/" aboutus = "/" communityDetails = "/" events = "/" contactUs = "/contact-us" gallery = "/" login = "/" news="/" upcomingEvents="/" pastEvents="/"  />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contactus />} />
      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
