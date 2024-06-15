import "./App.css";
import Home from "./Components/home/Home";
import Header from "./Components/navbar/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Weather from "./Components/weather/Weather";
import About from "./Components/about/About";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
