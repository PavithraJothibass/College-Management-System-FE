// src/components/ApplicationStatus.js

import React, { useEffect, useState } from 'react';
import { fetchApplicationStatuses } from '../services/api';

const ApplicationStatus = () => {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    const getApplicationStatuses = async () => {
      try {
        const data = await fetchApplicationStatuses();
        setStatuses(data);
      } catch (error) {
        console.error("Error fetching application statuses:", error);
      }
    };

    getApplicationStatuses();
  }, []);

  return (
    <div>
      <h2>Application Status</h2>
      <ul>
        {statuses.map((status) => (
          <li key={status.id}>
            {status.studentName} - {status.companyName}: {status.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationStatus;
