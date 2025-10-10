"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function Calendar25() {
    const [openIn, setOpenIn] = React.useState(false)
    const [openOut, setOpenOut] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(undefined)

    return (
        <>
            <div className="flex lg:flex-row flex-col gap-2">
                <div className="flex flex-col gap-3">
                    <Label htmlFor="date" className="px-1">
                        Check In
                    </Label>
                    <Popover open={openIn} onOpenChange={setOpenIn}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                id="date"
                                className="lg:w-48 w-full justify-between font-normal"
                            >
                                {date ? date.toLocaleDateString() : "Select date"}
                                <ChevronDownIcon />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                captionLayout="dropdown"
                                onSelect={(date) => {
                                    setDate(date)
                                    setOpenIn(false)
                                }}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="flex flex-col gap-3">
                    <Label htmlFor="date" className="px-1">
                        Check Out
                    </Label>
                    <Popover open={openOut} onOpenChange={setOpenOut}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                id="date"
                                className="lg:w-48 w-full justify-between font-normal"
                            >
                                {date ? date.toLocaleDateString() : "Select date"}
                                <ChevronDownIcon />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                captionLayout="dropdown"
                                onSelect={(date) => {
                                    setDate(date)
                                    setOpenOut(false)
                                }}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>



        </>

    )
}
