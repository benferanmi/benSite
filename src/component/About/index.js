import Sidebar from '../Sidebar/Index';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import { faAngular, faCss3, faGit, faHtml5, faJava, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const About = () => {
    const {letterClass} = useState('text-animate')
    return(

        <div className='about fade'>
            <Sidebar/>

            <div className='about__details'>
                <div className='text__zone'>
                  <h1>
                  <AnimatedLetters 
                  letterClass={letterClass}
                    strArray={['A','B','O','U','T',' ','M','E']}
                    idx={15}
                    />
                  </h1>

                    <p>
                    Multitalented Front end developer with experience in web software industry. Demonstrated excellent skills in HTML, JavaScript and React. True team player with strengths in adaptability and accuracy. Innovative and technically-astute website designer well-versed in analyzing user needs and developing software to precisely meet diverse needs. 
                    </p>
                    <p>
                    Demonstrates mastery of multiple programming languages and proactively keeps up with industry trends. Driven to wear many programming hats with expertise in creating everything from new applications to new operating systems. Eager to contribute to team success through hard work, attention to detail and excellent organizational skills. 
                    </p>
                    <p>
                    Clear understanding of Task and training in Skill. Motivated to learn, grow and excel in Industry.
                    </p>
                </div>
            </div>

            <div className='stage__cube__cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="red"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="blue"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="yellow"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="deep-blue"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faReact} color="purple"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJava} color="gold"/>
                    </div>
                </div>
            </div>
        </div>
        
        )
} 


export default About;