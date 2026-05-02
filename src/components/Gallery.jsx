import HornedBeast from "./HornedBeast";



function Gallery() {
  return (
  <>
    <HornedBeast />
    <HornedBeast />
  </>

  )
}

function Gallery(props) {
  console.log(props.items);

  return (
    <div>
      <h1>Gallery</h1>
    </div>
  );
}


export default Gallery; 