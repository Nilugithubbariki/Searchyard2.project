import React from 'react'
import styles from './work.module.scss'

export default function Work() {
    const work = [
        {id: 1, text: "1. Book Your Date", icon: "fa-regular fa-calendar-days", color: 'pink'},
        {id: 2, text: "2. We Delivery SetUp", icon: 'fa-solid fa-truck', color: 'skyblue'},
        {id: 3, text: "3. Enjoy Your Party", icon: 'fa-solid fa-crown', color: 'yellowgreen'},
        {id: 4, text: "4. We Delivery SetUp", icon: 'fa-solid fa-truck', color: 'skyblue'},
        {id: 5, text: "5. Enjoy Your Party", icon: 'fa-solid fa-crown', color: 'yellowgreen'},
    ]
  return (
    <>
        <div className={styles.containers}>
        <div className={styles.upper}>
                <span className={styles.heading}>Wellcome to SearchingYard </span>
        </div>
            <div className={styles.items}>
            {work?.map((item, index) => (
                <div className={styles.innerItems} key={index}>
                    <i className={item.icon} style={{color: item.color}}/>
                    <span className={styles.headerText}>{item.text}</span>
                    <span className={styles.description}>Lorem ipsum dolor sit amet lorem.</span>
                </div>
            ))}
            </div>
        </div>
    </>
  )
}
