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
import Blog_Nav from "./components/Blog_Nav";
import Blog_Footer from "./components/Blog_Footer";
import MainPage from "./pages/exercise/MainPage";
import Premium from "./pages/premium/premium";

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
            <Route path="/blog" element={
            <>
            <Blog_Nav/>
            <BlogHomePage />
            <Blog_Footer/>
            </>
            } />
            <Route path="/exercise" element={<Mainroutes />} />
            {/* < Route path="/apps" element={<MainPage/>}/> */}
            <Route path="/premium" element={<Premium />} /> 
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
