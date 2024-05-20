import RegistrationForm from "@/app/components/auth/RegistrationForm";
import SocialLogins from "@/app/components/auth/SocialLogins";

export default function RegisterPage() {
  return (
    <section className="grid h-screen place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="text-2xl font-bold">Sign up</h4>
        <RegistrationForm />
        <SocialLogins />
      </div>
    </section>
  );
}
