import Image from "next/image";
import HotelSummaryInfo from "./HotelSummaryInfo";

const HotelCard = ({ hotel }) => {
  return (
    <div className="flex gap-6 p-4 border rounded-md border-gray/20">
      <Image
        src={hotel?.thumbNailUrl}
        className="max-h-[162px] max-w-[240px] rounded-md"
        alt={hotel?.name}
        width={240}
        height={160}
      />

      <HotelSummaryInfo fromListPage={true} hotelInfo={hotel} />
    </div>
  );
};

export default HotelCard;
