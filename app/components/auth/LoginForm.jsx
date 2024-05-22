"use client";

import { loginWithCredentials } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await loginWithCredentials(formData);
      if (!!response.error) {
        setError(response.error);
      } else {
        router.push("/bookings");
      }
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      {error && <div className="text-lg text-primary">{error}</div>}
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlhtmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlhtmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" className="w-full mt-4 btn-primary">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
