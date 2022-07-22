import { useState } from "react";
import "./Calendar.module.css";
import Card from "../UI/Card";

const Calendar = (props) => {
  const [date, setDate] = useState(new Date());

  return (
    <Card className="app">
      <h1 className="text-center">React Calendar with Range</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} selectRange={true} defaultValue={date} />
      </div>
      {date.length > 0 ? (
        <p className="text-center">
          <span className="bold">Start:</span> {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className="bold">End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className="text-center">
          <span className="bold">Default selected date:</span>{" "}
          {date.toDateString()}
        </p>
      )}
    </Card>
  );
};

export default Calendar;
