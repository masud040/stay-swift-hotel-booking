import HotelList from "../components/hotel/HotelList";
import Filter from "../components/search/Filter";
import Search from "../components/search/Search";

export default function HotelListPage() {
  return (
    <>
      <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
        <div className="container items-center py-12 ">
          <Search fromList={true} />
        </div>
      </section>
      <section className="py-12">
        <div className="container grid grid-cols-12">
          <Filter />
          <HotelList />
        </div>
      </section>
    </>
  );
}
