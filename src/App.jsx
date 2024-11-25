
import './App.css'
import Header from './components/Header/Header.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchBus from './components/SearchBus/SearchBus';
import { useState } from 'react';
import { Buses, locations } from './Utils/index.js';
import BusLayout from './components/BusLayout/BusLayout';
import BookingForm from './components/BookingForm/BookingForm';


function App() {

  const [searchBus, setSearchBus] = useState({
    from: locations[0],
    to: locations[1],
    date: "",
  });

  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<SearchBus searchBus={searchBus} setSearchBus={setSearchBus} />}>
          </Route>
          <Route
            path='/bus/:id'
            element={<BusLayout selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />}>
          </Route>
          <Route
          path='/bus/book'
          element={<BookingForm selectedSeats={selectedSeats} searchBus={searchBus}/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
