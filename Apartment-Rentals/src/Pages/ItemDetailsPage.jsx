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
            <p>Price: {foundItem.price}</p>
            <p>{foundItem.host_location}</p>
            <p>Bedrooms: {foundItem.bedrooms}</p>
            <p>Battrooms: {foundItem.bathrooms}</p>
            <p>Guests: {foundItem.accommodates}</p>
            <p>Beds: {foundItem.beds}</p>
            <Link to={`/details/update/${foundItem.id}`}>
              <button className="btn">Edit Details</button>
            </Link>
          </div>
        </div>
        <p>{foundItem.description}</p>
        <div>
          <h3 className="header-details">Amenities:</h3>
          <ul className="amenities">
            {foundItem.amenities.map((amenity, i) => (
              <li key={i}>{amenity}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ItemDetailsPage;
