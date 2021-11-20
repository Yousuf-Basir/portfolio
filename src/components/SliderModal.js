import React, { useEffect } from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {XCircleIcon} from "@heroicons/react/solid"

export default function SliderModal({ open, setOpen, project }) {
    const cancelButtonRef = useRef(null)

    // if (!project) {
    //     return null
    // }
    useEffect(()=>{
        console.log(project)
    }, [])

    return (
        <Transition.Root show={open || false} as={Fragment}>
            <Dialog
                as="div"
                static
                className="fixed z-50 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                open={open || false}
                onClose={setOpen}
            >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >

                        <div className="space-y-8 inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full sm:p-6">
                            <div className="flex justify-end">
                                <XCircleIcon onClick={()=>setOpen(false)} className="h-12 w120 cursor-pointer" />
                            </div>
                            <Splide 
                             options={ {
                                rewind: true,
                              } }>
                                {
                                    project? project.imgSrc.map((src, i) => (
                                        <SplideSlide key={i}>
                                            <div className="w-full h-auto lg:h-screen flex items-center justify-center">
                                                <img alt="project screenshot" src={src} className="h-auto lg:h-screen" alt="project screenshot" />
                                            </div>
                                        </SplideSlide>
                                    )):null
                                }

                            </Splide>

                        </div>

                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
