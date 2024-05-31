import PaymentForm from "@/app/components/payment/PaymentForm";
import { auth } from "@/auth";
import { getHotelById } from "@/db/queries";
import { getBookDays } from "@/utils/getBookDays";
import { redirect } from "next/navigation";

export default async function PaymentPage({
  params: { id },
  searchParams: { checkin, checkout },
}) {
  const session = await auth();
  const hotelInfo = await getHotelById(id, checkin, checkout);
  const bookedDays = await getBookDays(checkin, checkout);
  const hasCheckInCheckout = checkin && checkout;
  let cost = (hotelInfo?.highRate + hotelInfo?.lowRate) / 2;
  if (hasCheckInCheckout) {
    cost = cost * bookedDays;
  }
  if (!session) {
    return redirect("/login");
  }
  return (
    <section className="container">
      <div className="p-6  max-w-xl mx-auto my-12 mt-[100px] border border-gray-700/20 rounded-md">
        <h2 className="text-2xl font-bold">Payment Details</h2>
        <p className="text-sm text-gray-600">
          You have picked <b>{hotelInfo?.name}</b> and base price is{" "}
          <b>${cost}</b>
        </p>
        <PaymentForm checkin={checkin} checkout={checkout} />
      </div>
    </section>
  );
}
