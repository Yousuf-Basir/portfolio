import React from 'react'

export default function Layout({children}) {
    return (
        <div className="relative bg-white overflow-hidden">
            {children}
        </div>
    )
}
