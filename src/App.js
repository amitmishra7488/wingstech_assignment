import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Iphone from "./components/Iphone";
import Bmw from "./components/Bmw";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { component: <Home />, label: "Home" },
    { component: <Iphone />, label: "iPhone" },
    { component: <Bmw />, label: "BMW" },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="App">
      <div className="carousel-container">
        <div className="carousel-images">
          {images.map((image, index) => (
            <div
              key={index}
              className="carousel-image"
              style={{ left: `${(index - currentIndex) * 100}%` }}
            >
              {currentIndex === index && (
                <Canvas>
                  <OrbitControls enableZoom={false} />
                  <ambientLight intensity={1} />
                  <directionalLight position={[-2, 5, 2]} intensity={1} />
                  {image.component}
                </Canvas>
              )}
            </div>
          ))}
        </div>
        <div className="carousel-buttons">
          <button className="carousel-button" onClick={handlePrevClick}>
            Prev
          </button>
          <button className="carousel-button" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
