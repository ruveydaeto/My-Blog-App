"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from './authLinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {
   const status = "authenticated"
   const [open, setOpen] = useState(false)
  return (
   <>
   {status === " notauthenticated" ? (
   <Link href="/login" className={styles.link}>login</Link>
    ) : (
<>
<Link href="/write" className={styles.link}>Write</Link>
<span className={styles.link}>logout</span>
   </>
    )}
    <div className={styles.burger} onClick={()=> setOpen(!open) }>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
    {open && (
      <div className={styles.responsiveMenu}>
        <Link href="/">Homepage</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        {status === "notauthenticated" ? (
          <Link href="/login">login</Link>
        ) : (
          <>
            <Link href="/write">Write</Link>
            <span className={styles.link}>logout</span>
          </>
        )}
      </div>
    ) }
    </>
  )
}

export default AuthLinks