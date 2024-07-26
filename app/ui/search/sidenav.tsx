import PriceSlider from "./priceSlider";
import Search from "./search";


export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <section>
        <Search placeholder="Search products..." />
      </section>
      <section>
        <PriceSlider />
      </section>
    </div>
  );
}
