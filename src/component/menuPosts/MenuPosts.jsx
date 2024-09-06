import Link from 'next/link'
import React from 'react'
import styles from './menuposts.module.css'
import Image from 'next/image'
const MenuPosts = ({withImage}) => {
  return (
    <>
    <Link href="/" className={styles.item}>
    {withImage &&( <div className={styles.imageContainer}>
      <Image src="/p1.jpeg" alt="image1" className={styles.image}  width={60} height={60}  />
    </div>)}
    <div className={styles.textContainer}>
      <span className={`${styles.category} ${styles.travel}`}>
        Travel
      </span>
      <h3 className={styles.postTitle}>Lorem ipsum dolar Lorem ipsum dolarLorem ipsum dolarLorem ipsum dolar</h3>
      <div className={styles.detail}>
        <span className={styles.username}>RUveyda ETO</span>
        <span className={styles.date}>10.03.2023</span>
         </div>
      </div>
    </Link>
    <Link href="/" className={styles.item}>
    {withImage &&( <div className={styles.imageContainer}>
      <Image src="/p1.jpeg" alt="image1" className={styles.image}  width={60} height={60}  />
    </div>)}
    <div className={styles.textContainer}>
      <span className={`${styles.category} ${styles.travel}`}>
        Travel
      </span>
      <h3 className={styles.postTitle}>Lorem ipsum dolar Lorem ipsum dolarLorem ipsum dolarLorem ipsum dolar</h3>
      <div className={styles.detail}>
        <span className={styles.username}>RUveyda ETO</span>
        <span className={styles.date}>10.03.2023</span>
         </div>
      </div>
    </Link>
    <Link href="/" className={styles.item}>
    <div className={styles.imageContainer}>
      <Image src="/p1.jpeg" alt="image1" className={styles.image}  width={60} height={60}  />
    </div>
    <div className={styles.textContainer}>
      <span className={`${styles.category} ${styles.travel}`}>
        Travel
      </span>
      <h3 className={styles.postTitle}>Lorem ipsum dolar Lorem ipsum dolarLorem ipsum dolarLorem ipsum dolar</h3>
      <div className={styles.detail}>
        <span className={styles.username}>RUveyda ETO</span>
        <span className={styles.date}>10.03.2023</span>
         </div>
      </div>
    </Link>
    </>
  )
}

export default MenuPosts