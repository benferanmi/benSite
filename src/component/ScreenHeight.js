import React, { useEffect, useState } from 'react';

const ScreenHeight = ({ onWindowHeightChange }) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight;
      setWindowHeight(height);
      onWindowHeightChange(height); // Call the callback function in the parent component
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [onWindowHeightChange]);

  return null; // Since we don't render anything, we can return null
};

export default ScreenHeight;



//how it should look in the parent component..
// const handleWindowHeightChange = (height) => {
//   // Do something with the updated window height
//   console.log('Window height changed:', height);
// };

// return (
//   <div>
//     {/* Other components */}
//     <ScreenHeight onWindowHeightChange={handleWindowHeightChange} />
//     {/* Other components */}
//   </div>
// );
// };