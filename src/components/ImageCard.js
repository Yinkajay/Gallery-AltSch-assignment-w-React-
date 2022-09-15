import React from 'react'
import './ImageCard.css'

const ImageCard = (props) => {
  return (
    <div className='card'>
      <div className='car-image-container'>
        <img className='car-image' src={props.src} alt={props.carBrand} />
      </div>
      <div className='car-info'>
        <h3>{props.carBrand}</h3>
        <h4>{props.carModel}</h4>
        <p>{props.fact}</p>
      </div>
    </div>
  )
}

export default ImageCard;
