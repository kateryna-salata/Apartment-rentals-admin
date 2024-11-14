import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditForm = ({ data, setData, onUpdate }) => {
  const { cardId } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const foundItem = data.find((item) => item.id == cardId);

  // Provide fallback values for undefined or null properties
  const initialName = foundItem && foundItem.name ? foundItem.name : "";
  const initialLocation = foundItem && foundItem.host_location ? foundItem.host_location : "";
  const initialDescription = foundItem && foundItem.description ? foundItem.description : "";
  const initialImage = foundItem && foundItem.picture_url ? foundItem.picture_url : "";

  // Initialize state
  const [newName, setNewName] = useState(initialName);
  const [location, setLocation] = useState(initialLocation);
  const [description, setDescription] = useState(initialDescription);
  const [image, setImage] = useState(initialImage);

  function handleSubmit(e) {
    e.preventDefault();
    const updatedItem = {
      id: foundItem.id,
      name: newName,
      host_location: location,
      description: description,
      picture_url: image,
    };

    onUpdate(updatedItem);

    navigate(`/details/${foundItem.id}`);

    setDescription("");
    setImage("");
    setNewName("");
    setLocation("");
  }

  function handleChange(e) {
    // console.log("Event", e, "name:", e.target.name, "value:", e.target.value);
    // if (!e.target.value) return;

    if (e.target.name === "image") {
      setImage(e.target.value);
    } else if (e.target.name === "name") {
      setNewName(e.target.value);
    } else if (e.target.name === "location") {
      setLocation(e.target.value);
    } else if (e.target.name === "description") {
      setDescription(e.target.value);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label>
          Name:
          <input type="text" name="name" value={newName} onChange={handleChange} />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={location} onChange={handleChange} />
        </label>
        <label>
          Image:
          <input type="url" name="image" value={image} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea name="description" value={description} onChange={handleChange} />
        </label>
        {/* <Link to={"/"}> */}
        <button type="submit">Apply Changes</button>
        {/* </Link> */}
      </div>
    </form>
  );
};

export default EditForm;
