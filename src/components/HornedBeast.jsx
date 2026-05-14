
function HornedBeast({ beast, handleOpenModal }) {
  return (
    <div>
      <h2>{beast.title}</h2>

      <img
        src={beast.image_url}
        alt={beast.title}
        title={beast.title}
        onClick={() => handleOpenModal(beast)}
      />

      <p>{beast.description}</p>
    </div>
  );
}

export default HornedBeast;