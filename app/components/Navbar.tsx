import Link from "next/link";
import Image from "next/image";
import DesktopLogo from "../../public/bookingcom-logo.png";
import { UserNav } from "./UserNav";

export function Navbar() {
  return (
    <nav className="w-full border-b p-4">
      <div className="flex justify-between items-center container mx-auto px-5 lg:px-10 ">
        <Link href="/">
          <Image
            src={DesktopLogo}
            alt="logo"
            className="w-40 hidden lg:block"
          />
          <Image
            src={DesktopLogo}
            alt="logo"
            className="w-24 block lg:hidden"
          />
        </Link>

        <div className="rounded-full border px-5 py-2">
          <h1>hello from the search</h1>
        </div>

        <UserNav/>

      </div>
    </nav>
  );
}
