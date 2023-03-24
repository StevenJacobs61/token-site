import React, { useEffect, useState } from 'react'
import useCoinData from '../../hooks/useCoinData'
import styles from './ticker.module.css'
import {RiArrowDownSFill, RiArrowUpSFill} from 'react-icons/ri'
import { FaBtc } from 'react-icons/fa'


const Ticker = () => {
  const btc = useCoinData("BTC-USD")
  const [loading, setLoading] = useState(false)
  const [price, setPrice] = useState(0)
  const [priceIncrease, setPriceIncrease] = useState(0)
  
  useEffect(() => {
    if(btc){
      const btcPrice = Math.floor(btc.price);
      if(price >= btcPrice){
        setPriceIncrease(2)
      } else if (price <= btcPrice){
        setPriceIncrease(1)
      }else{
        setPriceIncrease(0)
      }
      setLoading(false)
      setPrice(btcPrice);
    }else {
      setLoading(true)
    }
    console.log(btc);
    console.log(priceIncrease);
   }, [btc])
    

  return (
    <span className={styles.container}>
       <div className={styles.container__header}>
        <h1 className={styles.header}>{btc ? btc.fromcurrency : "BTC"}</h1>
        <FaBtc className={styles.icon__btc}/>
       </div>
        {loading ? 
        <h2 className={styles.loading}>Loading...</h2> :
        <>
        <h3 className={styles.label}>Current Price</h3>
        <h2 className={styles.price}
        style={{
          color: priceIncrease === 1 ? "#0fb300" : 
          priceIncrease === 2 ? "#fd0606" : ""}}
        >${price.toLocaleString()} 
        {priceIncrease === 1 ? <RiArrowUpSFill/> : 
        priceIncrease === 2  ? <RiArrowDownSFill/> : 
        null}
        </h2>
        <div className={styles.daily__container}>
          <h3 className={styles.label}>Daily High</h3>
          <h4 className={styles.high}>${Math.floor(btc?.dayHigh).toLocaleString()}</h4>
          <h3 className={styles.label}>Daily Low</h3>
          <h4 className={styles.low}>${Math.floor(btc?.dayLow).toLocaleString()}</h4>
        </div>
        </>
        }
    </span>
  )
}

export default Ticker