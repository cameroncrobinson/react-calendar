import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import Modal from "./Modal";
import Card from "../UI/Card";

const EventForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");
  const [validForm, setValidForm] = useState(false);

  const enterTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const enterLocationHandler = (event) => {
    setEnteredLocation(event.target.value);
  };

  const enterDescHandler = (event) => {
    setEnteredDesc(event.target.value);
  };

  const checkingValid = () => {
    if (
      enteredTitle.length() > 0 &&
      enteredDate.length() > 0 &&
      enteredLocation.length() > 0 &&
      enteredDesc.length() > 0
    ) {
      setValidForm(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const eventData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      location: enteredLocation,
      desc: enteredDesc,
    };

    props.onSaveEvent(eventData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredLocation("");
    setEnteredDesc("");
  };

  return (
    <Card>
      <Modal>
        <form onSubmit={submitHandler}>
          <div>
            <div>
              <label>Event Title:</label>
              <br />
              <input type="text" onChange={enterTitleHandler}></input>
              <br />
            </div>
            <div>
              <label>Date:</label>
              <br />
              <input
                type="date"
                min="2000-01-01"
                max="3000-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
              ></input>
              <br />
            </div>
            <div>
              <label>Location:</label>
              <br />
              <input type="text" onChange={enterLocationHandler}></input>
              <br />
            </div>
            <div>
              <label>Description:</label>
              <br />
              <input type="text" onChange={enterDescHandler}></input>
              <br />
            </div>
            <div>
              <button type="button" onClick={props.onCancel}>
                Cancel
              </button>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </Modal>
    </Card>
  );
};

export default EventForm;
