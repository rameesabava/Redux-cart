import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faCopyright, faEnvelope, faPhone, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='bg-primary w-100'>
        <div className='row text-light m-5'>
          <div className='col-md-5 mt-5'>
            <div className='fs-3 mb-3'><FontAwesomeIcon icon={faTruckFast} /> E Cart</div>
            <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
            <p>Code licensed Luminar, docs CC BY 3.0.</p>
            <p>Currently v5.3.2.</p>
          </div>
          <div className='col-md-2 mt-5'>
            <h3>Links</h3>
            <div className='d-flex flex-column'>
              <Link to={'/'} className='text-light text-decoration-none my-2'>Home</Link>
              <Link to={'/wishlist'} className='text-light text-decoration-none'>Wishlist</Link>
              <Link to={'/cart'} className='text-light text-decoration-none my-2'>Cart</Link>
            </div>

          </div>
          <div className='col-md-2 mt-5'>
            <h3>Guides</h3>
            <div className='d-flex flex-column'>
              <Link to={'/'} className='text-light text-decoration-none my-2'>React</Link>
              <Link to={'/wishlist'} className='text-light text-decoration-none'>React Bootstrap</Link>
              <Link to={'/cart'} className='text-light text-decoration-none my-2'>React Router</Link>
            </div>

          </div>
          <div className='col-md-3 mt-5'>
            <h3>Contact Us</h3>
            <input type="text" placeholder='Email here' className='rounded p-2 me-2' /> <FontAwesomeIcon icon={faArrowRight} />
            <div className='d-flex justify-align-evenly mt-3 gap-3'>
              <FontAwesomeIcon icon={faFacebookF} className='fs-4' />
              <FontAwesomeIcon icon={faTwitter} className='fs-4' />
              <FontAwesomeIcon icon={faWhatsapp} className='fs-4' />
              <FontAwesomeIcon icon={faInstagram} className='fs-4' />
              <FontAwesomeIcon icon={faEnvelope} className='fs-4' />
              <FontAwesomeIcon icon={faPhone} className='fs-4' />
            </div>
          </div>
        </div>
<p className='text-light text-center p-5 fw-bold'>Copyright <FontAwesomeIcon icon={faCopyright} /> December 2025 Batch, E Cart. Built with React Redux.</p>
      </div>

    </>
  )
}

export default Footer