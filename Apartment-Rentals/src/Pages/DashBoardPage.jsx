import AddItemForm from "../components/AddItemForm";
import List from "../components/List";

const DashBoardPage = ({ listings, data, setData }) => {
  return (
    <div>
      <List listings={listings} data={data} setData={setData}/>
      <AddItemForm listings={listings} data={data} setData={setData}/>
    </div>
  );
};

export default DashBoardPage;
