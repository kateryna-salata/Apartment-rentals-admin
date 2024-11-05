import { Link } from "react-router-dom";
export const ListItem = ({ item, data, setData }) => {
  function handleDelete(id) {
    const filteredData = data.filter((i) => i.id !== id);
    setData(filteredData);
  }
  const isSuperHost = item.host_is_superhost;
  return (
    <div>
      <div className="card" key={item.id}>
        <img src={item.picture_url} alt="" />
        <div className="text">
          <Link to={`/details/${item.id}`}>
            <h2>
              {item.name} {isSuperHost ? <div className="super">⭐</div> : null}
            </h2>
          </Link>
          <p>{item.host_location}</p>

          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};
