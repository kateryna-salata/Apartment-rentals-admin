import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const EditForm = ({ data, setData, onUpdate }) => {
  const { cardId } = useParams();
  const foundItem = data.find((item) => item.id == cardId);
  const [newName, setNewName] = useState(foundItem.name);
  const [location, setLocation] = useState(foundItem.host_location);
  const [description, setDescription] = useState(foundItem.description);
  const [image, setImage] = useState(foundItem.picture_url);

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

    setDescription("");
    setImage("");
    setNewName("");
    setLocation("");
  }

  function handleChange(e) {
    if (!e.target.value) return;

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
          Image:
          <input
            type="url"
            name="image"
            value={image}
            onChange={handleChange}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newName}
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>
        <Link to={"/"}>
          <button>Apply Changes</button>
        </Link>
      </div>
    </form>
  );
};

export default EditForm;
