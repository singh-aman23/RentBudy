"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./card.module.css";
import Link from "next/link";

export default function Card({bhk, city, preferance, rent, houseNumber, state, id, pincode}) {
  const images = [
    "https://nextui.org/images/hero-card-complete.jpeg",
    "https://nextui.org/images/card-example-1.jpeg",
    "https://nextui.org/images/card-example-2.jpeg",
  ];

  return (
    <>
      <div className={classes.card}>
        <div className={classes.cardHeader}>
          <h4 className={classes.title}>{bhk} BHK in {city}</h4>
          <p className={classes.textTiny}>Looking for: {preferance}</p>
          <small className={classes.textDefault}>Rent: Rs {rent}/month</small>
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
            Address: H.No {`${houseNumber}, ${city}, ${state}, ${pincode}`}
          </small>
          <div className={classes.cardActions}>
            <Link href={`/explore/${id}`}>
              <button className={classes.contactButton}>View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
