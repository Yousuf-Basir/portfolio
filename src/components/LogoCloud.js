import React from 'react'

export default function LogoCloud() {
    return (
        <div id="logocloud" className="bg-opacity-25 z-10">
            <div className="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div>
                        <h2 className="max-w-md mx-auto text-3xl font-extrabold text-gray-900 text-center lg:max-w-xl lg:text-left">
                            Social profiles
                        </h2>
                        <p className="max-w-md mx-auto text-lg font-extrabold text-gray-600 text-center lg:max-w-xl lg:text-left">
                            Explore my activities, contrubutions and blog
                        </p>
                    </div>
                    <div className="flow-root self-center mt-8 lg:mt-0 mr-0">
                        <div className="ml-0 flex flex-wrap justify-around">
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/joarder-yousuf-basir-a79908200/"
                                type="button"
                                className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                            >
                                <img
                                    className="h-6 md:h-8 lg:h-12"
                                    src="https://cdn.cdnlogo.com/logos/l/74/linkedin.svg"
                                    alt="Workcation"
                                />
                            </a>
                            <a
                                target="_blank"
                                href="https://github.com/Yousuf-Basir"
                                type="button"
                                className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                            >
                                <img className="h-6 md:h-8 lg:h-12" src="https://cdn.cdnlogo.com/logos/g/31/github.svg" alt="Tuple" />
                            </a>
                            <a
                                target="_blank"
                                href="https://dev.to/yousufbasir"
                                type="button"
                                className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                            >
                                <img className="h-6 md:h-8 lg:h-12" src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Level" />
                            </a>
                            {/* <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                                <img className="h-12" src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Level" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
