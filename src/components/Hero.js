import React from 'react'

export default function Hero() {
    return (

        <main id="hero" className="mx-auto max-w-7xl px-4 sm:px-6 mb-32">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left mt-0 lg:mt-14">
                    <h1>
                        <span className="block text-sm font-semibold tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                            Hi, I am
                        </span>
                        <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                            <span className="block text-gray-900">Joarder Yousuf Basir</span>
                            <span className="block text-3xl text-pink-600 mt-2">Full stack Javscript Developer</span>
                        </span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        Recent computer science graduate with a
                        passion for developing scalable web applications
                        and expertise in MERN stack. I’ve built several web
                        applications from the ground-up using React,
                        Node, Next js, MongoDB and MySQL.
                    </p>
                    <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <a
                                    download
                                    href="/JOARDER YOUSUF BASIR RESUME.pdf"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 md:py-4 md:text-lg md:px-10"
                                >
                                    Resume
                                </a>
                            </div>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                <a
                                    href="mailto:yousufbasir@outlook.com"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-pink-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                                >
                                    Email me
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                    <svg
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                        width={640}
                        height={784}
                        fill="none"
                        viewBox="0 0 640 784"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                                x={118}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
                        <rect x={118} width={404} height={784} fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
                    </svg>
                    <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                        <div

                            className="relative block w-full bg-transparent rounded-lg overflow-hidden outline-none ring-2 ring-pink-700"
                        >
                            <span className="sr-only">Watch our video to learn more</span>
                            <img
                                className="w-full"
                                src="/me.webp"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}
