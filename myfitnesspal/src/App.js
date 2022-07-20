import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import MyHome from "./pages/MyHome";
import Food from "./pages/Food";
import Goals from "./pages/Goals"
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<MyHome />} >
          <Route path="/" element={<MyHome/>}/>
          <Route path="/goals" element={<Goals />}/>
        </Route>
        <Route path="/food" element={<Food />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
