// src/pages/Dashboard.js
import React from 'react';
import ApplicationStatus from '../components/ApplicationStatus';
import InterviewSchedule from '../components/InterviewSchedule';
import PlacementDriveInfo from '../components/PlacementDriveInfo';
import JobOffers from '../components/JobOffers';

const Dashboard = () => {
  const applicationStatus = "In Progress";
  const interviews = [
    { date: "2024-10-12", company: "Company A" },
    { date: "2024-10-15", company: "Company B" },
  ];
  const drives = [
    { company: "Company C", date: "2024-10-20" },
    { company: "Company D", date: "2024-10-25" },
  ];
  const offers = [
    { company: "Company E", position: "Software Engineer" },
    { company: "Company F", position: "Data Analyst" },
  ];

  return (
    <div className="p-4">
      <ApplicationStatus status={applicationStatus} />
      <InterviewSchedule interviews={interviews} />
      <PlacementDriveInfo drives={drives} />
      <JobOffers offers={offers} />
    </div>
  );
};

export default Dashboard;
