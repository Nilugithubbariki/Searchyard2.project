import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import styles from './carousel.module.scss'

export default function Carousel() {
  const images = [
    img1,
    img2,
    img3
  ]
    // const options = {
    //   loop: true,
    //   center: true,
    //   items: 3,
    //   margin: 0,
    //   autoplay: true,
    //   dots: true,
    //   autoplayTimeout: 8500,
    //   smartSpeed: 450,
    //   nav: false,
    //   responsive: {
    //       0: {
    //           items: 1
    //       },
    //       600: {
    //           items: 3
    //       },
    //       1000: {
    //           items: 3
    //       }
    //   }
    //   };

    const options = {
      loop: true,
      items: 1,
      margin: 15,
      center: true,
      autoplay: true,
      navText:[
        '<span class="arrow prev">‹</span>',
        '<span class="arrow next">›</span>'
      ]
    };

  return (
      <OwlCarousel className="owl-carousel owl-theme" {...options}>
        {images?.map((item, index) => (
        <div className={`${styles.mainContainer} item`} key={index}>
            <img src={item}/>
        </div>
        ))}
      </OwlCarousel>
  );
}
