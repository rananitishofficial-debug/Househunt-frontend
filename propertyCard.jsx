import React from "react";

function PropertyCard({ property }) {
  const {
    title,
    location,
    price,
    furnished,
    description
  } = property;

  return (
    <div className="card">
      <h2 className="card-title">{title || "Untitled Property"}</h2>
      <p className="card-location">
        <strong>Location:</strong> {location || "N/A"}
      </p>
      <p className="card-price">
        <strong>Rent:</strong> {price ? `₹${price}` : "N/A"}
      </p>
      <p className="card-furnished">
        <strong>Furnished:</strong> {furnished ? "Yes" : "No"}
      </p>
      {description && (
        <p className="card-description">{description}</p>
      )}
    </div>
  );
}

export default PropertyCard;