import React from 'react'
import styles from "./main.module.css"
import {FaTelegramPlane} from "react-icons/fa"
import {AiFillGithub} from 'react-icons/ai'
import {FaFileContract} from 'react-icons/fa'

const Main = ({children}) => {
  return (
        <div className={styles.background__container}>
            <div className={styles.content__container}>
               {children} 
            </div>
            <footer className={styles.footer}>
                <h2 className={styles.item}></h2>
                <h2 className={styles.item}>© 2023 BitVest. All Rights Reserved.</h2>
                <div className={styles.icons__container}>
                  <FaTelegramPlane className={styles.icon}/>
                  <AiFillGithub className={styles.icon}/>
                  <FaFileContract className={styles.icon}/>
                </div>
            </footer>
        </div>
  )
}

export default Main