import Gallery from "@/app/components/hotel/details/Gallery";
import Overview from "@/app/components/hotel/details/Overview";
import Summary from "@/app/components/hotel/details/Summary";

export default function HotelDetailsPage() {
  return (
    <>
      <Summary />
      <Gallery />
      <Overview />
    </>
  );
}
