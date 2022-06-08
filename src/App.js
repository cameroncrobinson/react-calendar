import React, { Component }  from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import './App.css';


function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
      <h1 className='text-center'>React Calendar with Range</h1>
      <div className='calendar-container'>
        <Calendar
          onChange={setDate}
          selectRange={true}
          defaultValue={date}
        />
      </div>
      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
    </div>
  );
}

//The following is for the modal form
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenForm = document.querySelector('.eventButtonBox')

const openForm = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
const closeForm = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnOpenForm.addEventListener('click', openForm);
overlay.addEventListener('click', closeForm);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeForm();
  }
});
//modal form code ends here
export default App;