import React, {useEffect, useState} from 'react'
import Work from '../../data/WorkData'
import './index2.scss'
import Sidebar from '../Sidebar/Index'
import ScreenHeight from '../ScreenHeight'

const Portfolio2 = () => {
  const [animate, setAnimate] = useState(false)
  const [works, setWorks] = useState(Work)
  const [height, setWindowHeight] = useState(window.innerHeight)

  const [startIndex, setStartIndex] = useState(0);

  const displayedItems = works.slice(startIndex, startIndex + 3);

  const handleClick = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % works.length);
  };

  useEffect(() => {
    setAnimate(true)
  }, [])


  const handleWindowHeightChange = (height) => {
    setWindowHeight(height)
    console.log(height)
};
  return (
    <>
    <Sidebar />
    <ScreenHeight onWindowHeightChange={handleWindowHeightChange} />
    <div height={height}>
    <div className='port'>
      {
        displayedItems?.map(works => (
          <div className='ports'>
          <a href={works.projectLInk}>
          <img src={works.image} alt={works.workName}  />
          <div>
          <h1>{works.workName}</h1>
          <button>view</button>
          </div>
          
          </a>
          </div>
        ))
      }
    </div>
    </div>

    <div className='specc'>
      <button onClick={handleClick}>
        next
      </button>
    </div>
    </>
  )
}

export default Portfolio2