import React, { useState, useEffect } from 'react'

const SOCIAL_LINKS = [
    { id: 1, label: 'GitHub', href: 'https://github.com/Nehant14', icon: '/assets/github.png' },
    { id: 2, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nehant-fopse-147082324', icon: '/assets/linkedin.png' },
    { id: 3, label: 'Instagram', href: 'https://www.instagram.com/nehant_sf', icon: '/assets/instagram.png' },
    { id: 4, label: 'Email', href: 'mailto:nehantfopse@gmail.com', icon: '/assets/gmail.png' },
]

export default function Footer() {
    const [time, setTime] = useState('')

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
        }
        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <footer id="footer" className="w-full px-4 md:px-8 py-12 border-t border-neutral-200 dark:border-neutral-900 mt-16">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                
                {/* TOTAL LEFT */}
                <div className="text-left font-mono text-sm md:text-base text-neutral-500 order-2 md:order-1 md:-mt-4">
                    <div className="text-xs uppercase text-neutral-400 font-normal mb-1">What drives me</div>
                    <p>Make it work. Make it right. Make it fast.</p>
                </div>

                {/* CENTER */}
                <div className="flex flex-col items-center gap-5 order-3 md:order-2">
                    {SOCIAL_LINKS.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 w-40 font-mono text-sm md:text-base font-bold uppercase tracking-wider text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                        >
                            {link.icon && (
                                <img 
                                    src={link.icon} 
                                    alt="" 
                                    className="w-5 h-5 md:w-6 md:h-6 object-contain invert dark:invert-0 pointer-events-none select-none shrink-0"
                                    onError={(e) => { e.target.style.display = 'none' }} 
                                />
                            )}
                            <span>{link.label}</span>
                        </a>
                    ))}
                </div>

                {/* TOTAL RIGHT */}
                <div className="text-right font-mono text-sm md:text-base font-bold tracking-wider text-neutral-500 order-1 md:order-3 md:-mt-4">
                    <div className="text-xs uppercase text-neutral-400 font-normal mb-1">Local Time</div>
                    <span className="text-black dark:text-white">{time}</span>
                </div>

            </div>
        </footer>
    )
}