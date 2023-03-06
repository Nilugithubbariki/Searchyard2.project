import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./productdetails.module.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
  const [list, setList] = useState([]);
  const local = JSON.parse(localStorage.getItem('cart'))
  const [cart, setCart] = useState(local || []);
  const [checked, setChecked] = useState(false);
  const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  };
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      // .then(res => res.json())
      .then((data) => setList(data?.data));
  }, []);

  useEffect(() => {
    if(cart?.length > 0) {
      const filteredArray = cart?.filter((v, i, a) => a.findIndex(t => (JSON.stringify(t) === JSON.stringify(v)))===i);
      localStorage.setItem('cart', JSON.stringify(filteredArray));
    }
  },[cart])


  const handleCart = (data) => {
    // const already = JSON.parse(localStorage.getItem('cart'))
    // const add = [...already, data]
    if(data) {
      setCart([...cart, data])
    }
    // if(checked) {
    //   const remove = local?.filter(item => item.id !== data.id);
    //   console.log(remove)
    //   localStorage.setItem('cart', JSON.stringify(remove));
    // }
  }

  useEffect(() => {
    if(local?.length > 0) {
      const check = local?.some(item => item?.id == list?.id)
      setChecked(check)
    }
  },[local, list])

  console.log(checked)

  console.log("List",list)
  return (
    <motion.div
      className="container-fluid"
      style={{ maxWidth: "85%", marginTop: "30px", marginBottom: "30px" }}
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
    >
      <div className={`${styles.card} card`}>
        <Link className={styles.back} to='/products'>
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <div className={styles.details}>
          <div className={styles.bigImg}>
            <img src={list?.images} alt="Image" />
          </div>
          <div className={styles.box}>
          <div className={styles.boxInside}>
            <span className={styles.title}>{list?.title}</span>
            <span className={styles.category}>{list?.category}</span>
            <span className={`${styles.title} text-muted mt-1 mb-1`}>₹ {list?.price}</span>
            <span className={styles.rate}>
              <i className="fa-solid fa-star text-warning me-1"></i>
              <span className="ml-2">{`${list?.rating?.rate} (${list?.rating?.count})`}</span>
            </span>
            <span className={styles.description}>{list?.description}</span>
          </div>
            {/* <button className={`${styles.cart} btn btn-outline-danger`}>+ Add to Cart</button> */}
          <div className={`${styles.buttonAdd}`}>
            <button className={`${styles.cart} btn btn-outline-danger`} onClick={() => handleCart(list)}>{!checked ? '+ Add to Cart' : 'Remove to Cart'}</button>
            <button className={`${styles.buy} btn btn-outline-primary`}>Buy Now</button>
          </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
