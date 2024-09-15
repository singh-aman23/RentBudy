import classes from "./button.module.css";

export default function Button() {
  return (
    <>
      <div className={classes.heroButtons}>
        <a href="/get-started" className={classes.ctaButton}>
          Get Started
        </a>
      </div>
    </>
  );
}
