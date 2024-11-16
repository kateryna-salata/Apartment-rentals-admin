import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FiltersPage = ({ originalData, setOriginalData }) => {
  const [superUser, setSuperUser] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [filteredData, setFilteredData] = useState(originalData);
  useEffect(() => {
    // Add the class when the component mounts
    const appElement = document.querySelector(".App");
    if (appElement) {
      appElement.classList.add("app-dashboard");
    }

    // Remove the class when the component unmounts
    return () => {
      if (appElement) {
        appElement.classList.remove("app-dashboard");
      }
    };
  }, []); // Empty dependency array ensures it only runs on mount/unmount

  useEffect(() => {
    // Filter the original data based on the selected filters
    const filtered = originalData.filter((item) => {
      const isSuperHost = item.host_is_superhost;
      const locationMatch =
        selectedLocation === "all" || item.host_location === selectedLocation;

      return (!superUser || isSuperHost) && locationMatch;
    });

    setFilteredData(filtered);
  }, [superUser, selectedLocation, originalData]);

  function handleChange(e) {
    if (e.target.name === "superuser") {
      setSuperUser(e.target.checked);
    }
  }

  function handleLocationChange(e) {
    setSelectedLocation(e.target.value);
  }

  const handleFav = (id) => {
    const updatedData = originalData.map((e) => (e.id === id ? { ...e, isFav: !e.isFav } : e));

    setOriginalData(updatedData)
    setFilteredData(updatedData.filter((item) => {
      const isSuperHost = item.host_is_superhost;
      const locationMatch = selectedLocation === "all" || item.host_location === selectedLocation;
      return (!superUser || isSuperHost) && locationMatch;
    }))
    // Update the state to reflect the change
  };

  return (
    <div className="main-section">
      <h2>Apply your Filters Here</h2>
      <div>
        <label>
          <input
            type="checkbox"
            name="superuser"
            checked={superUser}
            onChange={handleChange}
          />
          Super User
        </label>
        <label className="locationLabel">
          Select Location
          <select
            name="location"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="all">All</option>
            <option value="Madrid, Spain">Madrid, Spain</option>
            <option value="Neuchatel, Switzerland">
              Neuchatel, Switzerland
            </option>
            <option value="Peniscola, Spain">Peniscola, Spain</option>
            <option value="United States">United States</option>
            <option value="Miami Beach, FL">Miami Beach, FL</option>
            <option value="Córdoba, Spain">Córdoba, Spain</option>
            <option value="Barcelona, Spain">Barcelona, Spain</option>
          </select>
        </label>
      </div>
      <div className="list">
        {filteredData.map((item) => {
          const isSuperHost = item.host_is_superhost;
          return (
            <div className={`card ${item.isFav ? "isFav" : ""}`} key={item.id}>
              <img src={item.picture_url} alt="" />
              <div className="text">
                <Link to={`/details/${item.id}`}>
                  <h2>
                    {item.name}{" "}
                    {isSuperHost ? <div className="super">⭐</div> : null}
                  </h2>
                </Link>
                <p>{item.host_location}</p>
                <p>{item.price}</p>
                <button
                  className="btn delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
                <button className="fav-btn" onClick={() => handleFav(item.id)}>
                  {item.isFav ? "❤️" : "🤍"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FiltersPage;
