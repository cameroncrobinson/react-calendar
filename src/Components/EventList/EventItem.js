import "./EventItem.module.css";
import EventDate from "./EventDate";
import Card from "../UI/Card";

const EventItem = (props) => {
  return (
    <Card>
      <div>
        <EventDate date={props.date} />
        <div>
          <h2>{props.title}</h2>
          <h3>{props.location}</h3>
          <h3>{props.desc}</h3>
        </div>
      </div>
    </Card>
  );
};

export default EventItem;
