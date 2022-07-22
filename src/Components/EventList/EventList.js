import React from "react";
import Card from "../UI/Card";
import EventItem from "./EventItem";
import classes from "./EventList.module.css";

const EventList = (props) => {
  if (props.storedEvents.length === 0) {
    return <h2>You have no upcoming events.</h2>;
  }

  return (
    <ul>
      {props.storedEvents.map((events) => (
        <EventItem
          key={events.id}
          title={events.title}
          date={events.date}
          location={events.location}
          desc={events.desc}
        />
      ))}
    </ul>
  );
};

export default EventList;
