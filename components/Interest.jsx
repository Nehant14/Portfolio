import React from 'react';
// 1. Import your images (adjust the relative paths to match your folder structure)
import coderSvg from '../assets/Coder.svg'; 
import spotifyPng from '../assets/Spotify.png';

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
                    {/* 2. Use the imported variable here */}
                    <img 
                        src={coderSvg} 
                        alt="Interest One" 
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/75 pointer-events-none" />
                </a>

                {/* Link 2 Wrapper */}
                <a 
                    href="https://open.spotify.com/playlist/61vJZSiZCw0Yw5vFyuVKOX?si=f0dca6a0c3e84ad0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block relative overflow-hidden rounded-md bg-black aspect-[4/3] w-full cursor-pointer"
                >
                    {/* 3. Use the imported variable here */}
                    <img 
                        src={spotifyPng} 
                        alt="Interest Two" 
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/75 pointer-events-none" />
                </a>

            </div>
        </section>
    )
}

export default Interest;