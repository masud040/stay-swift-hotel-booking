import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import CustomLink from "./CustomLink";
import LogoutBtn from "./auth/LogoutBtn";

const Navbar = async ({ menubar }) => {
  const session = await auth();
  return (
    <nav>
      <Link href="/">
        <Image
          src="/stayswift.svg"
          alt="Stay Swift Logo"
          width={200}
          height={200}
        />
      </Link>
      {menubar && (
        <ul>
          <li>
            <CustomLink href="/recommended-place" name="Recommended Places" />
          </li>

          <li>
            <CustomLink href="/about-us" name="About Us" />
          </li>

          <li>
            <CustomLink href="/contact-us" name="Contact us" />
          </li>

          <li>
            <CustomLink href="/bookings" name="Bookings" />
          </li>

          <li>
            {session?.user ? (
              <span>
                {session.user.name} | <LogoutBtn />
              </span>
            ) : (
              <CustomLink href="/login" name="Login" addClass="login" />
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
