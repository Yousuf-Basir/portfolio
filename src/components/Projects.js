import React, { useState } from 'react'
import Poster from './Poster'
import SliderModal from './SliderModal';

const posts = [
    {
        title: 'E-book library and sharing web app',
        href: '#',
        category: { name: 'React, Express.js, MySql, Oracle Cloud', href: '#' },
        description:
            'Built a full-stack web app that allow users to read, organize and share e-books (pdf, epub, mobi, kindle files) from any device.',
        imgSrc: ["/project-screenshots/inknest2.png", "/project-screenshots/inknest1.png"],
        liveLink: "http://146.56.54.187:8082/"
    },
    {
        title: 'Torrent video streaming application',
        href: '#',
        category: { name: 'Next.js, TypeScript, Heroku', href: '#' },
        description:
            'Built a web app where user can search movies then save the movie on cloud storage and watch from any device. Implemented using Next.js for node.js based server and SSR with React.js.',
        imgSrc: ["/project-screenshots/protorrent3.png", "/project-screenshots/protorrent2.png"],
        liveLink: "https://protorrent-app.herokuapp.com/"
    },
    {
        title: 'Retrainable Bangla voice assistant',
        href: '#',
        category: { name: 'React, Node.js, Natural Language Proccessing, Heroku', href: '#' },
        description:
            'Developed a voice assistant using NLP that can be trained simply by giving voice commands in Bangla to answer any custom question. Application will retrain itself each time user teach it what to say for a specific question.',
        imgSrc: ["/project-screenshots/voiceassist1.png", "/project-screenshots/voiceassist2.png"]
    },
    {
        title: 'Inventory management system',
        href: '#',
        category: { name: 'React, Firebase', href: '#' },
        description:
            'Inventory management system with basic functionalities.',
        imgSrc: ["/project-screenshots/inventory1.png", "/project-screenshots/inventory2.png"],
    },
    {
        title: 'Corona Jiggasha',
        href: '#',
        category: { name: 'React, Node.js, Natural Language Proccessing', href: '#' },
        description:
            "করোনা জিজ্ঞাসা is a voice assistant app that can understand your bangla spoken voice and talks to you in bangla to provide information about the Corona virus and it's pandemic",
        imgSrc: ["/project-screenshots/coronajiggasha1.jpg", "/project-screenshots/coronajiggasha2.jpg"],
        liveLink: "https://nlp-project-b504d.web.app/"
    },
    {
        title: 'Object detection web app',
        href: '#',
        category: { name: 'React, Node.js, Tensorflow.js', href: '#' },
        description:
            "Web application that can capture photo and detect object with prediction confidence using tensorflow image classification training model.",
        imgSrc: ["/project-screenshots/tensor3.jpg", "/project-screenshots/tensor4.jpg"],
    },


]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState();
    const [open, setOpen] = useState(false)

    return (
        <div id="projects" className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <SliderModal open={open} setOpen={setOpen} project={selectedProject} />

            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-pink-600 sm:text-4xl">My Projects</h2>
                    {/* <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            
          </p> */}
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {posts.map((post) => (
                        <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                {/* <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" /> */}
                                <Poster img1Src={post.imgSrc[0]} img2Src={post.imgSrc[1]} title={post.title} />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-pink-600">
                                        <p>{post.category.name}</p>
                                    </div>
                                    <a href={post.href} className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{post.description}</p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center space-x-4">
                                    {
                                        post.liveLink
                                            ? <a href={post.liveLink} target="_blank">
                                                <button
                                                type="button"
                                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                            >Live demo</button>
                                            </a>
                                            : null
                                    }
                                    <button
                                        onClick={()=>{
                                            setSelectedProject(post); setOpen(true)
                                        }}
                                        type="button"
                                        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                    >
                                        Preview
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
