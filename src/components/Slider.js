import React from 'react'
import classes from './Slider.module.css'
import backImg from './bgimg.jpg'

const Slider = () => {

    // const data = [
    //     'https://burst.shopifycdn.com/photos/minimalist-retail-clothing-display.jpg?width=1200&format=pjpg&exif=1&iptc=1',
    //     'https://wallpaper.dog/large/5464529.jpg',
    //     'https://c1.wallpaperflare.com/preview/955/594/346/jeans-pants-blue-shop-shopping-shelf.jpg',
    //     'https://wallpapercave.com/wp/wp9780747.png',
    // ]

  return (
    <div className={classes.slider}>'
        <div className={classes.container}>
            <img src={backImg}  alt='imgg'/>
            {/* <img src={data[1]} alt='img2'/>
            <img src={data[2]} alt='img3'/>
            <img src={data[3]} alt='img4'/> */}
        </div>
        <div className={classes.icons}>
            <span>Left~Right</span>
        </div>
    </div>
  )
}

export default Slider