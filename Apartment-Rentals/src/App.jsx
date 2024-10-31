import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import logo from "./assets/logo.png";
import List from "./components/List";

function App() {
  return (
    <>
      <div className="App">
        <Navbar image={logo} />
        <div className="centerSection">
          <Sidebar />
          <List />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
