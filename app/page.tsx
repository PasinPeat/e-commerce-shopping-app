import { title, subtitle } from "@/components/primitives";
import HomepageHero from "@/components/homepage/HomepageHero";
import Brands from "@/components/homepage/Brands";
import {
  NewArrivals,
  Topselling,
} from "@/components/homepage/HomepageProducts";
import HomePageBrowse from "@/components/homepage/HomePageBrowse";
import HomepageReview from "@/components/homepage/HomepageReview";
import Footer from "@/components/homepage/Footer";
import HomepageSlide from "@/components/homepage/HomepageSlide";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block  text-center justify-center min-w-screen ">
          {/* <h1 className={title()}>Make&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
          <br />
          <h1 className={title()}>
            websites regardless of your design experience.
          </h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </h2> */}
          <HomepageSlide/>
        </div>
      </section>
      <section>
        <HomepageHero />
      </section>
      <section>
        <Brands />
      </section>
      <section>
        {/* <NewArrivals /> */}
        <Topselling />
      </section>
      <section>
        <HomePageBrowse />
      </section>
      <section>
        <HomepageReview />
      </section>
      <footer>
        {/* <Footer /> */}
      </footer>
    </>
  );
}
