"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./card.module.css";
import Link from "next/link";

export default function Card() {
  const images = [
    "https://nextui.org/images/hero-card-complete.jpeg",
    "https://nextui.org/images/card-example-1.jpeg",
    "https://nextui.org/images/card-example-2.jpeg",
  ];

  return (
    <>
      <div className={classes.card}>
        <div className={classes.cardHeader}>
          <h4 className={classes.title}>2 BHK in New York</h4>
          <p className={classes.textTiny}>Looking for: Girls</p>
          <small className={classes.textDefault}>Rent: $1200/month</small>
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
            Address: 123 Main St, NY
          </small>
          <div className={classes.cardActions}>
            <Link href="/explore/123">
              <button className={classes.contactButton}>View Details</button>
            </Link>

            <button className={classes.likeButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={classes.likeIcon}
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              Like
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
