"use client";

import { signOut } from "next-auth/react";

export default async function () {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "http://localhost:3000/login" })}
      class="login"
    >
      Logout
    </button>
  );
}
