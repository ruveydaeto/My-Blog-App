import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";


const CardList = async () => {

  // const POST_PER_PAGE = 2;

  // const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  // const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
       <div className={styles.post}>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       </div>
      </div>
      <Pagination  />
    </div>
  );
};

export default CardList;