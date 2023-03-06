import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.scss'

export default function Header() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(JSON.parse(localStorage.getItem('cart'))?.length)
  },[])
  return (
    <nav className={styles.navbar}>
        <div className={styles.left}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
        </div>
        <div className={styles.right}>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">{`Cart(${count || 0})`}</Link>
            <Link to="/login">Login</Link>
        </div>
    </nav>
  )
}
