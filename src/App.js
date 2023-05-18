import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Layout from './component/Layout/index.js';
import About from './component/About/index.js';
import AllAnimationJs from './cssAnimations/AllCss';
import Contact from './component/Contact/Contact';
import Portfolio from './component/Portfolio';
import Portfolio2 from './component/Portfolio/Portfolio';
// import { ContactUs } from './component/Contact/contactcopy';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path='home' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='animation' element={<AllAnimationJs />} />
      <Route path='contact' element={<Contact />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='portfolio1' element={< Portfolio2/>} />

    </Routes>
    </> 
  ) 
};

export default App;