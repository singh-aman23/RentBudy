"use client";
import classes from './contact-button.module.css';


export default function ContactButton({contact}) {

  function sendMessage(){
      const phoneNumber = `91${contact}`;
      const message = 'Hello, I hope you are doing well! I found your post on RentBudy and I am interested in becoming your roommate';
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }

  return (
    <>
      <button onClick={sendMessage} className = {classes.btn}>Contact</button>
    </>
  );
}


