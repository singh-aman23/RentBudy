"use client";
import { useState } from "react";
import Link from "next/link";
import classes from "./navbar.module.css";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const path = usePathname();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const {data: session} = useSession();

  return (
    <nav className={classes.navbar}>
      <div>
        <Link href="/explore">
          <Image src="/logo.jpg" alt="umbrella Logo" className={classes.logo} />
        </Link>
      </div>

      <div className={classes.centerLinks}>
        <Link
          href="/explore"
          className={
            path.startsWith("/explore") ? classes.activeLink : classes.navLink
          }
        >
          Explore
        </Link>
        <Link
          href="/dashboard"
          className={
            path.startsWith("/dashboard") ? classes.activeLink : classes.navLink
          }
        >
          Dashboard
        </Link>
      </div>

      <div className={classes.userMenu}>
        <div onClick={toggleDropdown} className={classes.userIcon}>
          <Image
            src="/cat.jpeg"
            alt="cat avatar"
            className={classes.userAvatar}
          />
          <span className={classes.username}>{session?.user?.name}</span>{" "}
        </div>

        {dropdownOpen && (
          <div className={classes.dropdownMenu}>
            <button onClick = {() => signOut()} className={classes.dropdownItem}>Log Out</button>
          </div>
        )}
      </div>
    </nav>
  );
}
