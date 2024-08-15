import { title } from "@/components/primitives";

import Brands from "@/components/homepage/Brands";
import { NewArrivals } from "@/components/homepage/HomepageProducts";
import HomePageBrowse from "@/components/homepage/HomePageBrowse";
import HomepageReview from "@/components/homepage/HomepageReview";

import HomepageSlide from "@/components/homepage/HomepageSlide";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 mb-2 md:py-10">
        <div className="inline-block text-center justify-center min-w-screen ">
          <h1 className={title({ size: "lg" })}>What's&nbsp;</h1>
          <h1 className={title({ color: "yellow", size: "lg" })}>Your&nbsp;</h1>
          <h1 className={title({ color: "green", size: "lg" })}>LIMIT&nbsp;</h1>
          <br />
          <h1 className={title({ size: "sm", class: "mt-4" })}>
            One run can change your day, many runs can change your life.
          </h1>
          
        </div>
      </section>
          <section className="mt-4">
            <HomepageSlide />
          </section>
      
      <section>
        <Brands />
      </section>
      <section>
        <NewArrivals />
        
      </section>
      <section>
        <HomePageBrowse />
      </section>
      <section>
        <HomepageReview />
      </section>
      <footer>{/* <Footer /> */}</footer>
    </>
  );
}
