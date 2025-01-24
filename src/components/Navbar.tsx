import React from "react";
import Link from "next/link";
import DesktopNavbar from "./desktopNavbar";
import MobileNavBar from "./mobileNavBar";
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/action/user.action";
async function Navbar() {
  try{
    const user= await currentUser()
  if (user) await syncUser()
  }catch(error){
console.log("Error ftching user in Navbar",error)
}
  

  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-primary font-mono tracking-wider "
            >
              Socially
            </Link>
          </div>
          <DesktopNavbar  />
          <MobileNavBar  />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
