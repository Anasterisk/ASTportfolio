

export default function Projects (){

    return(
        <div class="grid h-screen place-items-center justify-center items-center py-10 px-15 outline-double ">
            <h1 className=" text-5xl font-bold outline ">Previous Projects</h1>
            <div className="flex flex-row carousel carousel-center  p-10 space-x-10 bg-neutral rounded-box w-full scroll-pl-6 snap-x items-stretch ">
    {/* project 1 */}
                <div className="snap-center carousel-item ">
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://drive.google.com/uc?export=view&id=1IguVg2J4qWOcwRLVg5zTP5L5lOxzvn1V" alt="card" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Sudoku</h2>

                            <p class='flex-1'>My very first project built with vanilla javacript and html</p>
                            <div className="card-actions justify-end">

                                <button className="btn btn-accent">
                                <a href="https://github.com/Anasterisk/Sudoku-project" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                    </a>
                                </button>

                                <button className="btn btn-secondary">
                                <a href="http://www.alvint-mtg-api.netlify.app" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-12.879 14l-4.707-4.707-1.414 1.414 3.293 3.293-3.293 3.293 1.414 1.414 4.707-4.707zm7.879 3h-7v2h7v-2z"/></svg>
                                    </a>
                                </button>
                        </div>
                        </div>
                    </div>
                </div> 
    {/* project 2 */}
                <div className="snap-center carousel-item ">
                    <div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://drive.google.com/uc?export=view&id=14G6hx6Enb6MH877BVtp6vPBE1MnNqbLO" alt="card" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">MTG Search Engine</h2>

                            <p class='flex-1'> An API interface built with React</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-accent">

                                <a href="https://github.com/Anasterisk/MTG-Card-Compiler" target="_blank">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                    </a>
                                </button>
                                <button className="btn btn-secondary">
                                <a href="https://www.alvint-sudoku.netlify.app" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-12.879 14l-4.707-4.707-1.414 1.414 3.293 3.293-3.293 3.293 1.414 1.414 4.707-4.707zm7.879 3h-7v2h7v-2z"/></svg>
                                    </a>
                                </button>
                        </div>
                        </div>
                    </div>

                    </div>
                </div> 
     {/* project 3 */}
                <div className="snap-center carousel-item ">
                    <div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://drive.google.com/uc?export=view&id=10LddjHVnA2JqYvoOcIu4lm-UTY52tufw" alt="card" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">MyPlates</h2>

                            <p class='flex-1'>A group project complete by me and two other classmates. A recipe sharing platform built with Sequelize, PostgreSQL, and React</p>
                            <p class='font-bold text-warning'> Currently having issues with connecting to backend </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-accent">
                                <a href="https://github.com/Anasterisk/MyPlates" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                    </a>
                                </button>
                                <button className="btn btn-secondary hover:bg-yellow-300">
                                <a href="https://alvint-myplates.netlify.app" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-12.879 14l-4.707-4.707-1.414 1.414 3.293 3.293-3.293 3.293 1.414 1.414 4.707-4.707zm7.879 3h-7v2h7v-2z"/></svg>
                                    </a>
                                </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div> 
     {/* project 4 */}
                <div className="snap-center carousel-item ">
                    <div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://drive.google.com/uc?export=view&id=1y-5sCEH47KCkfD1-GOcc2wsR6EZP-lxH" alt="card" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">MTG Deck Builder</h2>

                            <p class="flex-1">A follow up project to my MTG Search Engine. Built with Sequelize, PostgreSQL, React, and Tailwindcss</p>
                            <p class='font-bold text-warning'> Currently having issues with connecting to backend</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-accent">
                                <a href="https://github.com/Anasterisk/MTG-Digital-Index" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                    </a>
                                </button>

                                <button className="btn btn-secondary  hover:bg-yellow-300">
                                <a href="https://alvint-mtg-deck-builder.netlify.app/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-12.879 14l-4.707-4.707-1.414 1.414 3.293 3.293-3.293 3.293 1.414 1.414 4.707-4.707zm7.879 3h-7v2h7v-2z"/></svg>
                                    </a>
                                </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}