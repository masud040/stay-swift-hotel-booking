import Image from "next/image";
import HotelSummaryInfo from "./HotelSummaryInfo";

const HotelCard = ({ hotel }) => {
  const {
    id,
    name,
    address1,
    airportCode,
    city,
    countryCode,
    highRate,
    location,
    locationDescription,
    lowRate,
    postalCode,
    propertyCategory,
    shortDescription,
    stateProvinceCode,
    thumbNailUrl,
    gallery,
    overview,
    amenities,
  } = hotel || {};
  return (
    <div className="flex gap-6 p-4 border rounded-md border-gray/20">
      <Image
        src={thumbNailUrl}
        className="max-h-[162px] max-w-[240px] rounded-md"
        alt={name}
        width={200}
        height={200}
      />

      <HotelSummaryInfo fromListPage={true} />
    </div>
  );
};

export default HotelCard;
