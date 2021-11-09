import React from 'react'

const features = [
    {
        name: 'Advanced Javascript',
        icon: [
            "https://cdn.cdnlogo.com/logos/j/44/javascript.svg",
            "https://cdn.cdnlogo.com/logos/t/96/typescript.svg"
        ],
        desc: "Writing reusable and performance efficient JavaScript and TypeScript Code"
    },
    {
        name: 'React.js',
        icon: [
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            "https://cdn.cdnlogo.com/logos/r/37/redux.svg"

        ],
        desc: "Implementing React project with context, JSX, TSX, Redux, Custom hooks. Developing react component from Figma, PSD, SVG UI designs."
    },
    {
        name: 'Advanced CSS',
        icon: ["https://cdn.cdnlogo.com/logos/t/58/tailwindcss.svg", "https://cdn.cdnlogo.com/logos/s/90/sass.svg"],
        desc: "Optimized web applications using SASS, React Styled components, Tailwind CSS",
        padding: "p-4"
    },
    {
        name: 'Node.js',
        icon: "https://cdn.cdnlogo.com/logos/n/88/nodejs.svg",
        desc: "MVC, REST API, Express.js, Socket.io, Nest.js Next.js - REST API, SSR",
        padding: "px-4"
    },
    {
        name: 'MongoDB, MySQL',
        icon: ["https://cdn.cdnlogo.com/logos/m/25/mongodb.svg", "https://cdn.cdnlogo.com/logos/m/10/mysql.svg"],
        desc: "Developing project with MongoDb and MySql, Creating REST endpoint for database.",
        padding: "px-2"
    },
    {
        name: 'WebSocket',
        icon: ["https://cdn.cdnlogo.com/logos/w/76/websocket.svg", "https://cdn.cdnlogo.com/logos/s/74/socket-io.svg"],
        desc: "Implementing websocket with node.js server and socket.io library.",
        padding: "px-2"
    },
    {
        name: 'Oracle cloud infrastructure',
        icon: "oracle-logo.png",
        desc: "Experienced in deploying full stack web application in Linux environment to Oracle Cloud Infrastructure.",
        padding: "px-4"
    },
    {
        name: 'Familiar with',
        icon: [
            "https://cdn.cdnlogo.com/logos/d/41/docker.svg",
            "https://cdn.cdnlogo.com/logos/a/59/aws-s3.svg", 
            "https://cdn.cdnlogo.com/logos/a/22/auth0.svg"
        ],
        desc: "Good understanding of Docker, AWS S3 bucket and S3 REST API, Auth0, Auth0 custom hooks",
        padding: "px-2"
    },
    {
        name: 'Git and GitHub',
        icon: "https://cdn.cdnlogo.com/logos/g/31/github.svg",
        desc: "Basic version controlling and git commands, GitHub actions",
        padding: "px-8"
    },
    
]

export default function Skills() {
    return (
        <div id="skills" className="relative bg-white pt-16 sm:pt-24 lg:pt-32">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-lg font-semibold tracking-wider text-pink-600 uppercase">My Skills</h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    Never stoped for learning new skills
                </p>
                <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                    Multi-tasker with specialties and expertise in fullstack web development field.
                </p>
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="pt-2">
                                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                    <div className="mt-4">
                                        <div>
                                            <span className="inline-flex items-center justify-center">
                                                {
                                                    feature.icon instanceof Array?
                                                    feature.icon.map((ico, i) => (
                                                        <img key={i} src={ico} className={`h-24 w-24 text-white object-contain ml-2 rounded-md shadow-lg overflow-hidden ${feature.padding?feature.padding:null}`} aria-hidden="true" />
                                                    )):<img src={feature.icon} className={`h-28 w-48 text-white object-contain rounded-md shadow-lg overflow-hidden ${feature.padding?feature.padding:null}`} aria-hidden="true" />
                                                }
                                            </span>
                                        </div>
                                        <h3 className="mt-5 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
