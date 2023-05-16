import { useState } from "react";
import image from '../../assets/image/bodys.png'

import "./parallaximage.css";

const ParallaxImage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="parallax-container" onMouseMove={handleMouseMove}>
      <div
        className="parallax-image"
        style={{
          transform: `translate(-${mousePosition.x / 20}px, -${
            mousePosition.y / 20
          }px)`,
          backgroundImage: `url(${image})`,
        }}
      />
    </div>
  );
};

export default ParallaxImage;
