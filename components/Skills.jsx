import React, { useEffect, useRef, useState } from 'react'
import Matter from 'matter-js'

const SKILLS = [
    { id: 1, text: 'Web Developer (Mern Stack)', w: 420, h: 76 },
    { id: 2, text: 'Python Backend', w: 310, h: 76 },
    { id: 3, text: 'AI', w: 160, h: 76 },
    { id: 4, text: 'NLP specilization', w: 320, h: 76 },
    { id: 5, text: 'C++', w: 150, h: 76, icon: '../assets/c-.png' },
    { id: 6, text: 'Python', w: 190, h: 76, icon: '/assets/python.png' },
    { id: 7, text: 'JavaScript', w: 230, h: 76, icon: '/assets/js.png' },
]

export default function InterestsPhysics() {
    const containerRef = useRef(null)
    
    const [positions, setPositions] = useState(() => 
        SKILLS.map((skill, i) => ({
            id: skill.id,
            x: 120 + Math.random() * 300,
            y: 60 + i * 50,
            angle: 0
        }))
    )

    useEffect(() => {
        if (!containerRef.current) return

        const width = containerRef.current.clientWidth
        const height = containerRef.current.clientHeight
        const bottomOffset = 160 
        const t = 100 

        const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events } = Matter

        const engine = Engine.create({
            gravity: { y: 0.8 }
        })
        const world = engine.world

        const bodyMap = SKILLS.map((skill) => {
            const initial = positions.find((p) => p.id === skill.id)
            
            const body = Bodies.rectangle(initial.x, initial.y, skill.w, skill.h, {
                chamfer: { radius: skill.h / 2 },
                restitution: 0.4, 
                friction: 0.05,
                frictionAir: 0.015
            })
            body.id = skill.id
            return body
        })

        const ground = Bodies.rectangle(width / 2, height - bottomOffset + t / 2, width, t, { isStatic: true })
        const leftWall = Bodies.rectangle(-t / 2, height / 2, t, height, { isStatic: true })
        const rightWall = Bodies.rectangle(width + t / 2, height / 2, t, height, { isStatic: true })
        const topWall = Bodies.rectangle(width / 2, -t / 2, width, t, { isStatic: true })
        const centralNameObstacle = Bodies.rectangle(width / 2, height - bottomOffset - 20, width * 0.7, 60, { isStatic: true })

        Composite.add(world, [...bodyMap, ground, leftWall, rightWall, topWall, centralNameObstacle])

        const mouse = Mouse.create(containerRef.current)

        // --- FIX: Stop Matter.js from hijacking touchpad/mouse wheel scrolling ---
        containerRef.current.removeEventListener("wheel", mouse.mousewheel)
        containerRef.current.removeEventListener("DOMMouseScroll", mouse.mousewheel)
        // ------------------------------------------------------------------------

        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.15,
                render: { visible: false }
            }
        })
        
        Composite.add(world, mouseConstraint)

        const runner = Runner.create()
        Runner.run(runner, engine)

        Events.on(engine, 'afterUpdate', () => {
            setPositions(
                bodyMap.map((body) => ({
                    id: body.id,
                    x: body.position.x,
                    y: body.position.y,
                    angle: body.angle
                }))
            )
        })

        const handleResize = () => {
            if (!containerRef.current) return
            const newWidth = containerRef.current.clientWidth
            const newHeight = containerRef.current.clientHeight
            
            Matter.Body.setPosition(ground, { x: newWidth / 2, y: newHeight - bottomOffset + t / 2 })
            Matter.Body.setPosition(rightWall, { x: newWidth + t / 2, y: newHeight / 2 })
            Matter.Body.setPosition(centralNameObstacle, { x: newWidth / 2, y: newHeight - bottomOffset - 20 })
        }
        window.addEventListener('resize', handleResize)

        return () => {
            Engine.clear(engine)
            Runner.stop(runner)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden select-none z-20 pointer-events-auto">
            {SKILLS.map((skill) => {
                const pos = positions.find((p) => p.id === skill.id)
                if (!pos) return null
                
                return (
                    <div
                        key={skill.id}
                        className="absolute flex items-center justify-center gap-3 bg-white text-black border-2 border-neutral-300 rounded-full px-8 text-base md:text-xl font-extrabold font-mono uppercase tracking-wide cursor-grab active:cursor-grabbing shadow-xl transform origin-center will-change-transform"
                        style={{
                            width: skill.w,
                            height: skill.h,
                            left: 0,
                            top: 0,
                            transform: `translate3d(${pos.x - skill.w / 2}px, ${pos.y - skill.h / 2}px, 0) rotate(${pos.angle}rad)`
                        }}
                    >
                        {skill.icon && (
                            <img 
                                src={skill.icon} 
                                alt="" 
                                className="w-6 h-6 md:w-7 md:h-7 object-contain pointer-events-none select-none"
                                onError={(e) => { e.target.style.display = 'none' }} 
                            />
                        )}
                        <span>{skill.text}</span>
                    </div>
                )
            })}
        </div>
    )
}