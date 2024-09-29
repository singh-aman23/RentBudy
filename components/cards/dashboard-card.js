"use client";
import classes from "./dashboard-card.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaTrash} from 'react-icons/fa';
import { useRouter } from "next/navigation";

import Link from "next/link";

export default function DashboardCard({post}) {

  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this post?");
    if(!confirmed){
      return;
    }
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
        method : 'DELETE',
        headers: {
            "Content-Type": "application/json",
          },
        body : JSON.stringify({id : post._id})
      });

      if(res.ok){
        router.push("/explore");
      }else{
        const errorData = await res.json(); 
      console.error('Failed to delete post:', errorData);
      alert("Failed to delete this post");
      }
    } catch (error) {
      console.log("error: ", error);
      alert("An error occured while deleting the post");
    }
  }

  const images = [
    "https://nextui.org/images/hero-card-complete.jpeg",
    "https://nextui.org/images/card-example-1.jpeg",
    "https://nextui.org/images/card-example-2.jpeg",
  ];

  return (
    <>
      <div className={classes.card}>
        <div className={classes.cardHeader}>
          <h4 className={classes.title}>{post.bhk} BHK in {post.city}</h4>
          <p className={classes.textTiny}>Looking for: {post.preferance}</p>
          <small className={classes.textDefault}>Rent: Rs {post.rent}/month</small>
        </div>
        <div className={classes.cardBody}>
          {/* Carousel without the onClick handler */}
          <Carousel showThumbs={false} dynamicHeight={true}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  alt={`House ${index + 1}`}
                  className={classes.cardImage}
                  src={image}
                  width={270}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className={classes.cardFooter}>
          <small className={classes.textDefault}>
          Address: H.No {`${post.houseNumber}, ${post.city}, ${post.state}`}
          </small>
          <div className={classes.cardActions}>
            <Link href={`/explore/${post._id}`}>
              <button className={classes.contactButton}>View Details</button>
            </Link>
            <button className={classes.edit} onClick = {handleDelete}>
              <FaTrash className={classes.icon} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
