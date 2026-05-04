import HornedBeast from "./HornedBeast";

function Gallery({ items, setSelectedBeast, setShowModal }) {
  return (
    <div>
      <h1>Gallery</h1>

      {items.map((beast) => (
        <HornedBeast
          key={beast._id}
          title={beast.title}
          image_url={beast.image_url}
          description={beast.description}
        />
      ))}
    </div>
  );
}

export default Gallery;