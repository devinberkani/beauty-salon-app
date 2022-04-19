import React from 'react';
import data from '../data';
import { useGlobalContext } from './context';

const ClientEvents = () => {
  const { withinThirtyDays, isWithinThirtyDays } = useGlobalContext();

  //new date representing right now
  const today = new Date();
  //todays date in better format
  const todaysDate = today.toLocaleDateString('en-US');
  //new date representing right now
  const thirtyDays = new Date();
  //...make it represent 30 days from now
  thirtyDays.setDate(thirtyDays.getDate() + 30);
  //...and put it in better format
  const thirtyDaysDate = thirtyDays.toLocaleDateString('en-US');

  const sortEvents = (id, numDays) => {};

  const numDaysArr = [];

  return (
    <div className='client-events'>
      <h2>Upcoming Events</h2>
      <h4>{`${todaysDate} - ${thirtyDaysDate}`}</h4>
      {data.map((client) => {
        const { id, clientEvent } = client;
        //find out if event is within thirty days
        const numDays = withinThirtyDays(clientEvent.date);
        //...and if it is push it to a new array to be sorted
        if (numDays > 0 && numDays < 30) {
          numDaysArr.push({
            numDays,
            id,
            event: clientEvent.event,
            date: clientEvent.date,
          });
        }
        //destructure and sort a new array of objects in order to display upcoming events in order
        numDaysArr.sort(({ numDays: a }, { numDays: b }) => a - b);
      })}
      {/* map through sorted array to display items in order */}
      {numDaysArr.map((item) => {
        const { id, event, date } = item;
        return <p key={id}>{`${event} on ${date}`}</p>;
      })}
    </div>
  );
};

export default ClientEvents;
