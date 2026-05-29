import React from 'react'

function Interest() {
    return (
        <section className="w-full px-2 md:px-4 pt-16 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 w-full mx-auto">
                
                {/* Link 1 Wrapper */}
                <a 
                    href="" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block relative overflow-hidden rounded-md bg-black aspect-[4/3] w-full cursor-pointer"
                >
                    <img 
                        src="assets/Coder.svg" 
                        alt="Interest One" 
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                    {/* Dual gradient: subtle 35% opacity at the top, pure transparent middle, and a deeper 75% opacity at the bottom */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/75 pointer-events-none" />
                </a>

                {/* Link 2 Wrapper */}
                <a 
                    href="https://open.spotify.com/playlist/61vJZSiZCw0Yw5vFyuVKOX?si=f0dca6a0c3e84ad0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block relative overflow-hidden rounded-md bg-black aspect-[4/3] w-full cursor-pointer"
                >
                    <img 
                        src="/assets/Spotify.png" 
                        alt="Interest Two" 
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                    {/* Dual gradient: subtle 35% opacity at the top, pure transparent middle, and a deeper 75% opacity at the bottom */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/75 pointer-events-none" />
                </a>

            </div>
        </section>
    )
}

export default Interest;