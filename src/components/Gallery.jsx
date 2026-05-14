import HornedBeast from './HornedBeast';

function Gallery({ galleryData, handleOpenModal }) {
  return (
    <>
      {galleryData.map((beast, index) => (
        <HornedBeast
          key={index}
          beast={beast}
          handleOpenModal={handleOpenModal}
        />
      ))}
    </>
  );
}

export default Gallery;