// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'

import data from './data.json';
import Gallery from './Gallery';
import
'bootstrap/dist/css/bootstrap.mim.css'
import Header from './components/Header'
// import Gallery from './components/Gallery'
import Footer from './components/Footer'
import './data.json'
import './App.css'

function App() {

  return (
    <>
    <Header /> 
    {/* <Gallery />, */}
    <Footer />
    </>
  )
}

import { useState } from 'react';
import data from './data.json';

function App() {
  const [galleryData, setGalleryData] = useState(data);

  return (
    <div>
      {/* we'll use this soon */}
    </div>
  );
}

function App() {
  const [galleryData] = useState(data);

  return (
    <div>
      <Gallery items={galleryData} />
    </div>
  );
}

export default App
