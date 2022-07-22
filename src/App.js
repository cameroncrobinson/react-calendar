import React, { Component, Fragment, useState } from "react";
import Calendar from "react-calendar";
import "./App.css";
import NewEvent from "./Components/EventForm/NewEvent";
import EventList from "./Components/EventList/EventList";

function App() {
  const [calEvents, setCalEvents] = useState([]);
  const addEventHandler = (calEvent) => {
    setCalEvents((prevEvents) => {
      return [calEvent, ...calEvents];
    });
  };
  return (
    <Fragment>
      <h1>
        {" "}
        Cameron Robinson & Jeff Muter's Random & Overly Long Title for a React
        Calendar Event App
      </h1>
      <Calendar />
      <NewEvent onAddEvent={addEventHandler} />
      <EventList storedEvents={calEvents} />
    </Fragment>
  );
}
export default App;
