import React from 'react'
import classes from './Footer.module.css'
import footerImg from './footerImage.png'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.top}>
        <div className={classes.item}>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrival</span>
        </div>

        <div className={classes.item}>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className={classes.item}>
          <h1>About</h1>
          <span>Lorem Ipsum aisa sahsjad tehe alka iah kjsdsd klwhdsj ,skjsd sdkjsd sdbjsdks nsdbsgds snbdhsgds dkehwh sdjsdk sdsdga ashdhs kwhiw abyya djad</span>
        </div>

        <div className={classes.item}>
          <h1>Contact</h1>
          <span>Lorem Ipsum aisa sahsjad tehe alka iah kjsdsd klwhdsj ,skjsd sdkjsd sdbjsdks nsdbsgds snbdhsgds dkehwh sdjsdk sdsdga ashdhs kwhiw abyya djad</span>
        </div>
      </div>
      <div className={classes.bottom}>
          <h1 style={{color:'blue',fontWeight:'bold', fontSize:'24px'}}>RouteStore </h1>
          <span style={{color:'#777'}}>@ Copyright 2023. All Rights Reserved</span>
          <img src={footerImg} alt='footerImg'/>
      </div>

    </div>
  )
}

export default Footer