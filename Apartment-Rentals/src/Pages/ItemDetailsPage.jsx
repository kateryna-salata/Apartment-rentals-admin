import { useParams } from "react-router-dom";
import EditForm from "../components/EditForm";
import { useState } from "react";

const ItemDetailsPage = ({ listings }) => {
  const { cardId } = useParams();
  const foundItem = listings.find((item) => item.id == cardId);
  console.log(foundItem);

  const [editItem, setEditItem] = useState(foundItem);

  return (
    <div>
      <img src={foundItem.picture_url}></img>
      <h1>{foundItem.name}</h1>
      <p>{foundItem.host_location}</p>
      <p>{foundItem.description}</p>
      <EditForm editItem={editItem} setEditItem={setEditItem}/>
    </div>
  );
};

export default ItemDetailsPage;
