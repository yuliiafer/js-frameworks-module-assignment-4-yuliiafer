import Head from "../components/Head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { BASE_URL } from "../utils/constants";

export default function Index({ countries }) {
  return (
    <main className={styles.index}>
      <Head title="Home page" />
      <h1 className={styles.title}>Home page</h1>
      <h2 className={styles.title}>European Countries</h2>
      <Link href="/results">
        <button className={styles.button}>All {countries.length} countries in Europe region</button>
      </Link>
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(BASE_URL);
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
