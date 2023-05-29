import './App.css';
import About from './container/About';
import Challenges from './container/Challenges';
import Footer from './container/Footer';
import Header from './container/Header';
import Hero from './container/Hero';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Chat from './components/Chat';
import OldWebsites from './container/OldWebsites';

function App() {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])
  return (
    <div className="app-container">
      <Header/>
      <Hero  data-aos='fade-up'/>
      <About  data-aos='fade-up'/>
      <Challenges  data-aos='fade-up'/>
      <OldWebsites/>
      <Footer/>
      <Chat/>
    </div>
  );
}

export default App;
