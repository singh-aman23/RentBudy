"use client";
import classes from "./login-form.module.css";
import Symbol from "../utility/symbol";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if(res.error){
        setError("Invalid Credentials");
        return;
      }
      router.push("/explore");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.authForm}>
        <Symbol link="/" />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button>Log In</button>
        {error && (
          <div className={classes.error}>
            <p>{error}</p>
          </div>
        )}

        <div className={classes.register}>
          <p>
            Don't have an account?{" "}
            <span>
              <Link href="/get-started/signup">Register</Link>
            </span>
          </p>
        </div>
      </form>
    </>
  );
}
