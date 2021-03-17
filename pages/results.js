import Head from "../components/Head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Results = (props) => {
  console.log(props);
  return (
    <>
      <Head title="Results" />
      <div className={styles.container}>
        <h1 className={styles.title}>Results</h1>

        <div className={styles.main}>
          <div className={styles.grid}>
            {props.countries.map((country) => (
              <div className={styles.card} key={country.numericCode}>
                <a href={`country/${country.alpha3Code}`}>
                  <img src={country.flag} alt={country.name} />
                  <h2>{country.name}</h2>
                  <h3>Capital: {country.capital}</h3>
                  <p>Native Name: {country.nativeName}</p>
                  <p>Population: {country.population}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;

export async function getStaticProps() {
  let countries = [];

  try {
    const response = await axios.get(BASE_URL);
    console.log(response.data);
    countries = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { countries: countries },
  };
}
