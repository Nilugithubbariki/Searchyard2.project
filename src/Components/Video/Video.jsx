import React from 'react';
import videoImg from '../../assets/video.webm'
import styles from './video.module.scss'

export default function Video() {
    const handleMetadata = (e) => {
        e.target.play();
      };
  return (
    <>
    <div className={styles.videoBg}>
        <video autoPlay muted loop onLoadedMetadata={handleMetadata} className={styles.videos}>
            <source src={videoImg} type="video/webm"/>
        </video>
    </div>
    </>
  )
}
