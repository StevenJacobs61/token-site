import React from 'react'
import styles from './hero.module.css'
import Logo from '../../../images/logo.svg'

const Hero = () => {
  return (
      <div className={styles.container}>
        <div className={styles.img__container}>
              <img src={Logo} alt="btc logo" className={styles.logo} />
        </div>
        <div>
          <button>{import.meta.env.STAGE === "PRE" ? "Presale" : "BUY BTV"}</button>
        </div>
      </div>
  )
}

export default Hero