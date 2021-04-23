import Head from "next/head";
import { ReactChild } from "react";
import styles from "./Layout.module.scss";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactChild }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CovidApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
};
