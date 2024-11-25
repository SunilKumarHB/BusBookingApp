import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { Buses } from '../../Utils';
import './BusLayout.css'

const BusLayout = ({ selectedSeats, setSelectedSeats }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedBus = Buses.find((data) => data.id === parseInt(id));
  const isSleeper = selectedBus.busType === 'Sleeper';
  const seatWidth = isSleeper ? '50px' : '22px';

  const isSeatAvailable = (seat) => selectedBus.availableSeats.includes(seat);

  const selectSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      const seats = selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      setSelectedSeats(seats)
      return
    }
    setSelectedSeats((prev) => [...prev, seat])
  }

  const isSeatSelected = (seat) => selectedSeats.includes(seat);
  const availableSeats=selectedBus.availableSeats.length;
  const totSeats=selectedBus.numberOfSeats;
  const bookedSeats=totSeats-availableSeats;

  const generateSeats = (array, key = "") =>
    array.map((seats) =>
      Array.isArray(seats) ? (
        <div key={seats}>
          {
            seats.map(seat =>
              <div className="bus-layout-upper-right"
                style={{
                  height: seatWidth, width: '22px',
                  background: isSeatSelected(`${key}${seat}`) ? 'rgb(86, 189, 94)' : isSeatAvailable(`${key}${seat}`) ? '#fff' : '#b6b4b4',
                  cursor: isSeatAvailable(`${key}${seat}`) ? 'pointer' : ''
                }} key={seat}
                onClick={() => selectSeat(`${key}${seat}`)}
              >
                {key} {seat}
              </div>)
          }
        </div>
      ) : (
        <div className="bus-layout-upper-left"
          style={{
            height: seatWidth, width: '22px',
            background: isSeatSelected(`${key}${seats}`) ? 'rgb(86, 189, 94)' : isSeatAvailable(`${key}${seats}`) ? '#fff' : '#b6b4b4',
            cursor: isSeatAvailable(`${key}${seats}`) ? 'pointer' : ''
          }} key={seats}
          onClick={() => selectSeat(`${key}${seats}`)}
        >
          {key} {seats}
        </div >
      ))

  return (
    <div className="bus-layout-container">
      <h2>{selectedBus.name}</h2>
      <h3>Tickets</h3>
      <h4>{selectedBus.busType}</h4>

      <div className="availableSeats">
        <div className="available">
          <h5>Available</h5>
          <div style={{ width: seatWidth, background: '#ffff' }}>{availableSeats}</div>
        </div>
        <div className="booked">
          <h5>Booked</h5>
          <div style={{ width: seatWidth, background: '#b6b4b4' }}>{bookedSeats}</div>
        </div>
        <div className="selected">
          <h5>Selected</h5>
          <div style={{ width: seatWidth, background: 'rgb(86, 189, 94' }}>{selectedSeats.length}</div>
        </div>

        <ul className="busLayout-displaySeats">
          <div>
            {isSleeper ? (
              <div className="bus-layout-sleeper">
                <h5 className="upper-title">Upper</h5>
                <div className="bus-layout">
                  <div>
                    {generateSeats(selectedBus.seatLayout.upper.left, "U")}
                  </div>
                  <div className="bus-layout-upper">
                    {generateSeats(selectedBus.seatLayout.upper.right, "U")}
                  </div>
                </div>

                <h5 className="lower-title">Lower</h5>
                <div className="bus-layout">
                  <div>
                    {generateSeats(selectedBus.seatLayout.lower.left, "L")}
                  </div>
                  <div className="bus-layout-lower">
                    {generateSeats(selectedBus.seatLayout.lower.right, "L")}
                  </div>
                </div>
              </div>) : (
              <div className="bus-layout-seater">
                <div className="bus-layout-left">
                  {generateSeats(selectedBus.seatLayout.left)}
                </div>
                <div className="bus-layout-right">
                  {generateSeats(selectedBus.seatLayout.right)}
                </div>
              </div>)}
          </div>
          <div className="displaySeats">
            <div>
              <h4>{selectedSeats.join(',')}</h4>
            </div>
            <button
              onClick={() => navigate('/bus/book')}
              disabled={!(selectedSeats.length > 0)}>
              Book
            </button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default BusLayout