import React, {useState} from 'react'
import InfoBox from '../../components/display/info-box'
import InfoCard from '../../components/display/info-card'
import Hero from '../../components/sections/home/hero'
import styles from './home.module.css'
import { homeInfo } from '../../data/home-info'

const Home = () => {
  const [count, setCount] = useState(0)

  const handleCount = (add) => {
    if(add){
      if(count === homeInfo.length -1){
        setCount(0)
      } else if (count < homeInfo.length - 1){
        setCount(count + 1)
      }
    } else {
      if(count === 0){
        setCount(homeInfo.length - 1)
      } else if (count > 0){
        setCount(count - 1)
      }
    }
  }

  return (
    <div className={styles.section}>
        <Hero/>
        <div className={styles.info__container}>
        <InfoBox handleCount={handleCount}>
         <InfoCard header={homeInfo[count]?.header} text={homeInfo[count]?.text} icon={homeInfo[count]?.icon}/>
        </InfoBox>
        </div>
    </div>
  )
}

export default Home