import { useState } from 'react';
import data from './data.json';

import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';

import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [galleryData] = useState(data);

  const [selectedHorns, setSelectedHorns] = useState('All');
  
  const handleHornChange = (event) => {
    setSelectedHorns(event.target.value);
  };



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
  
    const matchesSearch = regex.test(beast.title);
  
    const matchesHorns =
      selectedHorns === 'All' ||
      beast.horns === Number(selectedHorns);
  
    return matchesSearch && matchesHorns;
  });

  return (
    <>
      <Header />
      
      <Form>
  <Form.Group>
    <Form.Label>Filter by Number of Horns</Form.Label>

    <Form.Select onChange={handleHornChange}>
      <option value="All">All</option>
      <option value="1">1 Horn</option>
      <option value="2">2 Horns</option>
      <option value="3">3 Horns</option>
      <option value="100">100 Horns</option>
    </Form.Select>
  </Form.Group>
</Form>

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