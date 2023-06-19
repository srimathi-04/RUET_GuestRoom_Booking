import { useState, useEffect } from 'react';
import axios from 'axios';
import Room from '../../components/room/Room';
import Loader from '../../components/Loader';
// eslint-disable-next-line no-unused-vars
import Error from '../../components/Error';
import { DatePicker } from 'antd';
import moment from 'moment';
import './homescreen.css';

const { RangePicker } = DatePicker;

const Homescreen = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState();
  //date states
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  //room filtering
  const [duplicaterooms, setDuplicaterooms] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [type, setType] = useState('all');
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/rooms/getallrooms');
        setRooms(response.data);
        setDuplicaterooms(response.data);
        setLoading(false);
      } catch (error) {
        // Handle the error here, e.g., show an error message or perform other actions
        setError(true);
        console.log('Error fetching rooms:', error);
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);
  function filterByDate(dates) {
    const formattedDates = dates.map((date) =>
      moment(date.$d).format('DD-MM-YYYY')
    );
    setFromDate(formattedDates[0]);
    setToDate(formattedDates[1]);

    //filtering room
    var temprooms = [];
    var availability = false;
    for (const room of duplicaterooms) {
      if (room.currentbookings.length > 0) {
        for (const booking of room.currentbookings) {
          if (
            !moment(formattedDates[0]).isBetween(
              booking.fromdate,
              booking.todate
            ) &&
            !moment(formattedDates[1]).isBetween(
              booking.fromdate,
              booking.todate
            )
          ) {
            if (
              formattedDates[0] !== booking.fromdate &&
              formattedDates[0] !== booking.todate &&
              formattedDates[1] !== booking.fromdate &&
              formattedDates[1] !== booking.todate
            ) {
              availability = true;
            }
          }
        }
      }
      if (availability === true || room.currentbookings.length === 0) {
        temprooms.push(room);
      }
      setRooms(temprooms);
    }
  }
  function filterBySearch() {
    const temprooms = duplicaterooms.filter((room) =>
      room.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setRooms(temprooms);
  }
  function filterByType(e) {
    setType(e);
    if (e !== 'all') {
      const temprooms = duplicaterooms.filter(
        (room) => room.type.toLowerCase() == e.toLowerCase()
      );
      setRooms(temprooms);
    } else {
      setRooms(duplicaterooms);
    }
  }
  return (
    <>
      <div className="container">
        <div className="row mt-5 box-shadow">
          <div className="col-md-3 ">
            <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="search rooms"
              value={searchKey}
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
              onKeyUp={filterBySearch}
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-control"
              value={type}
              onChange={(e) => filterByType(e.target.value)}
            >
              <option value="all">All</option>
              <option value="deluxe">Deluxe</option>
              <option value="non-deluxe">Non-Deluxe</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          {loading ? (
            <Loader />
          ) : (
            rooms.map((room) => {
              return (
                <div className="col-md-9 mt-2" key={room._id}>
                  <Room room={room} fromdate={fromDate} todate={toDate} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Homescreen;
