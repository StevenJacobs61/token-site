import React from 'react'
import styles from './info-card.module.css'

const InfoCard = ({header, icon, text}) => {
  const Icon = icon


  return (
    <div className={styles.container}>
        <span className={styles.icon__container}>
          <Icon className={styles.icon}/>
        </span>
         <h1 className={styles.header}>{header}</h1>
         {text.map((item, index) => 
           <li key={index} className={styles.text}>{item}</li>
         )}
    </div>
  )
}

export default InfoCard