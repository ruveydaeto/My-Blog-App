import React from 'react'
import styles from './menuCategories.module.css'
const menuCategories = () => {
  return (
    <div className={styles.categoryList}>

    <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.style}`}>
    Style 
     </Link>
     <Link href="/blog" className={`${styles.categoryItem} ${styles.style}`}>
    Style 
     </Link>
      
     <Link href="/blog" className={`${styles.categoryItem} ${styles.style}`}>
    Style 
     </Link>
     <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.style}`}>
    Style 
     </Link>
     </div>

  )
}

export default menuCategories