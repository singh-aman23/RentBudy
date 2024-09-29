"use client";
import classes from "./signup-form.module.css";
import Symbol from "../utility/symbol";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("All fields are necessary");
      return;
    }


    try {
      const resUserExists = await fetch("/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();
      if (user) {
        setError("User already exists");
        return;
      }

      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password}),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        setError("");
        router.push("/get-started/login");
      } else {
        console.log("User registration failed");
      }
    } catch (error) {
      console.log("Error during registration", error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.authForm}>
        <Symbol link="/" />
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
          placeholder="Name"
        />
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
        <button>Sign Up</button>
        {error && (
          <div className={classes.error}>
            <p>{error}</p>
          </div>
        )}
        <div className={classes.login}>
          <p>
            Already have an account?{" "}
            <span>
              <Link href="/get-started/login">Login</Link>
            </span>
          </p>
        </div>
      </form>
    </>
  );
}
