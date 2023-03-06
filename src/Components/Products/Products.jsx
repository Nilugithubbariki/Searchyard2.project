import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { motionContainer, motionItem } from "./../utils/index";
import styles from './products.module.scss'
import { Link } from 'react-router-dom';

export default function Products() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      // .then(res => res.json())
      .then((data) => setList(data?.data?.products));
  }, []);
  const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  };
  const category = Object.values(list?.reduce((r, o) => { r[o.category] = o; return r; }, {}));
//   const price = Object.values(list.reduce((r, o) => { r[o.price] = o; return r; }, {}));
//   const rating = Object.values(list.reduce((r, o) => { r[o.rating.rate] = o; return r; }, {}));
//   const min = Math.min(...price?.map(item => item.price))
//   const max = Math.max(...price?.map(item => item.price))
const rating = [
    {id:1, name: '1 - 2'},
    {id:2, name: '3 - 4'},
    {id:3, name: '5'},
]
const pricing = [
    {id:1, name: "₹100 - ₹300"},
    {id:2, name: "₹300 - ₹500"},
    {id:3, name: "₹500 - ₹700"},
    {id:4, name: "₹700 - ₹1000"}
]
  return (
    <motion.div
      className="container-fluid"
      style={{ maxWidth: "85%", marginTop: "30px", marginBottom: '30px' }}
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
    >
      <div className="searchbarTop">Search</div>
      <div className="row">
        <div className={`${styles.filter} col-md-3`}>
            <div className="card-body" style={{boxShadow: '0px 0px 10px 0px rgb(0,0,0,0.25)', borderRadius: '5px', position: 'sticky', top: '100px'}}>
                <div className={styles.filterSide}>
                {/* category */}
                    <div className={styles.category}>
                        <span className={styles.filterHeading}>FILTER BY CATEGORY</span>
                        {category?.map(item => (
                            <div className={styles.categoryFilter}>
                                <input type="checkbox" className={styles.categoryCheckbox}/>
                                <span className={styles.categoryName}>{item.category}</span>
                            </div>
                        ))}
                    </div>
                    {/* price */}
                    <div className={styles.category}>
                        <span className={styles.filterHeading}>FILTER BY PRICE</span>
                        {pricing?.map(item => (
                            <div className={styles.categoryFilter}>
                                <input type="checkbox" className={styles.categoryCheckbox}/>
                                <span className={styles.categoryName}>{item.name}</span>
                            </div>
                        ))}
                    </div>
                    {/* Rating */}
                    <div className={styles.category}>
                        <span className={styles.filterHeading}>FILTER BY RATING</span>
                        {rating?.map(item => (
                            <div className={styles.categoryFilter}>
                                <input type="checkbox" className={styles.categoryCheckbox}/>
                                <span className={styles.categoryName}>{item?.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-9">
            <div className="card-body" style={{height: '100%', borderRadius: '5px'}}>
                <div className="align-items-center justify-content-center row">
                    <div className={`${styles.box} row`}>
                    {list.map(item => (
                        <div className="col-md">
                            <div className={styles.product}>
                                <div className={styles.image}>
                                <img src={item?.thumbnail} alt="phone_images" />
                                </div>
                                <div className={styles.content}>
                                <div className={styles.containers}>
                                    <span className={styles.title}>{item?.title?.length > 20 ? `${item?.title?.slice(0,20)}...` : item?.title}</span>
                                    <span className={styles.category}>{item?.category}</span>
                                    <span className={styles.price}>₹ {item?.price}</span>
                                    <span>
                                    <i className="fa-solid fa-star text-warning me-1">
                                    </i>
                                    <span className="ml-2">{`${item?.rating?.rate} (${item?.rating?.count})`}</span>
                                    </span>
                                </div>
                                </div>
                                <Link to={`/products/${item?.id}`} className="btn btn-outline-danger">
                                    <i className="fa-solid fa-cart"></i>
                                    <span>View Product</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
}
