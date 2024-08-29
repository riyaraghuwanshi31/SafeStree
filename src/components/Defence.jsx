import React from 'react'
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';

const Defence = () => {

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    }

    return (

        <>

          <Navbar/>
            <div className="defence">
                {/* Marquee Section */}
                <div className="marquee-container">
                    <marquee className="safety-marquee">
                        Stay Safe, Stay Aware!  |  Know Your Rights | Report Suspicious Activity | Help is Just a Call Away!
                    </marquee>
                </div>

                {/* Unique Heading */}
                <h2 className="defence-heading">Essential Defence Information</h2>

                {/* Defence Section */}
                <div className="defence-sections">
                    <div className="defence-section def1" onClick={() => handleNavigate('/welcome')}>
                        <div>
                            <img src="/images/selfDefIcon.webp" alt="Self Defence" />
                        </div>

                        <div className='contDef'>
                            <h3>Self Defence Videos</h3>
                            <p>Explore a collection of videos demonstrating effective self-defence techniques for women.</p>
                            <button>Check out</button>
                        </div>

                    </div>

                    <div className="defence-section def2" onClick={() => handleNavigate('/welcome')}>

                        <div>
                            <img src="/images/defkit.png" alt="Emergency Kit" />
                        </div>

                        <div className='contDef'>
                            <h3>Emergency Defence Kit</h3>
                            <p>A list of essential items every woman should carry for personal safety.</p>
                            <button>Check out</button>
                        </div>


                    </div>

                    <div className="defence-section def1" onClick={() => handleNavigate('/welcome')}>

                        <div>
                            <img src="/images/legaldoc.png" alt="Legal Actions" />
                        </div>

                        <div className='contDef'>
                            <h3>Legally Permissible Actions</h3>
                            <p>Understand your rights and actions that are legally permissible in self-defence situations.</p>
                            <button>Check out</button>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Defence
