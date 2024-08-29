import React from 'react';
import Navbar from './Navbar';

const News = () => {
    return (
        <>

            <Navbar />



            <div className='newsCont'>

                <div className="newsHead">
                    <h2>Today's News</h2>
                </div>

                <div className="container my-5">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active text-center">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/KluU4C_Q4UY?si=8sPNGsTmfOISye8b"
                                    title="YouTube video player"

                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="carousel-item text-center">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/3QzcTyouago?si=4HBW9dvARkyUsllu"
                                    title="YouTube video player"

                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="carousel-item text-center">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/EOONU_-YpzE?si=STkbYyZDk5WAecZJ"
                                    title="YouTube video player"

                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>


        </>


    );
};

export default News;
