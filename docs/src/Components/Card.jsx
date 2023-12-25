import React, { useRef } from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data, reference }) {



    return (
        <>
            <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragElastic={0.2} dragTransition={{
                bounceStiffness: 100,
                bounceDamping: 30
            }} className="relative w-60 h-72 flex-shrink-0 rounded-[45px] md:w-30 lg:w-30 bg-zinc-900/80 text-white py-5  px-8 overflow-hidden">
                <FaFileAlt />
                <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
                <div className="footer absolute bottom-0  w-full  left-0 py-3">
                    <div className="flex items-center justify-between  px-8 mb-10  ">
                        <h5>{data.filesize}</h5>
                        <span className='w-6  h-6 flex rounded-full bg-zinc-500 items-center justify-center'>
                            {data.close ? <IoClose /> : <MdFileDownload size="" color='#fff' />}

                        </span>
                    </div>
                    {
                        data.tag.isOpen && (

                            <div className={`absolute bottom-0 tag  ${data.tag.tagColor === 'blue' ? "bg-blue-600" : "bg-green-600"}   w-full py-2 flex justify-center  font-semibold `} > {data.tag.tagTitle}</div>
                        )
                    }
                </div>
            </motion.div>
        </>
    )
}

export default Card