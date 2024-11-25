import React, { useState } from 'react'
import { Buses, locations } from '../../Utils'
import BusList from '../BusList/BusList'
import './SearchBus.css'

const SearchBus = ({ searchBus, setSearchBus }) => {

    const [filteredBus, setFilteredBus] = useState(null);

    const handleSearch = () => {
        setFilteredBus(Buses.filter((data) =>
            data.source === searchBus.from &&
            data.destination === searchBus.to &&
            data.availableDates.includes(searchBus.date)));
    };
    return (

        <div className="container">
            <h3 className="title">Search For Buses</h3>
            <form>
                <div className="source">
                    <label className="label" htmlFor="">Source:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <select
                        value={searchBus.from}
                        onChange={(e) => setSearchBus((prev) => ({
                            ...prev, from: e.target.value,
                        }))}
                    >
                        {locations.map((data) => (
                            <option value={data} key={data}>
                                {data}
                            </option>
                        ))}

                    </select>
                </div>
                <div className="destination">
                    <label className="label" htmlFor="">Destination:&nbsp;</label>
                    <select
                        value={searchBus.to}
                        onChange={(e) => setSearchBus((prev) => ({
                            ...prev, to: e.target.value,
                        }))}
                    >
                        {locations.map((data) => (
                            <option value={data} key={data}>
                                {data}
                            </option>
                        ))}

                    </select>
                </div>
                <div className="date">
                    <label className="label" htmlFor="">Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="date"
                        value={searchBus.date}
                        onChange={(e) => setSearchBus((prev) => ({
                            ...prev, date: e.target.value,
                        }))} />
                </div>
            </form>
            <button className="button" onClick={handleSearch}>
                Search
            </button>
            <div className="busList">
                {filteredBus && filteredBus.length > 0 && <BusList buses={filteredBus}/>}
                {filteredBus && filteredBus.length < 1 && <h4 style={{color:"darkcyan"}}>No buses found</h4>}
            </div>
        </div>
    )
}

export default SearchBus
