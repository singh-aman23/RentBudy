import classes from "./symbol.module.css";
import Link from "next/link";
export default function Symbol({link}) {
  return (
    <div className={classes.img}>
      <Link href={link}>
        <img src="/logo.jpg" />
      </Link>
    </div>
  );
}
