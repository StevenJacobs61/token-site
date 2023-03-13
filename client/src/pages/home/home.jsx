import React from 'react'
import InfoBox from '../../components/display/info-box'
import InfoCard from '../../components/display/info-card'
import Hero from '../../components/sections/home/hero'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.section}>
        <Hero/>
        <div className={styles.info__container}>
        <InfoBox>
         <InfoCard/>
        </InfoBox>
        </div>
    </div>
  )
}

export default Home