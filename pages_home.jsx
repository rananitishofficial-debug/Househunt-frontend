import React, { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";

function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        setError("");
        // Local dev backend URL
        const res = await fetch("http://localhost:5000/api/properties");
        if (!res.ok) {
          throw new Error("Failed to fetch properties");
        }
        const data = await res.json();
        setProperties(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const filtered = properties.filter((p) => {
    const q = search.toLowerCase();
    return (
      p.title?.toLowerCase().includes(q) ||
      p.location?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="home">
      <div className="toolbar">
        <input
          type="text"
          placeholder="Search by title or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {loading && <p className="info-text">Loading properties...</p>}
      {error && <p className="error-text">Error: {error}</p>}

      {!loading && !error && filtered.length === 0 && (
        <p className="info-text">No properties found.</p>
      )}

      <div className="card-grid">
        {filtered.map((property) => (
          <PropertyCard key={property._id || property.title} property={property} />
        ))}
      </div>
    </div>
  );
}

export default Home;