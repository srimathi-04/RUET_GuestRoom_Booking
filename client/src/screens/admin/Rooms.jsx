/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('/api/rooms/getallrooms');
        setRooms(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Rooms</h1>
        {loading ? (
          <Loader />
        ) : (
          <>
            {error ? (
              <div>Error occurred while fetching bookings.</div>
            ) : (
              <table className="table table-bordered table-info">
                <thead className="box-shadow">
                  <tr>
                    <th>Room Id</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Rent Per Day</th>
                    <th>Max Count</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.length === 0 ? (
                    <tr>
                      <td colSpan="6">No rooms available.</td>
                    </tr>
                  ) : (
                    rooms.map((room) => (
                      <tr key={room._id}>
                        <td>{room._id}</td>
                        <td>{room.name}</td>
                        <td>{room.type}</td>
                        <td>{room.rentperday}</td>
                        <td>{room.maxcount}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Rooms;
