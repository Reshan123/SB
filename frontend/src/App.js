import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SBCommittee from './views/committee/SBCommittee';
import Navbar from './views/navbar/navbar';
import Home from './views/home/home';
import Footer from './views/Footer/Footer';

function App() {
  return (
    <Router>
      
      <Navbar home = "/" aboutus = "/" communityDetails = "/" events = "/" contactUs = "/" gallery = "/" login = "/" news="/" upcomingEvents="/" pastEvents="/"  />
      
      <Routes>
        <Route path="/" element={<SBCommittee />} />
        <Route path="/home" element={<Home />} />
      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
