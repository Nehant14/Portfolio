import React, { useState, useEffect } from 'react'

export default function Navbar({ theme, onToggleTheme }) {
    const isLight = theme === 'light'
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        // Watches home, projects, about, and footer sections
        const sectionIds = ['home', 'projects', 'about', 'footer']
        
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.id === 'about' || entry.target.id === 'footer') {
                        setActiveSection('about')
                    } else {
                        setActiveSection(entry.target.id)
                    }
                }
            })
        }

        // Expanded margins so sections trigger sooner when scrolling down
        const observerOptions = {
            root: null,
            rootMargin: '-15% 0px -45% 0px', 
            threshold: 0
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)

        sectionIds.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        // Force 'About' active when user hits the bottom of the page
        const handleScroll = () => {
            const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 60
            if (isAtBottom) {
                setActiveSection('about')
            }
        }
        
        window.addEventListener('scroll', handleScroll)

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 border-b w-full transition-colors duration-300 backdrop-blur-md ${
            isLight 
                ? 'border-black/10 bg-white/70 text-slate-950' 
                : 'border-white/10 bg-black/70 text-white'
        }`}>

            <div className="mx-auto flex max-w-full items-center justify-between px-8 py-7">
                
                <div className="font-navmono text-s uppercase tracking-wider">Nehant</div>

                {/* Direct Color Toggling (No Opacity Utilities) */}
                <nav className="flex flex-1 items-center justify-center gap-8 font-navmono text-s uppercase tracking-wider">
                    <a 
                        href="#home" 
                        className={`transition-colors duration-300 ${
                            activeSection === 'home' 
                                ? (isLight ? 'text-black font-bold' : 'text-white font-bold') 
                                : 'text-neutral-500'
                        }`}
                    >
                        Home
                    </a>
                    <a 
                        href="#projects" 
                        className={`transition-colors duration-300 ${
                            activeSection === 'projects' 
                                ? (isLight ? 'text-black font-bold' : 'text-white font-bold') 
                                : 'text-neutral-500'
                        }`}
                    >
                        Works
                    </a>
                    <a 
                        href="#footer" 
                        className={`transition-colors duration-300 ${
                            activeSection === 'about' 
                                ? (isLight ? 'text-black font-bold' : 'text-white font-bold') 
                                : 'text-neutral-500'
                        }`}
                    >
                        About
                    </a>
                </nav>

                <button
                    type="button"
                    onClick={onToggleTheme}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition hover:bg-neutral-200 shadow-sm"
                    aria-label="Toggle light and dark mode"
                >
                    <img 
                        src="/assets/night-mode.png" 
                        alt="Toggle Theme"
                        className={`w-4 h-4 object-contain transition-transform duration-500 ease-in-out ${
                            isLight ? 'rotate-180' : 'rotate-0'
                        }`}
                    />
                </button>
            </div>

        </header>
    )
}