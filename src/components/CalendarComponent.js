import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  // Admin events visible to all users
  const [adminEvents, setAdminEvents] = useState([]);
  
  // User-specific events only visible to the user who created them
  const [userEvents, setUserEvents] = useState([]);

  // Assume we know whether the current user is an admin or not
  const userIsAdmin = true; // Replace with your authentication logic

  const handleSelect = ({ start, end }) => {
    // Prevent adding events in the past
    if (moment(start).isBefore(moment(), 'day')) {
      alert('You cannot add events to past dates.');
      return;
    }

    const title = window.prompt('Enter event title');
    if (title) {
      const newEvent = { start, end, title, id: new Date().getTime() };
      if (userIsAdmin) {
        // Admin events are shared with everyone
        setAdminEvents([...adminEvents, newEvent]);
      } else {
        // User events are personal
        setUserEvents([...userEvents, newEvent]);
      }
    }
  };

  return (
    <div style={{ height: '100vh', padding: '20px' }}>
      <h3>Calendar</h3>
      <Calendar
        selectable
        localizer={localizer}
        events={userIsAdmin ? [...adminEvents] : [...adminEvents, ...userEvents]} // Admin sees all events, user sees their own and admin's events
        defaultView="month"
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={handleSelect}
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default CalendarComponent;
