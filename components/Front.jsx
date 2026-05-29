import React from 'react'

function CentralName() {
    return (
        // Kept absolute positioning, added overflow-hidden to prevent any vertical scaling scrollbars
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full pt-6 px-6 pb-0 md:pb-2 select-none pointer-events-none z-10 text-center overflow-hidden">
            <h1 className="text-[5rem] sm:text-[8rem] md:text-[13vw] font-medium uppercase tracking-tighter leading-none opacity-90 transition-all duration-300 whitespace-nowrap scale-y-[1.25] origin-bottom">
                Nehant Fopse
            </h1>
        </div>
    )
}

export default CentralName;