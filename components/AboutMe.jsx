import React from 'react'

function AboutMe() {
    return (
        <section className="w-full px-2 md:px-4 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 w-full mx-auto">
                
                {/* Left Side: Big Text */}
                {/* Removed background/borders, changed to justify-start, and added tight top padding (pt-2) to pull text up */}
                <div className="aspect-[4/3] w-full flex flex-col justify-start pt-2 px-4 md:px-6 select-none pointer-events-none">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold opacity-90 text-neutral-800 dark:text-neutral-200 tracking-tight leading-tight">
                        Hi, I'm Nehant
                    </h2>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold opacity-90 text-neutral-800 dark:text-neutral-200 tracking-tight leading-tight">
                        I build for the web & think about how parameters talk to each other.
                    </h2>

                </div>

                {/* Right Side: Small Text */}
                {/* Aligns with the left side perfectly by using justify-start and matching pt-2 padding */}
                <div className="aspect-[4/3] w-full flex flex-col justify-start pt-2 px-4 md:px-6">
                    <div className="space-y-4 text-base md:text-lg opacity-90 font-thin leading-relaxed">
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p>
                            Full-stack developer who lives in the MERN stack - React on the front, Node on the back, MongoDB keeping things glued. On the Python side, I write clean FastAPI backends that don't make future-me cry.
                        </p>
                        <p>
                            When the features are shipped, I drift into the weird and exciting side of AI - working with LLMs, doing NLP stuff, and trying to figure out why these models say what they say. It's research-y, it's practical, and it keeps things interesting.
                        </p>
                        <p>
                            Off the screen? Football if the weather's right. Music if it's not. And if you catch me staring at a blank editor at midnight - that's not work, that's a hobby.
                        </p>
                    </div>
                    
                </div>

            </div>
        </section>
    )
}

export default AboutMe;