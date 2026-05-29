import React from 'react'

function Interest() {
    return (
        <section className="w-full px-2 md:px-4 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 w-full mx-auto">
                
                {/* Link 1 Wrapper */}
                <a 
                    href="https://your-link-one.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-md bg-zinc-900 aspect-[4/3] w-full shadow-lg cursor-pointer"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200" 
                        alt="Interest One" 
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                </a>

                {/* Link 2 Wrapper */}
                <a 
                    href="https://your-link-two.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-md bg-zinc-900 aspect-[4/3] w-full shadow-lg cursor-pointer"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200" 
                        alt="Interest Two" 
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                </a>

            </div>
        </section>
    )
}

export default Interest;