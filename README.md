# College Placement Management System

## Overview

The **College Placement Management System** is a web-based application that streamlines the student placement process for colleges and universities. The platform includes modules like student application tracking, interview scheduling, placement drives management, and company coordination. It provides a comprehensive solution for both students and administrators to manage recruitment more efficiently.

The system is built using the **MERN stack** (MongoDB, Express.js, React, Node.js) with **TailwindCSS** for styling. The frontend is deployed on **Netlify** and the backend on **Render**.

## Features

- **Student Application Tracking**: Track application progress and status updates.
- **Interview Scheduling**: Manage and track student-company interviews.
- **Placement Drives**: Information on upcoming placement drives and student participation.
- **Job Offers**: Manage job offers received by students.
- **Admin Dashboard**: Track applications, interviews, and placement status.
- **Company Management**: Manage company profiles, schedule interviews, and access student details.

## Technologies Used

- **Frontend**:
  - React.js
  - TailwindCSS
  - Deployed on Netlify
  
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (Database)
  - Deployed on Render

- **APIs**:
  - Video Interviews using Zoom API or WebRTC

## Folder Structure

```bash
project-root/
│
├── public/                 # Public assets
│   ├── index.html          # Main HTML template
│   └── favicon.ico         # Web app icon
│
├── src/
│   ├── assets/             # Static files like images, fonts, etc.
│   ├── components/         # Reusable React components
│   │   ├── ApplicationStatus.js
│   │   ├── InterviewSchedule.js
│   └── pages/              # Application pages
│       ├── Dashboard.js
│       └── Profile.js
│
├── services/               # API calls and backend interactions
│   └── api.js
│
├── layouts/                # Layout components (Header, Footer, Sidebar)
│   ├── Header.js
│   └── Footer.js
│
├── App.js                  # Main React component
├── index.js                # Entry point for the React application
├── tailwind.config.js       # TailwindCSS configuration
└── README.md               # Project documentation
