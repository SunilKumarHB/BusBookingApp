import React from 'react'
import { useNavigate } from 'react-router'
import './BookingForm.css'

const BookingForm = ({ selectedSeats, searchBus }) => {
    const navigate= useNavigate();
    return (
        <div className="bookingForm">
            <h3>{searchBus.from} To {searchBus.to}</h3>
            <h5>DOJ: {searchBus.date}</h5>
            <br />
            <h4>Please fill the below details</h4>
            <br />
            {selectedSeats.map((data) => (
                <div>
                    <div>Seat No: {data}</div>
                    <form action="" className="form">
                        <label htmlFor="">Name:</label>
                        <input type="text" placeholder="Name"/>
                        <br />
                        <label htmlFor="">Age:&nbsp;&nbsp;&nbsp;</label>
                        <input type="number" placeholder="Age"/>
                    </form>
                </div>
            ))}
            <button onClick={()=>{
                alert('Your Tickets Booked Successfully');
                navigate('/');
            }}>Pay and Book</button>
        </div>
        // <div>
        //   {selectedSeats.join(',')} Booked Successfully.
        // </div>
    )
}

export default BookingForm
