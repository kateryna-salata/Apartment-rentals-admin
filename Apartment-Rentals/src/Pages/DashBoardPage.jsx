import { useEffect } from "react";
import AddItemForm from "../components/AddItemForm";
import List from "../components/List";

const DashBoardPage = ({ data, setData }) => {
  useEffect(() => {
    // Add the class when the component mounts
    const appElement = document.querySelector(".App");
    if (appElement) {
      appElement.classList.add("app-dashboard");
    }

    // Remove the class when the component unmounts
    return () => {
      if (appElement) {
        appElement.classList.remove("app-dashboard");
      }
    };
  }, []); // Empty dependency array ensures it only runs on mount/unmount

  return (
    <div className="main-section">
      <List data={data} setData={setData} />
      <AddItemForm data={data} setData={setData} />
    </div>
  );
};

export default DashBoardPage;
