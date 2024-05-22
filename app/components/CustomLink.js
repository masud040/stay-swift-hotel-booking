"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({ href, name, addClass }) {
  const pathname = usePathname();
  return (
    <Link
      className={`${pathname === href && "text-indigo-700"} ${
        addClass && addClass
      }`}
      href={href}
    >
      {name}
    </Link>
  );
}
