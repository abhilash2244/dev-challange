import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProviderDetail from "./providerDetail";
import logo from "./logo.svg";
import doctor from "./doctor.png";
import location from "./location.png";
import "./App.css";
import { fetchProviders } from "./api";

function App() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetchProviders()
      .then((data) => {
        setProviders(data);
      })
      .catch((error) => {
        console.error("Error fetching providers:", error);
      });
  }, []);

  const ProvidersList = () => (
    <div className="providers-list">
      <div className="header">
        <h1 className="title">Browse our providers</h1>
        <p>Mental Wellness</p>
        <div className="widget">
          <img src={location} alt="Location" className="location-icon" />
          <span className="text">ON</span>
        </div>
      </div>
      <div className="provider-body">
        <p className="prov-num">17 providers in ontario</p>
        <ul className="list">
          {providers.map((provider) => (
            <li key={provider.id} className="list-item">
              <Link to={`/provider/${provider.id}`}>
                <div className="img-title">
                  <img src={doctor} className="doc-logo" alt="logo" />
                  <span className="name">{provider.name}</span>,
                  <span className="name">{provider.title}</span>
                </div>
                <div className="bio-container">
                  <p className="bio">{provider.bio}</p>
                </div>
                <div className="avail">
                  <span className="name available">
                    Available {provider.availabilty}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProvidersList />} />
        <Route path="/provider/:id" element={<ProviderDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
