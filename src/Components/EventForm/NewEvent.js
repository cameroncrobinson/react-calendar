import { useState } from "react";
import EventForm from "./EventForm";
import "./NewEvent.module.css";

const NewEvent = (props) => {
  const [addingEvent, setAddingEvent] = useState(false);

  const saveEventHandler = (enteredEventData) => {
    const eventData = {
      ...enteredEventData,
      id: Math.random().toString(),
    };
    props.onAddEvent(eventData);
    setAddingEvent(false);
  };

  const startAddingEvent = () => {
    setAddingEvent(true);
  };

  const cancelEventHandler = () => {
    setAddingEvent(false);
  };
  return (
    <div>
      {!addingEvent && <button onClick={startAddingEvent}>AddEvent</button>}
      {addingEvent && (
        <EventForm
          onSaveEvent={saveEventHandler}
          onCancel={cancelEventHandler}
        />
      )}
    </div>
  );
};

export default NewEvent;
