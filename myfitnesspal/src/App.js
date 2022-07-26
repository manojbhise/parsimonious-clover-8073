import logo from "./logo.svg";
import "./App.css";
import LandingHeader from "./pages/landing_page/LandingHeader";
import { useState } from "react";
import Header from "./components/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import MyHome from "./pages/MyHome";
import Food from "./pages/Food";
import Goals from "./pages/Goals";
import Footer from "./components/Footer";
import BlogHomePage from "./pages/BlogHomePage";
import Mainroutes from "./pages/exercise/Mainroutes";
import Blog_Nav from "./components/Blog_Nav";
import Blog_Footer from "./components/Blog_Footer";




    
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Afterheader } from "./components/Afterheader";
import MainPage from "./pages/exercise/MainPage";
import Premium from "./pages/premium/premium";
import Recipies from "./pages/landing_page/Recipies";
import Recipes_Page from "./pages/Recipes_Page";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const useravailable = localStorage.getItem("fitnesspal");
  // {useravailable ? setIsLoggedIn(true) : setIsLoggedIn(false)}
  const handlelogout = () => {
    navigate("/login");
  };
  return (
    <div className="App">
      {useravailable && <Afterheader />}
      {useravailable && <Header />}

      <Routes>
        <Route
          exact
          path="/"
          element={useravailable ? <MyHome /> : <LandingHeader />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/afterheader" element={<Afterheader />} />

        <Route path="/food" element={<Food />} />
        <Route path="/blog" element={<BlogHomePage />} />
        <Route path="/recipes" element={<Recipes_Page />} />
        <Route path="/exercise" element={<Mainroutes />} />
          < Route path="/apps" element={<MainPage/>}/>
            <Route path="/premium" element={<Premium />} /> 
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
