import React, {useEffect, useState} from 'react'
import styles from './cart.module.scss'

export default function Cart() {
    const [list, setList] = useState([])
useEffect(() => {
    setList(JSON.parse(localStorage.getItem('cart')) || [])
}, [])
  return (
    <div className={styles.card}>
        <div className="row">
            <div className="col-md-8">
                { list?.length > 0 && list?.map(item =>  <div className={`${styles.cartItem} d-flex flex-column`}>
                    <div className="row p-4">
                        <div className="col-2 d-flex flex-column align-items-center justify-content-center">
                            <div className={styles.image}>
                            <img src={item.thumbnail} alt="phone_images"/>
                            </div>
                        </div>
                        <div className="col-7 d-flex flex-column justify-content-around">
                            <span>{item.title}</span>
                            <span>{item.description?.length > 100 ? `${item.description?.slice(0,150)}...` : item.description}</span>
                        </div>
                        <div className="col-3 d-flex flex-column align-items-center justify-content-around">
                        <i className='fa-solid fa-trash text-danger'></i>
                            <span>₹ {item.price}</span>
                        </div>
                    </div>
                </div>)}
            </div>
            <div className="col-md-4">
                <div className="card-body">
                    <div className={styles.summary}>
                    <h5 className='text-center d-flex justify-content-center mt-2'>Order Summary</h5>
                        <span>{list && list?.length} items</span>
                        <button className='btn btn-outline-danger'><i className='fa-solid fa-trash'/> Clear Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
