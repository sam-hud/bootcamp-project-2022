import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RecipePage from "./components/RecipePage";
import About from "./components/About";
import NewRecipe from "./components/NewRecipe";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    // BrowswerRouter to control the website navigation
    <BrowserRouter>
      {/* Always render Navbar component */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* This path will render the relevant RecipePage based on the id parameter given */}
        <Route path="/recipe/:name" element={<RecipePage />} />
        <Route path="/newRecipe" element={<NewRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
