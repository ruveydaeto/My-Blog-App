import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import Featured from "@/component/featured/Featured";
import CategoryList from "@/component/categoryList/categoryList";
import CardList from "@/component/cardList/CardList";
import Menu from "@/component/Menu/Menu";
import AuthLinks from "@/component/authLinks/AuthLinks";
import ThemeToggle from "@/component/themeToggle/ThemeToggle";

export default function Home() {
  return (
    <div className={styles.container}>
<Featured />
<CategoryList />
<div className={styles.content}>

  <CardList />
  <Menu />
</div>
  </div>
  );
}
