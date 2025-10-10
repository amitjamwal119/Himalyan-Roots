"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"

import Reservation from "../home/reservation";

export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!isNavOpen);

  return (
    <header className="sticky top-0 w-full bg-[#546434] z-30 h-20 py-10 flex items-center">
      <div className="container mx-auto px-5 flex justify-between items-center">

        {/* Logo */}
        <div className="logo-box"> <Link href="/">
          <Image
            src="/assets/Homepage/hero/him-green-logo-up.png"
            alt="HIMALYAN ROOTS"
            width={90}
            height={30}
            className="w-32 sm:w-36 lg:w-30 h-auto"
          />
        </Link></div>


        {/* Toggle Button for Mobile */}
        <button
          className="lg:hidden text-white"
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          {isNavOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
              <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
              <path d="M18 18V20H6V18H18ZM21 11V13H3V11H21ZM18 4V6H6V4H18Z" />
            </svg>
          )}
        </button>

        {/* Navigation */}
        <nav
          className={`lg:static absolute lg:top-auto top-[110%] right-[5%] lg:bg-transparent bg-slate-100 lg:rounded-none rounded-lg border border-white/30 lg:border-0 lg:shadow-none shadow-lg lg:px-0 px-6 py-5 transition-all duration-300 ease-in-out 
            ${isNavOpen ? "block" : "hidden"} lg:block`}
        >
          <ul className="flex lg:flex-row flex-col lg:items-center items-start lg:gap-7 gap-3 mb-3 lg:mb-0 lg:text-white text-gray-500 text-lg font-medium tracking-wide font-(family-name:--subnlinks)">
            <li><Link href="/" className="hover:text-[#ffbe3d] transition">HOME</Link></li>
            <li><Link href="/rooms" className="hover:text-[#ffbe3d] transition">ROOMS</Link></li>
            <li><Link href="/experiences" className="hover:text-[#ffbe3d] transition">EXPERIENCES</Link></li>
            <li><Link href="/gallary" className="hover:text-[#ffbe3d] transition">GALLERY</Link></li>
            <li><Link href="/aboutUs" className="hover:text-[#ffbe3d] transition">ABOUT</Link></li>
            <li><Link href="/contactUs" className="hover:text-[#ffbe3d] transition">CONTACT</Link></li>
          </ul>

          {/* Book Now - Mobile */}
          <div className="lg:hidden">
            <button className="neon-text px-6 py-2 bg-[#ffbe3d] text-[#3d1f17] hover:bg-[#3d1f17] hover:text-[#ffbe3d] text-lg font-semibold rounded-lg shadow-lg transition">
              Book Now
            </button>
          </div>
        </nav>

        {/* Book Now - Desktop */}
        <div className="hidden lg:block">
          {/* <button className="neon-text text-lg font-(family-name:--subnlinks) px-6 py-3 bg-[#ffbe3d] text-[#3d1f17] hover:bg-[#3d1f17] hover:text-[#ffbe3d] cursor-pointer font-semibold rounded-lg shadow-lg transition">
            Book Now
          </button> */}

          <Dialog>
            <DialogTrigger asChild>
              <Button className="neon-text text-lg font-(family-name:--subnlinks) p-6 bg-[#ffbe3d] text-[#3d1f17] hover:bg-[#3d1f17] hover:text-[#ffbe3d] cursor-pointer font-semibold rounded-lg shadow-lg transition">
                Book Now
              </Button>
              {/* <Button variant="outline">Open Dialog</Button> */}
            </DialogTrigger>
            <DialogContent className="">
              <DialogHeader>
              </DialogHeader>
              <Reservation />
              {/* <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter> */}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
