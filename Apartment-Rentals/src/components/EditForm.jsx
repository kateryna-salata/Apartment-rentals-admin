import { useState } from "react";

const EditForm = ({ editItem, setEditItem }) => {
  const [newName, setNewName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    const updatedItem = {
        name: newName,
        location: location,
        description: description,
        image: image
    }

    // setEditItem((prev) => [...prev, updatedItem])

    setDescription("")
    setImage("")
    setNewName("");
    setLocation("");
  }

  function handleChange(e) {
    if(!e.target.value) return

    if(e.target.name === "image") {
        setImage(e.target.value)
    } else if (e.target.name === "name") {
        setNewName(e.target.value)
    } else if(e.target.name === "location") {
        setLocation(e.target.value)
    }else if(e.target.name === "description") {
        setDescription(e.target.value)
    }

  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Image:
        <input type="url" name="image" value={image} onChange={handleChange}/>
      </label>
      <label>Name:
        <input type="text" name="name" value={newName} onChange={handleChange}/>
      </label>
      <label>Location:
        <input type="text" name="location" value={location} onChange={handleChange}/>
      </label>
      <label>Description:
        <textarea name="description" value={description} onChange={handleChange}/>
      </label>
      <button>Apply Changes</button>
    </form>
  );
};

export default EditForm;
