// src/components/PlacementDriveInfo.js
import React from 'react';

const PlacementDriveInfo = ({ drives }) => (
  <div className="p-4 bg-white shadow rounded-lg">
    <h2 className="text-xl font-semibold">Placement Drives</h2>
    <ul>
      {drives.map((drive, index) => (
        <li key={index}>{drive.company} - {drive.date}</li>
      ))}
    </ul>
  </div>
);

export default PlacementDriveInfo;
