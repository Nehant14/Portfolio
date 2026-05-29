import React from 'react'
import Project1Image from '../assets/Project1.png'
import Project2Image from '../assets/Project2.jpg'

const PROJECT_DATA = [
    {
        id: 1,
        href: 'https://github.com/Nehant14/Renderly',
        img: Project1Image,
        alt: 'Renderly project screenshot',
        title: 'Renderly',
        description: 'Generate stunning 2D animations for Free'
    },
    {
        id: 2,
        href: 'https://github.com/Nehant14/Lexgent',
        img: Project2Image,
        alt: 'Lexgent project screenshot',
        title: 'Lexgent',
        description: 'Automating legal drafting between parties.'
    }
]

export default function Projects() {
    return (
        <section id="projects" className="w-full px-8 md:px-16 pb-24">
            
            {/* Heading section: Increased size, gap, and shifted slightly left */}
            <div className="w-full mx-auto max-w-7xl mb-16">
                <h2 className="font-mono font-bold text-3xl md:text-5xl uppercase tracking-widest opacity-40 -ml-1 md:-ml-2">
                    PROJECTS
                </h2>
            </div>

            {/* max-w-7xl scales up the images; gap-12 and md:gap-20 increases layout separation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 w-full mx-auto max-w-7xl">
                {PROJECT_DATA.map((project) => (
                    <div key={project.id} className="flex flex-col gap-4">
                        {/* Image Wrapper */}
                        <a 
                            href={project.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group block overflow-hidden rounded-md bg-zinc-900 aspect-[4/3] w-full shadow-2xl cursor-pointer"
                        >
                            <img 
                                src={project.img} 
                                alt={project.alt} 
                                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                            />
                        </a>

                        {/* Text Content */}
                        <div className="px-1">
                            <h3 className="font-mono font-bold text-base md:text-xl uppercase tracking-wide">
                                {project.title}
                            </h3>
                            <p className="text-xs md:text-sm text-neutral-400 mt-2 font-sans leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}