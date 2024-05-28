import PaymentForm from "@/app/components/payment/PaymentForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function PaymentPage() {
  const session = await auth();

  if (!session) {
    return redirect("/login");
  }
  return (
    <section className="container">
      <div className="p-6  max-w-xl mx-auto my-12 mt-[100px] border border-gray-700/20 rounded-md">
        <h2 className="text-2xl font-bold">Payment Details</h2>
        <p className="text-sm text-gray-600">
          You have picked <b>Effotel By Sayaji Jaipur</b> and base price is{" "}
          <b>$10</b>
        </p>
        <PaymentForm />
      </div>
    </section>
  );
}
