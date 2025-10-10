"use client"

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function GuestsDetails() {
    const [position, setPosition] = React.useState("bottom")

    return (
        <>
            <Label htmlFor="date" className="px-1 leading-loose">Enter Guest Details</Label>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full">1Room , 1Guest</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        <DropdownMenuRadioItem value="top">Rooms</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="bottom">Adults</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="right">Children</DropdownMenuRadioItem>
                        <Button variant="outline" className="w-full">Update Details</Button>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}


