import React, { useState } from "react";
import Royal from "rodal";
import "rodal/lib/rodal.css";

const AddCardModal = ({ visible, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <Royal visible={visible} onClose={onClose}>
      <h3 className="mb-5">MODAL</h3>
      <form>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Card Title"
          className="form-control mb-4"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Card Details"
          className="form-control mb-4"
        />
        <button type="submit" className="btn btn-outline-dark">
          Save
        </button>
      </form>
    </Royal>
  );
};

export default AddCardModal;
