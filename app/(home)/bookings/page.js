import ProfileInfo from "@/app/components/user/ProfileInfo";
import PastBooking from "@/app/components/user/booking/PastBooking";
import UpcomingBooking from "@/app/components/user/booking/UpcomingBooking";

export default function HotelBookingsPage() {
  return (
    <>
      <section className="mt-[100px]">
        <div className="container">
          <ProfileInfo />
        </div>
      </section>
      <section>
        <div class="container">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PastBooking />
            <UpcomingBooking />
          </div>
        </div>
      </section>
    </>
  );
}
