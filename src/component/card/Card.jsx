import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="/style.png" alt="image1" className={styles.image}  width={300} height={300}  />
        </div>

        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2024</span>
                <span className={styles.category}>Category</span>
            </div>
            <Link href="/"> <h1 className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae justo sollicitudin fermentum. </h1></Link>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae justo sollicitudin fermentum.
                orem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae justo sollicitudin fermentum. 
                orem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae justo sollicitudin fermentum. 
                orem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae justo sollicitudin fermentum.  
            </p>
            
            <Link href="/">Read more</Link>
        </div>
    </div>
  )
}

export default Card