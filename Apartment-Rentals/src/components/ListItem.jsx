import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ListItem = ({ item, data, setData }) => {
  function handleDelete(id) {
    const filteredData = data.filter((i) => i.id !== id);
    setData(filteredData);
  }

  const isSuperHost = item.host_is_superhost;

  const handleFav = (id) => {
    const updatedData = data.map((e) => (e.id === id ? { ...e, isFav: !e.isFav } : e));
    setData(updatedData); // Update the state to reflect the change
  };

  return (
    <>
      <div className={`card ${item.isFav ? "isFav" : ""}`} key={item.id}>
        <img src={item.picture_url} alt="" />
        <div className="text">
          <Link to={`/details/${item.id}`}>
            <h2>
              {item.name} {isSuperHost ? <div className="super">⭐</div> : null}
            </h2>
          </Link>
          <p>{item.host_location}</p>
          <p>{item.price}</p>
          <button className="btn delete-btn" onClick={() => handleDelete(item.id)}>
            Delete
          </button>
          <button className="fav-btn" onClick={() => handleFav(item.id)}>
            {item.isFav ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </>
  );
};
