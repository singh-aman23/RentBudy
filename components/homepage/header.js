import Button from "./button";
import classes from "./header.module.css";

export default function Header() {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.heroContent}>
          <h1 className={classes.heroTitle}>
            Find Your Perfect Roommate with RentBudy
          </h1>
          <p className={classes.heroSubtitle}>
            Discover the ideal roommate that fits your lifestyle. Start by
            exploring the available posts or create one to find your match!
          </p>
          <Button />
        </div>
      </section>
    </>
  );
}
