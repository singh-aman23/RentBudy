"use client";
import { useState } from "react";
import classes from "./new-post-form.module.css";
import { useSession } from "next-auth/react";

export default function NewPostForm({ contact, action }) {
  const [houseNumber, setHouseNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [preferance, setPreferance] = useState("");
  const [rent, setRent] = useState("");
  const [roommates, setRoommates] = useState("");
  const [bhk, setBhk] = useState("");
  const [utilities, setUtilities] = useState("");
  const [error, setError] = useState("");

  const { data: session } = useSession();
  console.log("Session data : ", session);
  const userEmail = session?.user?.email;

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (
      !houseNumber ||
      !city ||
      !state ||
      !pincode ||
      !preferance ||
      !rent ||
      !roommates ||
      !bhk ||
      !utilities ||
      !image
    ) {
      setError("All fields are required");
      return;
    }
    const trimmedPreferance = preferance.trim().toLowerCase();
    if (
      trimmedPreferance !== "m" &&
      trimmedPreferance !== "f" &&
      trimmedPreferance !== "any"
    ) {
      setError("Invalid roommate preference. Please enter 'M', 'F', or 'Any'.");
      return;
    }

    try {
      const res = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          houseNumber,
          city,
          state,
          pincode,
          preferance,
          rent,
          roommates,
          bhk,
          utilities,
          userEmail,
          contact,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        setError("");
      } else {
        console.log("Unexpected error occured");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  return (
    <>
<form onSubmit={handleSubmit}>
  <div className={classes.formContainer}>
    <div className={`${classes.inputField} ${classes.houseNumber}`}>
      <input
        type="text"
        name="houseNumber"
        id="houseNumber"
        placeholder="House Number"
        onChange={(e) => setHouseNumber(e.target.value)}
      />
    </div>

    <div className={`${classes.inputField} ${classes.city}`}>
      <input
        type="text"
        name="city"
        id="city"
        placeholder="Street/Area/City"
        onChange={(e) => setCity(e.target.value)}
      />
    </div>

    <div className={`${classes.inputField} ${classes.state}`}>
      <input
        type="text"
        name="state"
        id="state"
        placeholder="State"
        onChange={(e) => setState(e.target.value)}
      />
    </div>

    <div className={`${classes.inputField} ${classes.pincode}`}>
      <input
        type="text"
        name="pincode"
        id="pincode"
        placeholder="Pincode"
        onChange={(e) => setPincode(e.target.value)}
      />
    </div>
    <div className={`${classes.inputField} ${classes.preferance}`}>
      <input
        type="text"
        name="preferance"
        id="preferance"
        placeholder="Preferance : M/F/Any"
        onChange={(e) => setPreferance(e.target.value)}
      />
    </div>
    <div className={`${classes.inputField} ${classes.rent}`}>
      <input
        type="text"
        name="monthlyRent"
        id="monthlyRent"
        placeholder="Monthly Rent"
        onChange={(e) => setRent(e.target.value)}
      />
    </div>
    <div className={`${classes.inputField} ${classes.roommate}`}>
      <input
        type="text"
        name="roommates"
        id="roommates"
        placeholder="Current Roommates"
        onChange={(e) => setRoommates(e.target.value)}
      />
    </div>

    <div className={`${classes.inputField} ${classes.bhk}`}>
      <input
        type="text"
        name="bhk"
        id="bhk"
        placeholder="BHK"
        onChange={(e) => setBhk(e.target.value)}
      />
    </div>
    <div className={`${classes.inputField} ${classes.utilities}`}>
      <input
        type="text"
        name="utilities"
        id="utilities"
        placeholder="Utilities"
        onChange={(e) => setUtilities(e.target.value)}
      />
    </div>
    <div className={`${classes.inputField} ${classes.imageUpload}`}>
      <label htmlFor="image">Upload Image</label>
      <input
        type="file"
        accept="image/png, image/jpeg"
        id="image"
        name="image"
      />
    </div>
  </div>
  <div className={classes.btnContainer}>
    <button>POST</button>
  </div>
</form>
      {error && <p className={classes.error}>{error}</p>};
    </>
  );
}

