"use client";
import { useState } from "react";
import Link from "next/link";
import classes from "./navbar.module.css";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className={classes.navbar}>
      <div>
        <Link href="/explore">
          <img src="/logo.jpg" alt="umbrella Logo" className={classes.logo} />
        </Link>
      </div>

      <div className={classes.centerLinks}>
        <Link href="/explore" className={classes.navLink}>
          Explore
        </Link>
        <Link href="/dashboard" className={classes.navLink}>
          Dashboard
        </Link>
      </div>

      <div className={classes.userMenu}>
        <div onClick={toggleDropdown} className={classes.userIcon}>
          <img
            src="/cat.jpeg"
            alt="cat avatar"
            className={classes.userAvatar}
          />
          <span className={classes.username}>John Doe</span>{" "}
        </div>

        {dropdownOpen && (
          <div className={classes.dropdownMenu}>
          <Link href = '/'>
            <button className={classes.dropdownItem}>Log Out</button>
          </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
