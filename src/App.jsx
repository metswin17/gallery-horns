import { useState } from 'react';
import data from './data.json';

import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [galleryData] = useState(data);

  const [selectedBeast, setSelectedBeast] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (beast) => {
    setSelectedBeast(beast);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header />

      <Gallery
        galleryData={galleryData}
        handleOpenModal={handleOpenModal}
      />

      <SelectedBeast
        show={showModal}
        handleClose={handleCloseModal}
        beast={selectedBeast}
      />

      <Footer />
    </>
  );
}

export default App;