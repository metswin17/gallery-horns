import { useState } from 'react';

function HornedBeast({ beast, handleOpenModal }) {

  const [votes, setVotes] = useState(0);

const handleVotes = () => {
  setVotes(prevVotes => prevVotes + 1);
};

  return (
    <div>
      <h2>{beast.title}</h2>
      <p>❤️ Favorites: {votes}</p>

      <img
  src={beast.image_url}
  alt={beast.title}
  title={beast.title}
  onClick={() => {
    handleVotes();
    handleOpenModal(beast);
  }}
  style={{ width: '300px' }}
/>

      <p>{beast.description}</p>
    </div>
  );
}

export default HornedBeast;