"use client";
import { useRouter } from "next/navigation";
import classes from "./new-post-form.module.css";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function NewPostForm({ contact }) {
  const { data: session } = useSession();
  const router = useRouter();
  console.log("Session data : ", session);
  const userEmail = session?.user?.email;
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (
        !formData.get("houseNumber") ||
        !formData.get("city") ||
        !formData.get("state") ||
        !formData.get("pincode") ||
        !formData.get("preferance") ||
        !formData.get("monthlyRent") ||
        !formData.get("roommates") ||
        !formData.get("bhk") ||
        !formData.get("utilities")
      ) {
        setError("All fields are mandatory");
        return;
      }

      if (!result.url) {
        setError("Please upload an image of property");
        return;
      }

      const trimmedPreferance = formData.get("preferance").trim().toLowerCase();

      if (
        trimmedPreferance !== "m" &&
        trimmedPreferance !== "f" &&
        trimmedPreferance !== "any"
      ) {
        setError(
          "Invalid roommate preference. Please enter 'M', 'F', or 'Any'."
        );
        return;
      }

      if (response.ok) {
        const postDetails = {
          houseNumber: formData.get("houseNumber"),
          city: formData.get("city"),
          state: formData.get("state"),
          pincode: formData.get("pincode"),
          preferance: formData.get("preferance"),
          rent: formData.get("monthlyRent"),
          roommates: formData.get("roommates"),
          bhk: formData.get("bhk"),
          utilities: formData.get("utilities"),
          userEmail: userEmail,
          contact: contact,
          image: result.url,
        };

        const postResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/post`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postDetails),
          }
        );

        const postResult = await postResponse.json();
        if (postResponse.ok) {
          console.log("Post created successfully: ", postResult);
          router.push("/dashboard");
        } else {
          console.error("Post creation failed", postResult.error);
        }
      }
    } catch (error) {
      console.error("error: ", error);
    }
  };

  function handleFileChange(event) {
    const fileInput = event.target;
    const fileNameDisplay = document.getElementById("fileName");

    if (fileInput.files.length > 0) {
      fileNameDisplay.textContent = fileInput.files[0].name; 
    } else {
      fileNameDisplay.textContent = "No file chosen"; 
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
            />
          </div>

          <div className={`${classes.inputField} ${classes.city}`}>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Street/Area/City"
            />
          </div>

          <div className={`${classes.inputField} ${classes.state}`}>
            <input type="text" name="state" id="state" placeholder="State" />
          </div>

          <div className={`${classes.inputField} ${classes.pincode}`}>
            <input
              type="text"
              name="pincode"
              id="pincode"
              placeholder="Pincode"
            />
          </div>
          <div className={`${classes.inputField} ${classes.preferance}`}>
            <input
              type="text"
              name="preferance"
              id="preferance"
              placeholder="Preferance : M/F/Any"
            />
          </div>
          <div className={`${classes.inputField} ${classes.rent}`}>
            <input
              type="text"
              name="monthlyRent"
              id="monthlyRent"
              placeholder="Monthly Rent"
            />
          </div>
          <div className={`${classes.inputField} ${classes.roommate}`}>
            <input
              type="text"
              name="roommates"
              id="roommates"
              placeholder="Current Roommates"
            />
          </div>

          <div className={`${classes.inputField} ${classes.bhk}`}>
            <input type="text" name="bhk" id="bhk" placeholder="BHK" />
          </div>
          <div className={`${classes.inputField} ${classes.utilities}`}>
            <input
              type="text"
              name="utilities"
              id="utilities"
              placeholder="Utilities"
            />
          </div>
          <div className={`${classes.inputField} ${classes.fileInput}`}>
            <input
              type="file"
              accept="image/png, image/jpeg"
              id="image"
              name="image"
              onChange={handleFileChange}
            />
            <label htmlFor="image">Choose Image</label>
            <span id="fileName" className={classes.fileName}>
              No file chosen
            </span>
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
