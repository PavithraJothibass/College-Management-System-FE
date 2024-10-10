// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layouts/Header';                // Import Header
import Footer from './layouts/Footer';                // Import Footer
import Sidebar from './layouts/Sidebar';              // Import Sidebar
import Dashboard from './pages/Dashboard';            // Import Dashboard page
import Profile from './pages/Profile';                // Import Profile page
import ApplicationStatus from './components/ApplicationStatus';  // Import ApplicationStatus component
import InterviewSchedule from './components/InterviewSchedule';  // Import InterviewSchedule component
import './index.css';  // Import global styles

const App = () => (
  <Router>
    <div className="flex">
      {/* Sidebar for navigation */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1">
        {/* Header component */}
        <Header />

        {/* Main content wrapped in routes */}
        <main className="p-4">
          <Switch>
            {/* Route for the Dashboard page */}
            <Route path="/dashboard" component={Dashboard} />

            {/* Route for the Profile page */}
            <Route path="/profile" component={Profile} />

            {/* Route for Application Status page */}
            <Route path="/application-status" component={ApplicationStatus} />

            {/* Route for Interview Schedule page */}
            <Route path="/interview-schedule" component={InterviewSchedule} />
          </Switch>
        </main>

        {/* Footer component */}
        <Footer />
      </div>
    </div>
  </Router>
);

export default App;
