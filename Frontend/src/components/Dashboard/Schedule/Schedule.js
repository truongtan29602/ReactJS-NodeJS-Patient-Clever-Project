import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Schedule.css";
import { withRouter } from "react-router-dom";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022, 6, 0),
    end: new Date(2022, 6, 0),
  },
  {
    title: "Vacation",
    start: new Date(2022, 6, 7),
    end: new Date(2022, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2022, 6, 20),
    end: new Date(2022, 6, 23),
  },
];

const Schedule = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }
  const removeEvent = (pEvent) =>{
    const r = window.confirm("Would you like to remove this event?")
    if(r === true){
        const newEvents = allEvents;
        const idx = newEvents.indexOf(pEvent);
        newEvents.splice(idx, 1);
        setAllEvents(newEvents);
    }
  }

  return (
    <div className="schedule-wrapper">
      <div className="schedule-header-wrapper">
        <b>This month schedule</b>
      </div>
      <div className="schedule-add-event-wrapper">
        <input
        className="s-a-e-title"
          type="text"
          placeholder="Add Title"
          style={{ marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
        className="s-a-e-start-date"
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
        className="s-a-e-end-date"
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button className="s-a-e-add-btn" stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "20px" }}
        eventPropGetter={(event, start, end, isSelected) => ({
          event,
          start,
          end,
          isSelected,
          style: { backgroundColor: "#3965F3" },
        })}
        onSelectEvent={e => removeEvent(e)}
      />
    </div>
  );
};

export default withRouter(Schedule);
