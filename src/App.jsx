import { useState } from 'react';
import data from './data.json';

import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [galleryData] = useState(data);

  // ✅ Add ONLY these lines
  //const [selectedBeast, setSelectedBeast] = useState(null);
  //const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />
      <Gallery items={galleryData} />
      <Footer />
    </>
  );
}



export default App;