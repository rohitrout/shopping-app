import React from 'react'
import classes from './FeaturedProducts.module.css'
import Card from './Card'

const FeaturedProducts = () => {
    const data=[
        {
            id:1,
            name:'Prod1',
            title:'Long Sleeve',
            image1:'https://img3.junaroad.com/uiproducts/19285396/pri_175_p-1675177091.jpg',
            price:12
        },
        {
            id:2,
            name:'Prod2',
            title:'Short Tie',
            image1:'https://wallpaper.dog/large/5464529.jpg',
            price:16
        },
        {
            id:3,
            name:'Prod3',
            title:'Shirt',
            image1:'https://wallpapercave.com/wp/wp9780747.png',
            price:9
        },  
        {
            id:4,
            name:'Prod4',
            title:'Jeans',
            image1:'https://wallpapercave.com/wp/wp9780747.png',
            price:6.5
        },  
     ]


  return (
    <div className={classes.featured}>
        <div className={classes.top}>
        <h1>Featured Products</h1>
        <p>Lorem Ipsum asi akjsj slkds skdhs wljw sld lwo ijc oao afw ank ahk acfs ajkj a bvs avsa avshgas avsgas a jaksja kjqjkka agg iowoiu slal aksq kjkw </p>
        </div>
        <div className={classes.bottom}>
            {data.map((item) => <Card item={item} key={item.id}/> )}
        </div>
    </div>
  )
}

export default FeaturedProducts