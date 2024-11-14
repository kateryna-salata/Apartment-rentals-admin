import { Link, useParams } from "react-router-dom";
import "../App.css";
import EditForm from "./EditForm";
import { useState } from "react";

const ItemDetailsPage = ({ listings, data, setData }) => {
  const { cardId } = useParams();
  const foundItem = data.find((item) => item.id == cardId);
  if (!foundItem) return <p>Item not found</p>;

  return (
    <>
      <div className="details-wrapper">
        <h1 className="header-details">
          {foundItem.name}
          {""}
        </h1>
        <div className="descr-box">
          <img className="details-img" src={foundItem.picture_url}></img>
          <div className="description">
            {foundItem.price && <p>Price: {foundItem.price}</p>}
            {foundItem.host_location && <p>{foundItem.host_location}</p>}
            {foundItem.bedrooms && <p>Bedrooms: {foundItem.bedrooms}</p>}
            {foundItem.bathrooms && <p>Bathrooms: {foundItem.bathrooms}</p>}
            {foundItem.accommodates && <p>Guests: {foundItem.accommodates}</p>}
            {foundItem.beds && <p>Beds: {foundItem.beds}</p>}
            <Link to={`/details/update/${foundItem.id}`}>
              <button className="btn">Edit Details</button>
            </Link>
          </div>
        </div>
        <p>{foundItem.description}</p>
        <div>
          {foundItem.amenities && (
            <>
              <h3 className="header-details">Amenities:</h3>
              <ul className="amenities">
                {foundItem.amenities.map((amenity, i) => (
                  <li key={i}>{amenity}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetailsPage;
