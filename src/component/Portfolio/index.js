import React, { useEffect, useState } from 'react'
import Work from '../../data/WorkData'
import './index.scss'
import Sidebar from '../Sidebar/Index.js'


const Portfolio = () => {
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);
  const [work, setWork] = useState(Work)  
  const [currentWork, setCurrentWork] = useState(work[currentWorkIndex])

  console.log(currentWork)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWorkIndex(currentWorkIndex => (currentWorkIndex + 1) % work?.length);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [work?.length]);


function nextPortfolio (e) {
    e.preventDefault()
    setCurrentWorkIndex(currentWorkIndex => (currentWorkIndex + 1) % work?.length);
    const next = setCurrentWork(work[currentWorkIndex])
    console.log(next)
    return next
 }
//  function prePortfolio (e) {
//   e.preventDefault()
//   setCurrentWorkIndex(currentWorkIndex => (currentWorkIndex - 1) % work?.length);
//   const next = setCurrentWork(work[currentWorkIndex])
//   console.log(next)
//   return next
// }
function prePortfolio(e) {
  e.preventDefault();
  let newIndex = currentWorkIndex - 1;
  if (newIndex < 0) {
    newIndex = work.length - 1;
  }
  setCurrentWorkIndex(newIndex);
  const next = setCurrentWork(work[newIndex]);
  console.log(next);
  return next;
}
  return (
    <>
    <Sidebar />
    <div className='portfolio'>
      <h1>Projects That I Have Done: </h1>
      <span>
      <img src={currentWork.image} alt={currentWork.workName} />

      <div>
        <h1>{currentWork.workName}</h1>
      <button><a href={currentWork.projectLInk} >View Project</a> </button>
      </div>
      </span>
      <div className='buttons'> 
      <button className='nextbut' onClick={nextPortfolio}>Next</button>
      <button onClick={prePortfolio} className='prevbut' >Previous</button>
     </div>
    </div>

    
    </>
  );
}

export default Portfolio
