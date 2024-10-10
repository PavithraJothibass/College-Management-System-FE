// src/components/JobOffers.js
import React from 'react';

const JobOffers = ({ offers }) => (
  <div className="p-4 bg-white shadow rounded-lg">
    <h2 className="text-xl font-semibold">Job Offers</h2>
    <ul>
      {offers.map((offer, index) => (
        <li key={index}>{offer.company} - {offer.position}</li>
      ))}
    </ul>
  </div>
);

export default JobOffers;
