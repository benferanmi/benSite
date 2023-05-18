import Sidebar from '../Sidebar/Index'
import { Outlet } from 'react-router-dom'
import './index.scss'
import Home from '../Home'
import { Helmet } from 'react-helmet';


const Layout = () => {
  return (
     <>
     <Helmet>
        <title>Home Page</title>
        <meta name="description" content="This is the home page of my website." />
        <meta name="keywords" content="React, Website, Home, Portfolio, Web developer, Ben feranmi, Javascript, Home Page"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        {/* Add more meta tags as needed */}
      </Helmet>
          <div className="App">
            <Sidebar />
            <div className="page">
              <span className="tags top__tags"></span>

              <Outlet />

              <span className="tags bottom__tags">
                <Home />
              </span>
              <br></br>
              <span className="bottom__tags__html"></span>
            </div>
          </div>
      </>
  )
}

export default Layout
