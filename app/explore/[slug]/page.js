import Slideshow from '@/components/utility/slideshow'; 
import { Paper, Typography } from '@mui/material'; 
import styles from './page.module.css'; 

const PropertyDetails = () => {
  const images = [
    'https://nextui.org/images/hero-card-complete.jpeg',
    'https://nextui.org/images/card-example-1.jpeg',
    'https://nextui.org/images/card-example-2.jpeg'
  ];

  const mapSrc = `https://www.google.com/maps/embed/v1/place?q=40.712776,-74.005974&key=AIzaSyDiDR5AcMSyWYM0tUJaLk-qXhypfZ7B9bg`;

  return (
    <div className={styles.container}>
      <div className={styles.slideshowContainer}>
        <Slideshow images={images} />
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.propertyDetails}>
          <h5>Property Information</h5>
          <div className={styles.addressContainer}>
          <div className = {styles.info}>

            <strong>Address:</strong>
            <strong>2 BHK</strong>
          </div>
            <p>1234 Elm Street, Springfield, IL, 62704</p>
            <button>Contact</button>
          </div>
          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <strong>Monthly Rent:</strong>
              <span>Rs 25000</span>
            </div>
            <div className={styles.detailItem}>
              <strong>Current Roommates:</strong>
              <span>2</span>
            </div>
            <div className={styles.detailItem}>
              <strong>Preferred Roommate:</strong>
              <span>Female</span>
            </div>
            <div className={styles.detailItem}>
              <strong>Utilities Included:</strong>
              <span>Electricity, Water, Internet</span>
            </div>
          </div>
        </div>
        {/* Google Map for Location */}
        <div className={styles.mapContainer}>
          <Paper elevation={3}>
            <Typography variant="h6">Location</Typography>
            <iframe
              title="Property Location"
              src={mapSrc}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
