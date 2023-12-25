import React from 'react'

function background() {
    return (
        <>

            <div className="fixed h-full w-full z-[2]">

                <div className=" absolute top-9 py-10 flex justify-center text-zinc-200 w-full text-2xl">Documents</div>
                <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900 text-[13vw] leading-none tracking-tighter'>Docs'</h1>
            </div>
        </>
    )
}

export default background