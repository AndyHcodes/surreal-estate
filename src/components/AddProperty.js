import axios from "axios";
import React, { useState } from "react";
import Alert from "./Alert";
import "../styles/AddProperty.css";

function AddProperty() {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const [alert, setAlert] = useState(initialState.alert);

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleAddProperty = async (event) => {
    event.preventDefault();

    setAlert({ message: "", isSuccess: false });

    await axios
      .post("http://localhost:3000/api/v1/PropertyListing", fields)
      .then(() =>
        setAlert({
          message: "Property Added",
          isSuccess: true,
        })
      )
      .catch(() =>
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        })
      );
  };

  return (
    <div className="add-property">
      Add Property
      <form
        className="add-property__form"
        onSubmit={handleAddProperty}
        action="submit"
      >
        <label htmlFor="title">
          Text
          <input
            id="title"
            name="title"
            value={fields.title}
            type="text"
            placeholder="Please enter property description"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          City
          <select
            id="city"
            required
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option selected="selected" value="Manchester">
              Manchester
            </option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="type">
          Type of Property
          <select
            id="type"
            required
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option selected="selected" value="Flat">
              Flat
            </option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          Bedrooms
          <input
            id="bedrooms"
            name="bedrooms"
            required
            value={fields.bedrooms}
            type="text"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="bathrooms">
          Bathrooms
          <input
            id="bathrooms"
            required
            name="bathrooms"
            value={fields.bathrooms}
            type="text"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="Price">
          Price
          <input
            id="price"
            required
            name="price"
            value={fields.price}
            type="text"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            required
            name="email"
            value={fields.email}
            type="email"
            placeholder="Please enter email address"
            onChange={handleFieldChange}
          />
        </label>
        <button className="add-prop-button" type="submit">
          Add
        </button>
        <Alert message={alert.message} success={alert.isSuccess} />
      </form>
    </div>
  );
}

export default AddProperty;
