// https://www.creative-tim.com/learning-lab/tailwind-starter-kit/profile

import React, { useState, useEffect } from 'react'

export default function Profile() {
    return (
        <main className="profile-page">
            <section className="relative block" style={{ height: 500 }}>
                <div className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")'
                    }}
                >
                    <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black" />
                </div>
                <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style={{ height: 70, transform: "translateZ(0px)" }} >
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x={0} y={0} >
                        <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100" />
                    </svg>
                </div>
            </section>
            <section className="relative py-16 bg-gray-300">
                <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                22
                                            </span>
                                            <span className="text-sm text-gray-500">Friends</span>
                                        </div>
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                10
                                            </span>
                                            <span className="text-sm text-gray-500">Photos</span>
                                        </div>
                                        <div className="lg:mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                89
                                            </span>
                                            <span className="text-sm text-gray-500">Comments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-12">
                                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                                    Jenna Stones
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500" />
                                    Los Angeles, California
                                    </div>
                                <div className="mb-2 text-gray-700 mt-10">
                                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500" />
                                    Solution Manager - Creative Tim Officer
                                    </div>
                                <div className="mb-2 text-gray-700">
                                    <i className="fas fa-university mr-2 text-lg text-gray-500" />
                                    University of Computer Science
                                </div>
                            </div>
                            <div className="mt-10 py-10 border-t border-gray-300 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <p className="mb-4 text-lg leading-relaxed text-gray-800">
                                            An artist of considerable range, Jenna the name taken by
                                            Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                                            and records all of his own music, giving it a warm, intimate
                                            feel with a solid groove structure. An artist of considerable
                                            range.
                                        </p>
                                    <a href="#pablo" className="font-normal text-pink-500">
                                        Show more
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}