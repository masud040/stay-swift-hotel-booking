import Gallery from "@/app/components/hotel/details/Gallery";
import Overview from "@/app/components/hotel/details/Overview";
import Summary from "@/app/components/hotel/details/Summary";
import { getHotelById } from "@/db/queries";

export default async function HotelDetailsPage({
  params: { id },
  searchParams: { checkin, checkout },
}) {
  const hotelInfo = await getHotelById(id, checkin, checkout);

  return (
    <>
      <Summary hotelInfo={hotelInfo} checkin={checkin} checkout={checkout} />
      <Gallery gallery={hotelInfo?.gallery} hotelId={id} />
      <Overview overview={hotelInfo?.overview} />
    </>
  );
}
