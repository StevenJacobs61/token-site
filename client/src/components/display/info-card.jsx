import React from 'react'
import styles from './info-card.module.css'
import { GiChart } from 'react-icons/gi'

const InfoCard = () => {
  return (
    <div className={styles.container}>
        <GiChart className={styles.icon}/>
         <h1 className={styles.header}>DTV Token</h1>
         <ol>
            <li className={styles.text}>Auto-Buyback feature</li>
            <li className={styles.text}>Auto-Buyback feature</li>
            <li className={styles.text}>Auto-Buyback feature</li>
            <li className={styles.text}>Auto-Buyback feature</li>
         </ol>
    </div>
  )
}

export default InfoCard