import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/component/Menu/Menu'
import Image from 'next/image'
import Comments from '@/component/comments/Comments'

const singlePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Lorem ipsum Lorem Ipsum Lorem</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image className={styles.avatar} src="/p1.jpeg" alt="user"  fill />

                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>John DOe</span>
                        <span className={styles.date}>01.01.22024</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src="/p1.jpeg" alt="user" fill/>
        </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}></div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit de 
                    sit a  Lorem ipsum, dolor sit amet consectetur adipisicing elit de 
                    sit a Lorem ipsum, dolor sit amet consectetur adipisicing elit de 
                    sit a Lorem ipsum, dolor sit amet consectetur adipisicing elit de 
                    sit a
                </p>
                <h2> Heading</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit de 
                    sit a  Lorem ipsum, dolor sit amet consectetur adipisicing elit de 
                    sit a Lorem ipsum, dolor sit amet consectetur adipisicing elit de 
                    sit a Lorem ipsum, dolor sit amet consectetur adipisicing elit de 
                    sit a
                </p> <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit de 
                    sit a  Lorem ipsum, dolor sit amet consectetur adipisicing elit de 
                    sit a Lorem ipsum, dolor sit amet consectetur adipisicing elit de 
                    sit a Lorem ipsum, dolor sit amet consectetur adipisicing elit de 
                    sit a
                </p> <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit de 
                    sit a  Lorem ipsum, dolor sit amet consectetur adipisicing elit de 
                    sit a Lorem ipsum, dolor sit amet consectetur adipisicing elit de 
                    sit a Lorem ipsum, dolor sit amet consectetur adipisicing elit de 
                    sit a
                </p>
            
            <div className={styles.comment}>
                <p className={styles.commentstyle}>Comments</p>
                <Comments/>
                </div>
            </div>
            <Menu/>
            </div>
    </div>
  )
}

export default singlePage