import React from 'react'
import styles from './menu.module.css'

import Image from 'next/image'
import MenuPosts from '../menuPosts/MenuPosts'
import Link from 'next/link'
const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{'Whats hot'}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={true}/>

  
     <div className={styles.categoryList}>

    
      </div>
    
    </div>
  )
}

export default Menu