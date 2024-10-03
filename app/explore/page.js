"use client";
import PostGrid from "@/components/utility/posts-grid";
import SearchBar from "@/components/utility/searchbar";
import classes from "./page.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Explore() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/explore`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.error("Error loading topics:", error);
      }
    }

    getPosts();
  }, [session]);

  return (
    <>
      <div className={classes.container}>
        <SearchBar />
        <Link href="/new-post">
          <button className={classes.newPostBtn}>New Post</button>
        </Link>
      </div>
      <PostGrid posts={posts} />
    </>
  );
}
