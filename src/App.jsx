import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import CentralName from '../components/Front.jsx'
import Skills from '../components/Skills.jsx' // Imported Component
import AboutMe from '../components/AboutMe.jsx' 
import Projects from '../components/Projects.jsx' 
import Footer from '../components/Footer.jsx' 
import Interest from '../components/Interest.jsx'

const App = () => {
    const [theme, setTheme] = useState('dark')
    const isLight = theme === 'light'

    useEffect(() => {
        document.body.classList.toggle('light', isLight)
    }, [isLight])

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }

    return (
        <div className={`${isLight ? 'bg-slate-50 text-slate-950' : 'bg-black text-white'} min-h-screen transition-colors duration-300`}>

            {/* Section 1: Hero view containing Navbar, Dynamic Physics Box, and Centered Bottom Name */}
            <div id="home" className="h-[100dvh] md:h-screen flex flex-col relative w-full">
                <Navbar theme={theme} onToggleTheme={toggleTheme} />
                
                <div className="flex-1 w-full relative overflow-hidden min-h-0">
                    <Skills />
                    
                    <CentralName />
                </div>
            </div>
            <Interest />

            <AboutMe/>

            <Projects />

            <Footer />

        </div>
    )
};

export default App;