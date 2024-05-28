"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const RegistrationForm = () => {
  const router = useRouter();
  const [err, setErr] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fName = formData.get("fname");
    const lName = formData.get("lname");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fName,
          lName,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/login");
    } catch (err) {
      setErr(err.message);
    }
  }
  return (
    <>
      {err && <div className="text-lg text-primary">{err}</div>}
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlhtmlFor="fname">First Name</label>
          <input type="text" name="fname" id="fname" />
        </div>

        <div>
          <label htmlhtmlFor="lname">Last Name</label>
          <input type="text" name="lname" id="lname" />
        </div>

        <div>
          <label htmlhtmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlhtmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" className="w-full mt-4 btn-primary">
          Create account
        </button>
      </form>
    </>
  );
};

export default RegistrationForm;
