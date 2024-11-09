import "./App.css";
import listings from "./assets/listings.json";
import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import logo from "./assets/logo.png";
import { Routes, Route } from "react-router-dom";
import DashBoardPage from "./Pages/DashBoardPage";
import ItemDetailsPage from "./Pages/ItemDetailsPage";
import AboutPage from "./Pages/AboutPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  const [data, setData] = useState(listings);
  return (
    <>
      <div className="App">
        <Navbar image={logo} />
        <div className="centerSection">
          <Sidebar />
          <Routes>
            <Route path="/" element={<DashBoardPage listings={listings} data={data} setData={setData} />} />
            <Route
              path="/details/:cardId"
              element={<ItemDetailsPage listings={listings} />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
