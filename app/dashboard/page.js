"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import DashboardPostGrid from "@/components/utility/dashboard-post-grid";

export default function Dashboard() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    if (!session?.user?.email) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/dashboard`,
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
        throw new Error("Failed to fetch posts");
      }

      const data = await res.json();
      setPosts(data.posts);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [session]);

  return (
    <>
      <DashboardPostGrid posts={posts} />
    </>
  );
}
