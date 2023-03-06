import React from 'react'
import styles from './footer.module.scss' 
import image from '../../assets/5.jpg'

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={`${styles.footer} container-fluid`}>
        <div className={styles.mainContainer}>
        <div className={styles.about}>
        <span className={styles.aboutText}>About</span>
          <span className={`d-flex text-white`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores quae nulla consequuntur facere soluta aspernatur nesciunt quisquam vero, repellat tempora excepturi labore unde iste corrupti libero temporibus voluptatibus natus dolorem optio magni, placeat aut! Fuga accusantium sunt laborum odit illum, quisquam blanditiis, distinctio possimus quas nesciunt ab provident voluptatum.</span>
        </div>
        <div className={styles.contact}>
          <span className={styles.contactText}>Contact Details</span>
          <div className={`${styles.addmob} d-flex flex-column justify-content-center`}>
          <div className={`${styles.address} d-flex flex-column`}>
          <span className='text-white fw-2'>Address: </span>
          <span className='text-warning'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, error.</span>
          <hr style={{color: 'white'}} />
          </div>
          <div className={`${styles.mobile}  d-flex flex-column`}>
          <span className='text-white'>Mobile No.: </span>
          <span className='text-warning fw-2'>+91 XXXXXXXXXXXXXXXX</span>
          <hr style={{color: 'white'}} />
          </div>
          </div>
        </div>
        <div className={styles.gallery}>
          <span className={styles.galleryText}>Gallery</span>
          <div className={styles.image}>
            <img src={image} alt="" />
          </div>
        </div>
        <div className={styles.subscribe}>
          <span className={styles.subscribeText}>Subscribe SearchingYard Software Private Limited</span>
          <div className={styles.subscribeInput}>
            <input type="name" className='form-control' placeholder='Name' />
            <input type="email"  className='form-control' placeholder='Email'/>
            <input type="number" className='form-control' placeholder='Mobile Number'/>
            <button className={`btn btn-primary`}>Send</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
