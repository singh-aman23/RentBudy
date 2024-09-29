'use client';
import { useState } from 'react';
import Symbol from '../utility/symbol';
import classes from './contact-registration-form.module.css';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function ContactRegistrationForm(){
    const { data: session } = useSession();
    const [contact, setContact] = useState("");
    const router = useRouter();

    async function handleRegistration(e){
        e.preventDefault();
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({email: session.user.email, contact})
            });
            if(!res.ok){
                throw new Error("Registration failed");
            }
            router.push("/explore");
        } catch (error) {
            console.log("error: ", error);
        }
    }
    return <>
        <form className = {classes.contactRegistrationForm} onSubmit = {handleRegistration}>
        <Symbol link = "/explore"/>
        <p>Kindly register your contact number to continue</p>
        <input
          onChange={(e) => setContact(e.target.value)}
          type="text"
          name="contact"
          id="contact"
          placeholder="Contact Number"
        />
        <button type = "submit">Register</button>
        </form>
    </>
}