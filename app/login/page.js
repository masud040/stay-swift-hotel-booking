import LoginForm from "../components/auth/LoginForm";
import SocialLogins from "../components/auth/SocialLogins";

export default function LoginPage() {
  return (
    <section className="grid h-screen place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="text-2xl font-bold">Sign in</h4>
        <LoginForm />
        <SocialLogins />
      </div>
    </section>
  );
}
