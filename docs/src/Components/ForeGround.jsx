import React from 'react'
import Card from './Card'
import { useRef } from 'react';

function ForeGround() {

    const ref = useRef(null);

    const data = [
        {
            desc: "Every moment with you feels like a beautiful dream, and I never want to wake up.",
            filesize: ".8mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green",
            }
        },
        {
            desc: "You light up my world like nobody else, and I'm grateful to have you by my side.",
            filesize: ".8mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "blue",
            }
        },
        {
            desc: "In your smile, I find the warmth and joy that make my day complete.",
            filesize: ".8mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Upload",
                tagColor: "green",
            }
        },
    ]


    return (
        <>
            <div ref={ref} className="fixed z-[3]  top-0 left-0 w-full h-full flex gap-5 flex-wrap p-10">
                {
                    data.map((item, index) => (
                        <Card data={item} reference={ref}/>
                    ))
                }
            </div>
        </>
    )
}

export default ForeGround