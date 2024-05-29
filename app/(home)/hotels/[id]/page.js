import Gallery from "@/app/components/hotel/details/Gallery";
import Overview from "@/app/components/hotel/details/Overview";
import Summary from "@/app/components/hotel/details/Summary";
import { getHotelById } from "@/db/queries";

export default async function HotelDetailsPage({ params: { id } }) {
  const hotelInfo = await getHotelById(id);

  return (
    <>
      <Summary hotelInfo={hotelInfo} />
      <Gallery gallery={hotelInfo?.gallery} hotelId={id} />
      <Overview overview={hotelInfo?.overview} />
    </>
  );
}
