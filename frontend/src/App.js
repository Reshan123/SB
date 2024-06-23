import './App.css';
import { About } from './views/Aboutus/About';
import { Eventform } from './views/Events/Eventform';
import { News } from './views/Events/News';
import { Join } from './views/Joinus/Join';

function App() {
  return (
    <>
     
      <News />
      <About />
      <Join />
      <Eventform />
    </>
  );
}

export default App;
