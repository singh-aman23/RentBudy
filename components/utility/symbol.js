import classes from "./symbol.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Symbol({link}) {
  return (
    <div className={classes.img}>
      <Link href={link}>
        <Image src="/logo.jpg" alt = "umbrella logo" />
      </Link>
    </div>
  );
}
