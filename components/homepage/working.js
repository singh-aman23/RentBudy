import classes from "./working.module.css";
import Image from "next/image";

export default function Working({ src, title, description }) {
  return (
    <>
      <div className={classes.step}>
        <div className={classes.icon}>
          <Image src={src} alt = "" />
        </div>
        <h3 className={classes.stepTitle}>{title}</h3>
        <p className={classes.stepDescription}>{description}</p>
      </div>
    </>
  );
}
