"use client";
import React, { useState }   from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./write.module.css";
import Image from "next/image";
const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <>
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input}/>
      <div className={styles.editor}>
        <button className={styles.button} onClick={()=>setOpen(!open)}>
          <Image src="/plus.png" alt width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/image.png" alt width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/image.png" alt width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill className={styles.textArea}  theme="bubble" value={value} onChange={setValue} placeholder="tell your story " />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
    </>
  );
};

export default WritePage;
