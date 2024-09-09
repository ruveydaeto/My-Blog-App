import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
    const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}></h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea className={styles.input} placeholder="Write a comment" />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              className={styles.image}
              src="/p1.jpeg"
              height={50}
              width={50}
              alt="user"
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>2 hours ago</span>
            </div>
          </div>
<p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            malesuada, lacus nec ultricies fermentum, felis nisl tincidunt
            libero, nec lacinia enim dui nec mi. Sed nec nunc nec turpis
            venenatis ultricies. Sed nec nunc nec turpis venenatis ultricies.
            Sed nec nunc nec turpis venenatis ultricies.
          </p>
        </div>
   
      </div>
    </div>
  );
};

export default Comments;
