import React from 'react'
import './FlipKaraItem.css'

const FlipkartDataItem = (props) => {
  return (
    <div>
    <div className='flipkart-container' >
    <img src={props.image} alt={props.name} className='image'/>
    <div className='flipkart'>
    <h3>{props.name}</h3>
    <h3>{props.price}</h3>
    
    </div>
    <p>{props.rating}</p>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fflipkart-logo-png%2Fflipkart-logo-transparent-png-download-0.png&f=1&nofb=1" alt='flipkart' class='logo'/>
    
    </div>
    
    
    </div>
  )
}

export default FlipkartDataItem