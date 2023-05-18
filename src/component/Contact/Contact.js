import Sidebar from '../Sidebar/Index'
import './Contact.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import { Helmet } from 'react-helmet'

// change the contact location to lagos
const Contact = () => {
  const [letterClass] = useState('text-animate')

  const refFrom = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_sj47dpj',
        'template_g20nlx9',
        refFrom.current,
        'mW8WFQdas_Oc08y-M'
      )
      .then(
        () => {
          alert('Message sucessfully sent!')
          console.log('sucess')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, Please try again ')
          console.log('failed')
        }
      )
  }

  return (
    <>
    <Helmet>
        <title>BenFereranmi Site || Contact</title>
        <meta name="description" content="Ben Site contact page. If you want a professional website developer to help you to develop your website. Feel free to send message to me. I will be glad to help you to acheive your aim and goal. " />
        <meta name="keywords" content="React, Website, Home, contact, messages, newsletters, website contact, Web developer, Ben feranmi, Javascript, godaddy, cms, wordpress" />
        <meta name="robots" content="index, follow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="author" content="Opafunso OLuwaferanmi Benjamin"/>
        <meta name="revisit-after" content="7 days"/>
        <meta name="language" content="en"/>
        <meta property="og:title" content="BenFeranmi contact page"/>
        <meta property="og:image" content="URL of the "/>
        <meta property="og:url" content="ben-site-eta/portfolio"/>
      </Helmet>

    <div className="contact">
      <Sidebar />
      <div className="contact__details">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              className="text__animate"
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>

          <div className="contact-head">
            <p className="head1">
              I am interested in freelance opportunities - especially ambitious
              or large projects. However, if you have other request or question,
              don't hesitiate to contact me using the forn either.
            </p>
            <div className="head2">
              <h2>Other Details.</h2>
              Benjamin Feranmi
              <br />
              Nigeria
              <br />
              Branka Radiman 19, 665800 <br /> MitriBrant Area <br />
              <span>Opaferanmi01@gmail.com</span>
            </div>
          </div>
          <div className="contact-sp">
            <div className="contact-form">
              <form ref={refFrom} onSubmit={sendEmail}>
                <input
                  className="half"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />

                <input
                  className="half"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />

                <input
                  type="text"
                  name="Subject"
                  placeholder="Subject"
                  required
                />

                <textarea
                  placeholder="Message"
                  name="message "
                  required
                ></textarea>

                <input type="submit" className="flat-button" value="SEND" />
              </form>
            </div>

            <div className="contact-map">
              <MapContainer
                center={[7.790912432212298, 4.5523312863139935]}
                zoom={13}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[7.790912432212298, 4.5523312863139935]}>
                  <Popup>Benjamin is established here. </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
