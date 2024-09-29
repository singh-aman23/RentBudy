import classes from "./posts-grid.module.css";
import Card from "@/components/cards/card";
export default function PostGrid({ posts }) {

  if(posts.length === 0){
    return <p>No posts available</p>
  }
  return (
    <>
      <div className={classes.container}>
      {posts.map(post => (
        <Card 
          key={post._id} 
          bhk={post.bhk} 
          city={post.city} 
          preferance={post.preferance} 
          rent={post.rent} 
          houseNumber={post.houseNumber} 
          state={post.state} 
          id = {post._id}
          pincode = {post.pincode}
        />
      ))}
      </div>
    </>
  );
}
