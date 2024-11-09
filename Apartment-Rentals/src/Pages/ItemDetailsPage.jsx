import { useParams } from "react-router-dom";

const ItemDetailsPage = ({ listings }) => {
  const { cardId } = useParams();
  const foundItem = listings.find((item) => item.id == cardId);
  if (!foundItem) return <p>Item not found</p>;

  return (
    <div className="details-wrapper">
      <h1 className="header-details">{foundItem.name}</h1>
      <div className="descr-box">
        <img className="details-img" src={foundItem.picture_url}></img>
        <p>{foundItem.description}</p>
      </div>
      <p>{foundItem.host_location}</p>
      <p>Price: {foundItem.price}</p>
      <p>{foundItem.host_location}</p>
      <p>Bedrooms: {foundItem.bedrooms}</p>
      <p>Battrooms: {foundItem.bathrooms}</p>
      <p>Guests: {foundItem.accommodates}</p>
      <p>Beds: {foundItem.beds}</p>
      <div>
        <h3>Amenities:</h3>
        <ul>
          {foundItem.amenities.map((amenity, i) => (
            <li key={i}>{amenity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemDetailsPage;
