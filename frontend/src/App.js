import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/home/home';
import Navbar from './views/navbar/navbar';

import Footer from './views/Footer/Footer'

function App() {
  return (
    <Router>
      
      <Navbar home = "/" aboutus = "/" communityDetails = "/" events = "/" contactUs = "/" gallery = "/" login = "/" news="/" upcomingEvents="/" pastEvents="/"  />
      
      <Routes>
        <Route path="/" element={<Home />} />
      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
