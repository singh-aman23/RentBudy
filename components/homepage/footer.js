import Button from "./button";
import classes from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <section className={classes.callToAction}>
        <h2 className={classes.ctaTitle}>Ready to Find Your Roommate?</h2>
        <p className={classes.ctaSubtitle}>
          Sign up and start your search today!
        </p>
        <Button />
      </section>
    </>
  );
}
