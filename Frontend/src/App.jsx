import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import FooterForAssistance from "./Components/FooterForAssistance";
import Records from "./Pages/Records";
import Insights from "./Pages/Insights";
import CarePlan from "./Pages/CarePlan";
import ContactPage from "./Pages/ContactPage";
import Profile from "./Pages/Profile";
import HomePage from "./Pages/HomePage";
import FloatingAssistant from "./Components/FloatingAssistant";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { AuthProvider } from "./context/AuthContext";
import { ChatProvider } from "./context/ChatContext";

const App = () => {
  return (
    <AuthProvider>
      <ChatProvider>
      <div className="flex flex-col h-full">
        <Navbar />

        <FloatingAssistant />
        <div className="flex-1 overflow-y-auto relative bg-gray-50/50">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Records" element={<Records />} />
            <Route path="/Insights" element={<Insights />} />
            <Route path="/careplan" element={<CarePlan />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>

        {/* <Footer/> */}
      </div>
      </ChatProvider>
    </AuthProvider>
  );
};

export default App;
