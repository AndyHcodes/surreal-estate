import React, { useState, useEffect } from "react";
import "../styles/Properties.css";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";

const initialState = {
  properties: [],
  alert: {
    message: "",
    isSuccess: false,
  },
};

function Properties() {
  const [properties, setProperties] = useState(initialState.properties);

  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/PropertyListing")
      .then((response) => {
        setProperties(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        setAlert({ message: "Error retrieving data", isSuccess: false });
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Properties Page</h2>
      {properties.map((property) => (
        <PropertyCard key={property._id} {...property} />
      ))}
      <Alert message={alert.message} success={alert.isSuccess} />
    </div>
  );
}

export default Properties;
