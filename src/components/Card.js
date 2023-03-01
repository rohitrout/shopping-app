import React from 'react'
import classes from './Card.module.css'

const Card = ({item}) => {
  return (
    <div className={classes.card}>
      <div className={classes.image}>
      <img src={item.image1} alt='img1'/></div>
      <h3>{item.name}</h3>
      <span>${item.price}</span>
    </div>
  )
}

export default Card