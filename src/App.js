import "./App.css";
import ImageCard from "./component/ImageCard";
import images from "./data/image";

function App() {
  return (
    <>
      <div className="app">
        <header className="header">
          <h1>Dynamic Image Gallery</h1>
          <p>Explore our beautiful collection of images</p>
        </header>

        <main className="gallery-container">
          <div className="gallery">
            {images.map((image) => (
              <ImageCard
                key={image.id}
                image={image}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;