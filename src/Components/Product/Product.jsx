import React from 'react'
import styles from './product.module.scss'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from 'axios';

export default function Product() {
  const [list, setList] = useState([])
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      // .then(res => res.json())
      .then((data) => setList(data?.data?.products));
  }, []);
  const options = {
    loop: true,
    items: 5,
    margin: 15,
    center: true,
    autoplay: true,
    dots: false,
    navText:[
      '<span class="arrow prev">‹</span>',
      '<span class="arrow next">›</span>'
    ]
  };

  return (
    <>
        <div className={styles.product}>
            <div className={styles.top}>
                <span className={styles.deals}><span className={styles.dealText}>Today's Deals </span><Link to='/products'>see all products</Link></span>
                <span className={styles.heading}>Special Product Section</span>
            </div>
            <div className={styles.cards}>
            {list.length > 0 &&
              <OwlCarousel className="owl-carousel owl-theme" {...options}>
              {list?.map((item, index) => (
              <Link to={`/products/${item?.id}`} className={`${styles.mainContainer} item`} key={index}>
                <div className={styles.image}>
                <img src={item?.thumbnail} alt="phone_images" />
                </div>
                <div className={styles.title}>
                <h4>{item?.brand}</h4>
              <h5>$ {item?.price}/-</h5>
              <h4> {item?.category}</h4>
              <h5>⭐⭐⭐⭐⭐</h5>
                 
                  <span className={styles.text}>{item?.title?.length > 20 ? `${item?.title?.slice(0,25)}...` : item?.title}</span>
                </div>
              </Link>
              ))}
            </OwlCarousel>
            }
            </div>
        </div>
    </>
  )
}
