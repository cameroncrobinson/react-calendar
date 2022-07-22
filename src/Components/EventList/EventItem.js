import "./EventItem.module.css";
import EventDate from "./EventDate";
import Card from "../UI/Card";

const EventItem = (props) => {
  return (
    <Card>
      <EventDate date={props.date} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </Card>
  );
};

export default EventItem;
