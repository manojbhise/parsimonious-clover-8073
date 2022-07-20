import logo from "./logo.svg";
import "./App.css";
import LandingHeader from "./pages/landing_page/LandingHeader";
import { useState } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import MyHome from "./pages/MyHome";
import Food from "./pages/Food";
import Goals from "./pages/Goals";
import Footer from "./components/Footer";
import BlogHomePage from "./pages/BlogHomePage";
import Mainroutes from './pages/exercise/Mainroutes';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <Header />

          <Routes>
            <Route path="/" element={<MyHome />}>
              <Route path="/" element={<MyHome />} />
              <Route path="/goals" element={<Goals />} />
            </Route>
            <Route path="/food" element={<Food />} />
            <Route path="/blog" element={<BlogHomePage />} />
            <Route path="/exercise" element={<Mainroutes />} />
          </Routes>

          <Footer />
        </div>
      ) : (
        <LandingHeader />
      )}
    </div>
  );
}

export default App;
