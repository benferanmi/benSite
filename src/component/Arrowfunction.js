import React, { useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

const Arrowfunction = () => {
    const location = useLocation();
    const currentPageUrl = location.pathname;
    const navigate = useNavigate();
    const [page]  = useState(currentPageUrl)

    console.log(currentPageUrl)
    function nextPage() {
        if (page  === '/') {
            navigate('/about')
        } else if (page  === '/about') {
            navigate('/contact')
        } else if (page === '/contact') {
            navigate('/portfolio')
        }
        else {
            navigate('/')
        }
    }

  return (
    <div>
       <div className="arrow-de" onClick={nextPage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  )
}

export default Arrowfunction
