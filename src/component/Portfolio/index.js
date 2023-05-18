import React, { useEffect, useState } from 'react'
import Work from '../../data/WorkData'
import './index.scss'
import Sidebar from '../Sidebar/Index.js'
import { Helmet } from 'react-helmet'


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
    <Helmet>
        <title>BenFereranmi Site || Portfolios</title>
        <meta name="description" content="Top webiste that i have worked on as a website developer and a website designer ." />
        <meta name="keywords" content="React, Website, Home, Portfolio, Web developer, Ben feranmi, Javascript, godaddy, cms, wordpress" />
        <meta name="robots" content="index,follow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="author" content="Opafunso OLuwaferanmi Benjamin"/>
        <meta name="revisit-after" content="7 days"/>
        <meta name="language" content="en"/>
        <meta property="og:title" content="BenFeranmi portfolio page"/>
        <meta property="og:description" content="Description of your page"/>
        <meta property="og:image" content="URL of the "/>
        <meta property="og:url" content="ben-site-eta/portfolio"/>
      </Helmet>

    <Sidebar />
    <div className='portfolio'>
      <h1>Projects That I Have Done: </h1>
      <span>
      <img src={currentWork.image} alt={currentWork.workName}/>

      <div>
        <h1>{currentWork.workName}</h1>
      <button><a href={currentWork.projectLInk} >View Project</a> </button>
      </div>
      </span>
      <div className='buttons'> 
      <button className='nextbut' onClick={nextPortfolio}>Next</button>
      <button onClick={prePortfolio} className='prevbut' >Prev</button>
     </div>
    </div>

    
    </>
  );
}

export default Portfolio
