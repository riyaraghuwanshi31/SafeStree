import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Starting from "./components/Starting";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";
import Defence from "./components/Defence";
import News from "./components/News";
import Profile from "./components/Profile";


const App = () => {
    const [showStarting, setShowStarting] = useState(true);

    const handleStartFinished = () => {
        setShowStarting(false);
    }

    return (
        <Router>
            {
                showStarting ? (
                    <Starting onFinished={handleStartFinished} />
                ) : (
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/welcome" element={<Welcome />} />
                        <Route path="/defence" element={<Defence />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                )
            }
        </Router>
    );
};

export default App;
