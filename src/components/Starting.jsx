import React, { useEffect } from 'react';
import "./StartingPage.css";

const Starting = ({ onFinished }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onFinished();
        }, 3000); // 3 seconds

        return () => clearTimeout(timer);
    }, [onFinished]);

    return (
        <div className="welcome-page">
            <img src="./images/logo-1.png" alt="logo" className="startLogo" />
            <h1>Welcome</h1>
            <div className="loading-circle"></div>
        </div>
    )
}

export default Starting;