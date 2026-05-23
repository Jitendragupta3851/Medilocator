import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ShopOwnerHeader from "./ShopOwnerHeader";

const AddLocation = () => {
   const URL="http://localhost:3000/shopOwner/updateLocation"

  const ownerEmail=localStorage.getItem("emailKey")
  const location=useLocation()
  const {productinfo}=location.state
 // const navigate = useNavigate()
  const mapRef = useRef(null);
  const mapInstance = useRef(null); // Store the map instance
  const markerRef = useRef(null); // Store the current marker
  const [clickedLat, setClickedLat] = useState(null);
  const [clickedLng, setClickedLng] = useState(null);
  const [locationData, setLocationData] = useState({ latitude: "", longitude: "" });
  useEffect(() => {
    const L = window.L;

    // Initialize the map
    mapInstance.current = L.map(mapRef.current).setView([20.5937, 78.9629], 5); // Centered on India

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors",
    }).addTo(mapInstance.current);

    // Handle map click to add a marker
    mapInstance.current.on("click", function (e) {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;

      // If a marker already exists, remove it
      if (markerRef.current) {
        mapInstance.current.removeLayer(markerRef.current);
      }

      // Add a new marker to the map
      const newMarker = L.marker([lat, lng])
        .addTo(mapInstance.current)
        .bindPopup("You are here!")
        .openPopup();

      // Store the marker reference and update state
      markerRef.current = newMarker;
      setClickedLat(lat);
      setClickedLng(lng);
      setLocationData({ latitude: lat, longitude: lng })
    });

    // Cleanup the map when the component unmounts
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
      }
    };
  }, []);

  const  handleSearch = () => {
    const query = document.getElementById("search").value;
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      query
    )}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const result = data[0];
          const lat = result.lat;
          const lon = result.lon;

          // Center the map on the searched location
          mapInstance.current.setView([lat, lon], 13);

          // If a marker already exists, remove it
          if (markerRef.current) {
            mapInstance.current.removeLayer(markerRef.current);
          }

          // Add a new marker to the searched location
          const newMarker = L.marker([lat, lon])
            .addTo(mapInstance.current)
            .bindPopup("Location found!")
            .openPopup();

          // Store the marker reference and update state
          markerRef.current = newMarker;
          setClickedLat(lat);
          setClickedLng(lon);
          setLocationData({ latitude: lat, longitude: lon })
        } else {
          alert("Location not found. Please try again.");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic
    // alert("Form Submitted"+  clickedLat+" "+ clickedLng );
    // // console.log(product);
    
    // console.log(locationData)
    try{

      console.log(productinfo);
      
      const params={"id":productinfo}
       const serverResponse = await axios.put(URL,locationData,{params})

    const serverMsg=serverResponse.data.updateStatus.acknowledged
console.log(serverMsg);
if(serverMsg === true)
    alert("Location addded/updated successfully")

      // //       const serverStatus = serverResponse.data.updateStatus
      // //       if (serverStatus.acknowledged) {
      // //           alert("update Successful")
      // console.log(ownerEmail);
      // console.log(locationData);
      // console.log(params);
      
      
      //          
      //       }
    }catch(error) {
      console.log(error);
    
    } 
  };



  return (
    <>
<ShopOwnerHeader/>
    <div className="container">
      <h1>Add Locations on Map</h1>

      {/* Search bar and button */}
      <div className="search-container">
        <input type="text" id="search" placeholder="Search for a location..." />
        <button id="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Form to send the coordinates */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
         
          id="long"
          name="long"
          defaultValue={clickedLng || ""}
        />
        <input
          type="text"
         
          id="lat"
          name="lat"
          defaultValue={clickedLat || ""}
        />
        <div className="form-container">
          <input type="submit" defaultValue="Submit" />
        </div>
      </form>

      {/* Map container */}
      <div
        id="map"
        ref={mapRef}
        style={{ height: "500px", width: "100%" }}
      ></div>
    </div>
    </>
  );
};

export default AddLocation;