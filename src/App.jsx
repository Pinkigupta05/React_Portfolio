import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Foreground from './components/Foreground';

function App() {
  return (
    <div className=" h-screen w-full text-neutral-300  selection:text-cyan-900">
      {/* Full-width fixed background */}
      <div className="fixed top-0 -z-10 h-full left-0 w-full">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10 h-screen w-full px-5 py-24 top-0 bg-cover bg-center bg-[url('/image.png')]">
        
          {/* Add any foreground content or components here */}
          <Foreground />
        </div>
      </div>

      {/* Content container with Tailwind utilities */}
      <div className="w-full px-10 mx-auto">
        <Navbar />
        <Hero />
        {/* Uncomment these components as needed */}
        <About />
        {/* <Technologies/> */}
        {/* <Experience/> */}
        {/* <Projects/> */}
        {/* <Contact/> */}
        {/* <Analytics/> */}
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;
