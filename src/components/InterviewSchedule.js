// src/components/InterviewSchedule.js

import React, { useEffect, useState } from 'react';
import { fetchInterviewSchedules } from '../services/api';

const InterviewSchedule = () => {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    const getInterviewSchedules = async () => {
      try {
        const data = await fetchInterviewSchedules();
        setInterviews(data);
      } catch (error) {
        console.error("Error fetching interview schedules:", error);
      }
    };

    getInterviewSchedules();
  }, []);

  return (
    <div>
      <h2>Interview Schedule</h2>
      <ul>
        {interviews.map((interview) => (
          <li key={interview.id}>
            {interview.studentName} - {interview.companyName}:
            Interview on {new Date(interview.date).toLocaleDateString()} at {interview.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InterviewSchedule;
