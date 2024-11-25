import React from 'react'
import './BusList.css'
import { useNavigate } from 'react-router-dom';


const BusList = ({ buses }) => {
  const navigate = useNavigate();
  return (
    <div className="bus-container">
      <h4 className="heading">Available Buses</h4>
      {buses.map((bus) =>
        <div className="bus-list" key={bus.id}>
          <h3><strong>Bus Name:</strong> {bus.name}</h3>
          <div className="first">
            <p><strong>Source:</strong> {bus.source}</p>
            <p><strong>Destination:</strong> {bus.destination}</p>
            <p><strong>Departure Time:</strong> {bus.departureTime}</p>
            <p><strong>Arrival Time:</strong> {bus.arrivalTime}</p>
            <p><strong>Bus Type:</strong> {bus.busType}</p>
            <p><strong>Price:</strong> {bus.price}</p>
          </div>
          <div className="second">
            <p><strong>Available Seats:</strong> {bus.availableSeats.length}</p>
            <button className="bookButton" onClick={() => navigate('bus/' + bus.id)}>Book</button>
          </div>

        </div>
      )}
    </div>
  )
}

export default BusList