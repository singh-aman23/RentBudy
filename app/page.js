import Footer from "@/components/homepage/footer";
import classes from "./page.module.css";
import Header from "@/components/homepage/header";
import WhyChoose from "@/components/homepage/whyChoose";
import Working from "@/components/homepage/working";
import Symbol from "@/components/utility/symbol";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/explore");
  }
  return (
    <>
      <Symbol link="/" />
      <div className={classes.container}>
        <Header />

        <section className={classes.howItWorks}>
          <h2 className={classes.sectionTitle}>How RentBudy Works</h2>
          <div className={classes.steps}>
            <Working
              src="/signup.png"
              title="Sign Up"
              description="Create your account in just a few clicks."
            />
            <Working
              src="/home.png"
              title="Post a Room"
              description="Share details of your space and who you're looking for."
            />
            <Working
              src="/match.png"
              title="Find a Match"
              description="Browse listings, contact potential roommates, and connect."
            />
          </div>
        </section>

        <section className={classes.features}>
          <h2 className={classes.sectionTitle}>Why Choose RentBudy?</h2>
          <div className={classes.featuresList}>
            <WhyChoose
              src="/checked.png"
              title="Trustworthy Listings"
              description="Verified posts from real users."
            />
            <WhyChoose
              src="/easy.png"
              title="Easy to Use"
              description="Simple and intuitive interface."
            />
            <WhyChoose
              src="/personalised.png"
              title="Personalized Searches"
              description="Filter listings by location, rent, and roommate preferences."
            />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
