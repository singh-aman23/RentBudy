import PostGrid from "@/components/utility/posts-grid";
import SearchBar from "@/components/utility/searchbar";
import classes from './page.module.css';
import Link from "next/link";

async function getPosts(){
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/explore`, {
      cache : "no-store"
    });
    if(!res.ok){
      throw new Error("Failed to fetch posts");
    }
    const data = await res.json();
    return data.posts || [];
  } catch (error) {
    console.log("Error loading topics :", error);
    return [];
  }
}

export default async function Explore() {
  const posts = await getPosts();

  return (
    <>
    <div className = {classes.container}> 
    <SearchBar/>
    <Link href = '/new-post'>
    <button className = {classes.newPostBtn}>New Post</button>
    </Link>
    </div>
    <PostGrid posts = {posts} />
    </>
  );
}
