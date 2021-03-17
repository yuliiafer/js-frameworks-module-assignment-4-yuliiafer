import Head from "../../components/Head";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import styles from "../../styles/Home.module.css";

const getCountry = async (id) => {
  const res = await axios.get(`https://restcountries.eu/rest/v2/alpha/${id}`);
  const country = await res.data;
  return country;
};

const Country = ({ country }) => {
  return (
    <>
      <Head title={country.name} />
      <h1 className={styles.title}>{country.name}</h1>
      <div className={styles.col}>
        <div className={styles.column}>
          <div className={styles.divs}>
            Region:
            <p>{country.region}</p>
          </div>
          <div className={styles.divs}>
            Population: <p>{country.population}</p>
          </div>
          <div className={styles.divs}>
            Area: <p>{country.area}</p>
          </div>
          <div className={styles.divs}>
            Gini: <p>{country.gini} %</p>
          </div>
          <div className={styles.divs}>
            Capital: <p>{country.capital}</p>
          </div>
          <div className={styles.divs}>
            Languages:{" "}
            <p>{country.languages.map(({ name }) => name).join(", ")}</p>
          </div>
          <div className={styles.divs}>
            Currencies:{" "}
            <p>{country.currencies.map(({ name }) => name).join(", ")}</p>
          </div>
          <div className={styles.divs}>
            Native name: <p>{country.nativeName}</p>
          </div>
        </div>
        <div className={styles.description}>
          <img
            className={styles.img}
            src={country.flag}
            alt={country.name}
          ></img>
        </div>
      </div>
    </>
  );
};

export default Country;

export const getStaticPaths = async () => {
  const res = await axios.get(BASE_URL);
  const countries = await res.data;

  const paths = countries.map((country) => ({
    params: { id: country.alpha3Code },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const country = await getCountry(params.id);

  return {
    props: {
      country,
    },
  };
};
