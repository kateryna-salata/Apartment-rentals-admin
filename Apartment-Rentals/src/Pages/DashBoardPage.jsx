import AddItemForm from "../components/AddItemForm";
import List from "../components/List";

const DashBoardPage = ({ data, setData }) => {
  return (
    <div className="main-section">
      <List data={data} setData={setData} />
      <AddItemForm data={data} setData={setData} />
    </div>
  );
};

export default DashBoardPage;
