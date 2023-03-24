import React from 'react'
import Ticker from '../../components/ticker/ticker'
import styles from  "./dashboard.module.css"

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Ticker/>
    </div>
  )
}

export default Dashboard