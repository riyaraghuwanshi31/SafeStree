import React from 'react';
import "../index.css";
import { useNavigate } from "react-router-dom";

import Navbar from './Navbar';

const Welcome = () => {
  const navigate = useNavigate();

  const handleDefence = (e) => {
    e.preventDefault();
    navigate("/defence");
  }

  const handleNews= (e) => {
    e.preventDefault();
    navigate("/news");
  }

  return (
    <div className="landing-page">

      {/* NAVBAR  */}
      <Navbar />

      {/* Rest of your content */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              <img className="logoMain mx-auto" src="./images/logo-1.png" alt="logo" />
            </h1>
          </div>


          {/* Instant SOS Button */}
          <div className="sosBtn flex justify-center ">
            <a
              href="instant_SOS.html"
              className=" items-center text-white rounded-full text-lg hover:bg-red-600 transition"
            >
              SOS
            </a>
          </div>


          {/*  Cards */}
          <div className="mainCard flex flex-wrap -m-4 justify-center">
            {/* Alert Mode Card */}
            <div className="cards p-4 md:w-1/3 sm:w-full">
              <div className="flex flex-col items-center text-center">
                <div className="modeLogo w-20 h-20 flex items-center justify-center rounded-full bg-red-500 text-white">
                  {/* Icon */}
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-10 h-10">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                {/* <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Alert Mode</h2> */}
                {/* <p className="leading-relaxed text-base">Set your device for alert mode instantly.</p> */}
                <a href="Alert Mode.html" className="cardBtn mt-3 text-red-500 inline-flex items-center">
                  Alert Mode
                </a>
              </div>
            </div>

            {/* Emergency Contacts Card */}
            <div className="cards p-4 md:w-1/3 sm:w-full">
              <div className="flex flex-col items-center text-center">
                <div className="modeLogo w-20 h-20 flex items-center justify-center rounded-full bg-green-500 text-white ">
                  {/* Icon */}
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-10 h-10">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                {/* <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Helpline</h2> */}
                {/* <p className="leading-relaxed text-base">Ask for national help in emergency.</p> */}
                <a href="Contact book.html" className="cardBtn mt-3 text-green-500 inline-flex items-center">
                  Helpline
                </a>
              </div>
            </div>



            {/* Alert Locations */}
            <div className="cards p-4 md:w-1/3 sm:w-full">
              <div className="flex flex-col items-center text-center">
                <div className="modeLogo w-20 h-20 flex items-center justify-center rounded-full bg-blue-500 text-white p-2">
                  {/* Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                  </svg>

                </div>
                {/* <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Alert Locations</h2> */}
                {/* <p className="leading-relaxed text-base">Places where it's not safe to go late night.</p> */}

                <a href="Campus Map.html" className="cardBtn mt-3 text-blue-500 inline-flex items-center">
                  Alert Locations
                </a>


              </div>
            </div>

            {/* Self Defence */}
            <div className="cards p-4 md:w-1/3 sm:w-full">
              <div className="flex flex-col items-center text-center">
                <div className="modeLogo w-20 h-20 flex items-center justify-center rounded-full bg-blue-500 text-white">
                  {/* Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                  </svg>

                </div>
                {/* <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Self Defence</h2> */}
                {/* <p className="leading-relaxed text-base">Places where it's not safe to go late night.</p> */}
                <a href="Campus Map.html" className="cardBtn mt-3 text-blue-500 inline-flex items-center" onClick={handleDefence}>
                  Self Defence
                </a>
              </div>
            </div>

            {/* News */}
            <div className="cards p-4 md:w-1/3 sm:w-full">
              <div className="flex flex-col items-center text-center">
                <div className="modeLogo w-20 h-20 flex items-center justify-center rounded-full bg-blue-500 text-white">
                  {/* Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                  </svg>

                </div>
                {/* <h2 className="text-gray-900 text-lg title-font font-medium mb-3">News</h2> */}
                {/* <p className="leading-relaxed text-base">Places where it's not safe to go late night.</p> */}
                <a href="Campus Map.html" className="cardBtn mt-3 text-blue-500 inline-flex items-center" onClick={handleNews}>
                  News
                </a>
              </div>
            </div>


          </div>
        </div>



      </section >

      

    </div >
  );
};

export default Welcome;