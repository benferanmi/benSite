// ScreenWidth.jsx
import React, { useEffect, useState } from 'react';

const ScreenWidth = ({ onWindowWidthChange }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      onWindowWidthChange(width); // Call the callback function in the parent component
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [onWindowWidthChange]);

  return null; // Since we don't render anything, we can return null
};

export default ScreenWidth;
