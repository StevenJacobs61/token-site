import React from 'react'
import styles from './hero.module.css'
import Logo from '../../../images/logo.svg'

const Hero = () => {
  return (
      <div className={styles.container}>
        <div className={styles.img__container}>
              <img src={Logo} alt="btc logo" className={styles.logo} />
        </div>
        <div className={styles.button__container}>
          <button className={`btn--full ${styles.button}`}>trade</button>
          <button className={`btn--full ${styles.button}`}>Chat</button>
          <button className={`btn--full ${styles.button}`}>Play</button>
        </div>
      </div>
  )
}

export default Hero