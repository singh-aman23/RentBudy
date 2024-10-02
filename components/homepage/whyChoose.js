import classes from "./whyChoose.module.css";
import Image from "next/image";

export default function WhyChoose({ src, title, description }) {
  return (
    <>
      <div className={classes.feature}>
        <div className={classes.icon}>
          <Image src={src} alt = ""/>
        </div>
        <h3 className={classes.featureTitle}>{title}</h3>
        <p className={classes.featureDescription}>{description}</p>
      </div>
    </>
  );
}
