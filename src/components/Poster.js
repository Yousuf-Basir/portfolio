import React from 'react'

export default function Poster({title, img1Src, img2Src}) {
    return (
        <div className="relative h-48 bg-gray-100 overflow-hidden">
            
            <div className="flex h-full space-x-4">
                <div className="w-1/2 h-full flex items-center">
                    <img className="object-contain shadow-lg" src={img1Src} />
                </div>
                <img className="w-1/2 object-cover shadow-lg" src={img2Src} />
            </div>

            
        </div>
    )
}

// https://nlp-project-b504d.web.app/