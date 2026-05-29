import React from 'react'

const PROJECT_DATA = [
    {
        id: 1,
        href: 'https://your-link-one.com',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200',
        alt: 'Project One',
        title: 'Project Title One',
        description: 'A brief description of what this project does and the tech stack used.'
    },
    {
        id: 2,
        href: 'https://your-link-two.com',
        img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200',
        alt: 'Project Two',
        title: 'Project Title Two',
        description: 'A brief description of what this project does and the tech stack used.'
    },
    {
        id: 3,
        href: 'https://your-link-three.com',
        img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
        alt: 'Project Three',
        title: 'Project Title Three',
        description: 'A brief description of what this project does and the tech stack used.'
    },
    {
        id: 4,
        href: 'https://your-link-four.com',
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
        alt: 'Project Four',
        title: 'Project Title Four',
        description: 'A brief description of what this project does and the tech stack used.'
    }
]

export default function Projects() {
    return (
        <section id="projects" className="w-full px-8 md:px-16 pb-24">
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