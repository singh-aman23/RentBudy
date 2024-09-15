import classes from "./whyChoose.module.css";

export default function WhyChoose({ src, title, description }) {
  return (
    <>
      <div className={classes.feature}>
        <div className={classes.icon}>
          <img src={src} />
        </div>
        <h3 className={classes.featureTitle}>{title}</h3>
        <p className={classes.featureDescription}>{description}</p>
      </div>
    </>
  );
}
