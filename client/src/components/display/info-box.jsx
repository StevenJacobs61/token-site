import React from 'react'
import styles from './info-box.module.css'
import { IoMdArrowDroprightCircle } from 'react-icons/io'

const InfoBox = ({children, handleCount}) => {
  return (
    <div className={styles.container}>
        <IoMdArrowDroprightCircle className={styles.button__back}
          onClick={()=>handleCount(false)}/>
        <IoMdArrowDroprightCircle className={styles.button__forward}
        onClick={()=>handleCount(true)}/>
        {children}
    </div>
  )
}

export default InfoBox