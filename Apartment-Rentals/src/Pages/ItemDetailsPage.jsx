import { useParams } from "react-router-dom";

const ItemDetailsPage = ({ listings }) => {
  const { cardId } = useParams();
  const foundItem = listings.find((item) => item.id == cardId);
  console.log(foundItem);

  return (
    <div>
      <img src={foundItem.picture_url}></img>
      <h1>{foundItem.name}</h1>
      <p>{foundItem.host_location}</p>
      <p>{foundItem.description}</p>
    </div>
  );
};

export default ItemDetailsPage;
