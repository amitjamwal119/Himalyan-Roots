"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Calendar25 } from "./calander"
import GuestsDetails from "./guests"

export default function Reservation() {
  return (
    <>
      <Card className="w-full text-(--txt-darkBlue)">
        <CardHeader>
          <CardTitle className="neon-text text-center lg:text-2xl text-xl font-(family-name:--head-font) text-shadow-lg">Reserve Comfort, Embrace Luxury.</CardTitle>


        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="flex lg:gap-2">
                <Calendar25 />
              </div>
              <div className="">
                <GuestsDetails />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="neon-text bg-[#ffbe3d] text-[#3d1f17] hover:bg-[#3d1f17] hover:text-[#ffbe3d] w-full px-6 py-3 font-semibold rounded-lg shadow-lg transition cursor-pointer">
            Book Now
            {/*   bg-gradient-to-r from-emerald-500 to-sky-500 text-white*/}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

