import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Properties.css";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";

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

  const { search } = useLocation();
  useEffect(() => {
    console.log(search);
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing${search}`)
      .then(({ data }) => {
        setProperties(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, [search]);

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
      <SideBar />
      {properties.map((property) => (
        <PropertyCard key={property._id} {...property} />
      ))}
      <Alert message={alert.message} success={alert.isSuccess} />
    </div>
  );
}

export default Properties;
