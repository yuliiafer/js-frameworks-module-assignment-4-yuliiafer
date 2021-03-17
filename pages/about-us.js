import Head from "../components/Head";
import styles from "../styles/Home.module.css";

const AboutUs = () => {
  return (
    <>
      <Head title="About Us" />
      <h1 className={styles.title}>About Us</h1>
      <div className={styles.text}>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas
          pharetra convallis posuere morbi leo urna. Nec feugiat in fermentum
          posuere urna nec. Ullamcorper velit sed ullamcorper morbi tincidunt
          ornare massa eget egestas. Arcu dictum varius duis at consectetur
          lorem donec massa.
        </p>
        <p className={styles.description}>
          Sodales ut etiam sit amet nisl purus in mollis. Orci dapibus ultrices
          in iaculis nunc sed. Aenean vel elit scelerisque mauris pellentesque
          pulvinar pellentesque habitant. Non diam phasellus vestibulum lorem
          sed risus ultricies tristique. Egestas integer eget aliquet nibh.
          Auctor neque vitae tempus quam pellentesque nec nam aliquam. Convallis
          tellus id interdum velit.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
