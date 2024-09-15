import classes from "./auth-form.module.css";
import Symbol from "./symbol";
import Link from "next/link";
export default function AuthForm() {
  return (
    <>
      <form className={classes.authForm}>
        <Symbol link = "/"/>
        <p>
          <input type="email" name="email" id="email" placeholder="Email" />
        </p>
        <p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </p>
        <Link href="/explore">
          <button>Sign Up</button>
        </Link>
      </form>
    </>
  );
}
