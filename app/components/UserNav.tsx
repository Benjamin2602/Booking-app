/* eslint-disable @next/next/no-img-element */
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Menu, MenuIcon } from "lucide-react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export async function UserNav() {
  const { getUser } = getKindeServerSession();
  //fetching user data
  const user = await getUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
          <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />

          <img
            src={
              user?.picture ??
              "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
            }
            alt="Image"
            className="w-8 h-8 lg:w-7 hidden lg:block rounded-full"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {/* if user signed in then it shows the logout dropmenu  */}
        {user ? (
          <>
             <DropdownMenuItem>
              <form className="">
                <button type="submit" className="w-full">
                  <Link href="/profile">Profile</Link>
                </button>
              </form>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/listings">My Listings</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/favorites">My Favorites</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/bookings">My Bookings</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator/>
            <DropdownMenuItem>
              <LogoutLink className="w-full">Logout</LogoutLink>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <RegisterLink className="w-full">Register</RegisterLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LoginLink className="w-full">Login</LoginLink>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
