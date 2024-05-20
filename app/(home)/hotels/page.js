import HotelList from "@/app/components/hotel/HotelList";
import Filter from "@/app/components/search/Filter";
import Search from "@/app/components/search/Search";

export default async function HotelListPage() {
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
