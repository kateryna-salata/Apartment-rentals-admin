import AddItemForm from "../components/AddItemForm";
import List from "../components/List";

const DashBoardPage = ({ data, setData }) => {
  return (
    <div>
      <List data={data} setData={setData} />
      <AddItemForm data={data} setData={setData} />
    </div>
  );
};

export default DashBoardPage;
