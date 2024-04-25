import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/home/home';
import Navbar from './views/navbar/navbar';
import Contactus from './views/contactus/contactus';
import { About } from './views/Aboutus/About';
import { Join } from './views/Joinus/Join';
import Footer from './views/Footer/Footer'

function App() {
  return (
    <Router>
      
      <Navbar home = "/" aboutus = "/" communityDetails = "/" events = "/" contactUs = "/contact-us" gallery = "/" login = "/" news="/" upcomingEvents="/" pastEvents="/"  />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path='/join' element={<Join />} />
        <Route path='/about' element={<About />} />
      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
