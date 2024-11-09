import { useState } from "react";

const AddItemForm = ({ listings, data, setData }) => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    // Add the new listing to the state
    e.preventDefault();
    const newListing = {
      id: data.length + 1,
      name: title,
      description: description,
      image_url: imageUrl,
      host_location: location,
    };

    setData((prev) => [newListing, ...prev]);

    setDescription("");
    setTitle("");
    setImageUrl("");
    setLocation("");
  }

  function handleChange(e) {
    if (e.target.name === "description") {
      setDescription(e.target.value);
    } else if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "imageUrl") {
      setImageUrl(e.target.value);
    } else if (e.target.name === "location") {
      setLocation(e.target.value);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Image:
          <input
            type="url"
            name="imageUrl"
            value={imageUrl}
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
      <button>Add List Item</button>
    </form>
  );
};

export default AddItemForm;
