import React, { useState, useEffect, useRef } from 'react'
import styles from './navbar.module.css'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  const [itemStyle, setItemStyle] = useState();
  const home = useRef()
  const dashboard = useRef()
  const exchange = useRef()
  const lottery = useRef()
  const [headers, setHeaders] = useState([home, dashboard, exchange, lottery]);
  
  useEffect(() => {
    function handleStyle(){
      if(location.pathname === "/"){
        headers.map((header) => {
          console.log(header.current.textContent);
          if(header.current.textContent !== "Home"){
            header.current.style.opacity = "0.7"
          } else {
            home.current.style.opacity = "0.9"
          }
        })
      } else {
        headers.map((header) => {
          const element = header.current && header.current.textContent.toLowerCase();
          if(element === location.pathname.slice(1)){
            header.current.style.opacity = "0.9"
          } else {
            header.current.style.opacity = "0.7"
          }
        })
      }
    }
    handleStyle();

  }, [location.pathname])

  return (
    <section className={styles.section}>
        <div className={styles.cont}>
        <Link to='/' style={{textDecoration: "none"}}>
            <h2 className={styles.item} ref={home}>Home</h2>
            </Link>
            <Link to='/dashboard' style={{textDecoration: "none"}}>
              <h2 className={styles.item}ref={dashboard} >Dashboard</h2>
            </Link>
            <Link to='/exchange' style={{textDecoration: "none"}}>
            <h2 className={styles.item} ref={exchange}>Exchange</h2>
            </Link>
            <Link to='/lottery' style={{textDecoration: "none"}}>
            <h2 className={styles.item} ref={lottery}>Lottery</h2> 
            </Link>
        </div>
    </section>
  )
}

export default Navbar