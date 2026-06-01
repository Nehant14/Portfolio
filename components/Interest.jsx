import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import spotifyPng from '../assets/Spotify.png';

function Interest() {
    return (
        <section className="w-full px-2 md:px-4 pt-16 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 w-full mx-auto">
                
                {/* Typing Animation Box */}
                <div className="relative overflow-hidden rounded-md bg-black aspect-[4/3] w-full p-5 md:p-8 text-white font-mono text-sm sm:text-base md:text-lg leading-relaxed select-none">
                    <TypeAnimation
                        sequence={[
                            "Currently building Renderly, a tool that leverages the Manim Python library to generate smooth 2D animations programmatically. Outside of that, I'm always in learning mode — exploring new technologies, keeping up with football, and going deep into the world of Large Language Models. What makes an LLM tick? How does it form understanding? These are the questions keeping me up at night.",
                            1000,
                        ]}
                        wrapper="p"
                        speed={55}
                        cursor={true}
                        repeat={0}
                        style={{ display: 'block', clear: 'both' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 pointer-events-none" />
                </div>

                {/* Image Container (Link Removed) */}
                <div className="relative overflow-hidden rounded-md bg-black aspect-[4/3] w-full">
                    <img 
                        src={spotifyPng} 
                        alt="Interest Two" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/75 pointer-events-none" />
                </div>

            </div>
        </section>
    );
}

export default Interest;
