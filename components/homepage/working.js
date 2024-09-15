import classes from "./working.module.css";

export default function Working({ src, title, description }) {
  return (
    <>
      <div className={classes.step}>
        <div className={classes.icon}>
          <img src={src} />
        </div>
        <h3 className={classes.stepTitle}>{title}</h3>
        <p className={classes.stepDescription}>{description}</p>
      </div>
    </>
  );
}
