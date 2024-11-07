import List from "../components/List";

const DashBoardPage = ({ listings }) => {
  return (
    <div>
      <List listings={listings} />
    </div>
  );
};

export default DashBoardPage;
