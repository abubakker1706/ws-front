import React from 'react'
import './DataItem.css'

const DataItem = (props) => {
  return (
    <div className='product-container' >
    <img src={props.image} alt={props.name} className='Image'/>
    <div className='product'>
    <h3>{props.name}</h3>
    <h3>{props.price}</h3>
    
    </div>
    <p>{props.rating}</p>
    <img src="https://www.gannett-cdn.com/-mm-/8eded6e5fecea21a0098fa1a295b13d637260962/c=322-342-1887-1226&r=x1683&c=3200x1680/local/-/media/2017/09/07/Rochester/Rochester/636403844012827674-Amazon-logo.png" alt='amazon' class='amazon'/>
    
    </div>
  )
}

export default DataItem