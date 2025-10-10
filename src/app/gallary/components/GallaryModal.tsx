"use client"

import Image from "next/image";
import { ReactNode } from "react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
//  DialogHeader,
//    DialogTitle,
import { GalleryItem } from "@/types/Gallary";

interface gallaryModalProp {
    gallaryItemProp: GalleryItem;
    triggerElement: ReactNode;            //triggerElement is the element that will open the modal.
}

export default function GallaryModal({ gallaryItemProp, triggerElement }: gallaryModalProp) {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    {triggerElement}
                </DialogTrigger>

                <DialogContent className="max-w-3xl p-0 bg-transparent border-none shadow-none">
                    <div className="relative w-full h-[80vh] flex items-center justify-center">
                        <Image
                            src={gallaryItemProp.image}
                            alt={gallaryItemProp.description || "Gallery Image"}
                            fill
                            className="object-contain rounded-lg"
                            priority
                        />
                    </div>

                    {/* {gallaryItemProp.description && (
                        <DialogHeader className="text-center mt-2 bg-black/60 text-white py-2 rounded-b-lg">
                            <DialogTitle className="text-sm font-medium">{gallaryItemProp.description}</DialogTitle>
                        </DialogHeader>
                    )} */}
                </DialogContent>
            </Dialog>
        </>
    );
}