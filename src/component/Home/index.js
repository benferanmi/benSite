import './index.scss'
import LogoMain from '../../assets/image/b-logo.JPG'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
// import LogoPg from './Logo'
import { motion } from "framer-motion";
import ParallaxImage from './ParallaxImage'

const Home = () => {
  const [spec, setSpec] = useState('Website Developer')
  const [windowWidth, setWindowWidth] = useState(window.innerHeight)
  const [letterClass] = useState('text-animate')
  const nameArray = ['e', 'n', 'j', 'a', 'm', 'i', 'n']
  const secArray = [
    'w',
    'e',
    'b',
    '',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })

  useEffect(() => {
    const specArray = ['React Developer', 'Front End Developer', 'Wordpress Wesbite Developer', 'Godaddy website builder Professional', 'Node js (backend)', 'MERN (Full Stack)']
    const interval = setInterval(() => {
      const newIndex = (specArray.indexOf(spec) + 1) % specArray.length;
      setSpec(specArray[newIndex]);
      
    }, 2000)

    return () => clearInterval(interval);
  } ,[spec])

  console.log(spec)
  //main body starts below
  return (
    <div className="container home__page">
      <div className="text__zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass}_12`}>i, </span>
          <br />
          <span className={`${letterClass}_13`}>I </span>
          <span className={`${letterClass}_14`}>'m </span>
          <img src={LogoMain} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={secArray}
            idx={22}
          />
        </h1>
        <motion.h2
                animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
                className='specs-transistion'
                // width={windowWidth - '100'}
            >
          {spec}
          </motion.h2>
        
        <Link to="/contact" className="flat__button">
          CONTACT ME
        </Link>
      </div>
      {/* <LogoPg /> */}
      <ParallaxImage />
    </div>
  )
}

export default Home
