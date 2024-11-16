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
import EditForm from "./Pages/EditForm";
import FiltersPage from "./Pages/FiltersPage";

function App() {
  const [data, setData] = useState(listings);
  const [originalData, setOriginalData] = useState(listings)

  function handleUpdateItem(updatedItem) {
    setData((data) =>
      data.map((item) => {
        if (item.id !== updatedItem.id) return item;
        else {
          item.name = updatedItem.name;
          item.picture_url = updatedItem.picture_url;
          item.host_location = updatedItem.host_location;
          item.description = updatedItem.description;
          return item;
        }
      })
    );
  }
  return (
    <>
      <div className="App">
        <Navbar image={logo} />
        <div className="centerSection">
          <Sidebar originalData={originalData} setOriginalData={setOriginalData} />
          <Routes>
            <Route path="/" element={<DashBoardPage data={data} setData={setData} />} />
            <Route
              path="/details/:cardId"
              element={<ItemDetailsPage data={data} setData={setData} />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route
              path="/details/update/:cardId"
              element={<EditForm data={data} setData={setData} onUpdate={handleUpdateItem} />}
            />
            <Route path="/filters" element={<FiltersPage originalData={originalData} setOriginalData={setOriginalData}/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
