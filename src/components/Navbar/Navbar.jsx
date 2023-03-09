import React, { useState } from 'react'
import styles from './Navbar.module.css';

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <div className={styles['nav-bar']}>
      <div className={styles.title}>Brandname</div>
      <div 
      className={styles['ham-menu']}
      onClick={()=>{setActive((prevActive)=>!prevActive)}}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <div 
      className={` ${styles['nav-links']} ${active? styles.active : ''} `}
      >
        <ul>
            <li>search</li>
            <li>group</li>
        </ul>
      </div>
    </div>
  )
}
