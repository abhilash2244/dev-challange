import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProvider } from "./api";
import doctor from "./doctor.png";

function ProviderDetail() {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    fetchProvider(id)
      .then((data) => {
        setProvider(data);
      })
      .catch((error) => {
        console.error("Error fetching provider details:", error);
      });
  }, [id]);

  if (!provider) {
    return <div>Loading...</div>;
  }

  return (
    <div class="provider">
      <div class="detail-style">
        <span>
          Mental Wellness {">"}{" "}
          <span>
            {provider.name}, {provider.title}
          </span>
        </span>
        <div class="img-description">
          <div class="img-style">
            <img src={doctor} className="doc-logo-disc" alt="logo" />
          </div>

          <div class="details-desc">
            <span className="name">{provider.name}</span>,
            <span className="name">{provider.title}</span>
            <p>Psychologist</p>
            <p>{provider.bio}</p>
            <div>
              <div>
                <p>Location</p>
                <h6>{provider.location}</h6>
              </div>
              <div>
                <p>Education</p>
                <h6>{provider.education}</h6>
              </div>
              <div>
                <p>Languages</p>
                <h6>{provider.languages}</h6>
              </div>
              <div>
                <button class="button-style">Book with us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProviderDetail;
