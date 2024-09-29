import DashboardCard from "../cards/dashboard-card";
import classes from './dashboard-post-grid.module.css'
import Link from "next/link";

export default function DashboardPostGrid({posts}){
    return <>
        <div className={classes.dashboard}>
        <header className={classes.dashboardHeader}>
          <h1>Manage Your Postings</h1>
          <p>Here you can manage your existing postings.</p>
          <Link href="/new-post">
            <button>Create New Post</button>
          </Link>
        </header>
        <div className={classes.dashboardCardContainer}>
        {posts.length > 0 ? (posts.map(post => (<DashboardCard post = {post}/>))) : <p>No post found</p>}
          
        </div>
      </div>
    </>
} 