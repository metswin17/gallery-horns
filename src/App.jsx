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
  const [searchTerm, setSearchTerm] = useState('');

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (beast) => {
    setSelectedBeast(beast);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const filteredBeasts = galleryData.filter((beast) => {
    const regex = new RegExp(searchTerm, 'i');
  
    return regex.test(beast.title);
  });

  return (
    <>
      <Header />
      
    <input
  className="search-bar"
  type="text"
  placeholder="Search beasts..."
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
/>
      <Gallery
        galleryData={filteredBeasts}
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