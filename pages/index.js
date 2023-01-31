import Head from "next/head";
import Image from "next/image";
//import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Nav from "../components/nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Minus Ten Spa</title>
      </Head>
      <Nav />
      <div className={styles.bannerContainer}>
        <div className={styles.subTitle}>
          <p>Feel younger</p>
          <p>Look Younger</p>
          <p>Ten Years Possible</p>
        </div>
        <button className={styles.button}>BOOK NOW</button>
        <Image
          src="/spaHomeImg.png"
          alt="beautiful face"
          width={1500}
          height={760}
          priority
        />
      </div>
    </>
  );
}
