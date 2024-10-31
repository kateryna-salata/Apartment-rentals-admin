export const ListItem = ({ item, data, setData }) => {
  function handleDelete(id) {
    const filteredData = data.filter((i) => i.id !== id);
    setData(filteredData);
  }
  return (
    <div>
      <div className="card" key={item.id}>
        <img src={item.picture_url} alt="" />
        <div className="text">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};
