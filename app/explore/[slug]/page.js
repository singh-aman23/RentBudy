import Slideshow from "@/components/utility/slideshow";
import styles from "./page.module.css";
import Details from "@/components/utility/detail-item";
import ContactButton from "@/components/utility/contact-button";

async function getPostById(id) {
  try {
    const postSearch = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/details`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );

    if (!postSearch.ok) {
      throw new Error("Failed to fetch post");
    }

    const { post } = await postSearch.json();
    return post;
  } catch (error) {
    console.log("Error while fetching details : ", error);
    return null;
  }
}

const PropertyDetails = async ({ params }) => {
  const post = await getPostById(params.slug);

  if (!post) {
    console.log("id : ", params.slug);
    return <p>Error loading post details</p>;
  }

  const images = [post.image];


  return (
    <div className={styles.container}>
      <div className={styles.slideshowContainer}>
        <Slideshow images={images} />
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.propertyDetails}>
          <h5>Property Information</h5>
          <div className={styles.addressContainer}>
            <div className={styles.info}>
              <strong>Address:</strong>
              <strong>{post.bhk} BHK</strong>
            </div>
            <p>{`H.No ${post.houseNumber}, ${post.city}, ${post.state}, ${post.pincode}`}</p>
            <ContactButton contact = {post.contact} />
          </div>
          <div className={styles.detailsGrid}>
            <Details title="Monthly Rent: " content={post.rent} />
            <Details title="Current Roommates: " content={post.roommates} />
            <Details title="Preferred Roommate: " content={post.preferance} />
            <Details title="Utilities Included: " content={post.utilities} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
