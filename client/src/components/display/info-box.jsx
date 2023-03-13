import React from 'react'
import styles from './info-box.module.css'
import { IoMdArrowDroprightCircle } from 'react-icons/io'

const InfoBox = ({children}) => {
  return (
    <div className={styles.container}>
        <IoMdArrowDroprightCircle className={styles.button__back}/>
        <IoMdArrowDroprightCircle className={styles.button__forward}/>
        {children}
    </div>
  )
}

export default InfoBox