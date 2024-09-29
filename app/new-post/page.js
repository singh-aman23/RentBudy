'use client';
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import NewPostForm from "@/components/forms/new-post-form";
import ContactRegistrationForm from "@/components/forms/contact-registration-form";

export default function NewPost(){
    const { data: session } = useSession();
    const [contact, setContact] = useState(null);

    const getContact = async () => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/findContact`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ userEmail: session.user.email }),
            }
          );
          if (!res.ok) {
            console.log("error: ", error);
            throw new Error("Failed to fetch contact");
          }
          const data = await res.json();
          setContact(data.contactObj ? data.contactObj.contact : null);
        } catch (error) {
          console.log("Error fetching contact: ", error);
        }
      };
      useEffect(() => {
        getContact();
      }, [session]);

    return <>
    {contact ? <NewPostForm contact = {contact}/> : <ContactRegistrationForm/>}
    </>
}