/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './profile.css';
import { Tabs } from 'antd';
import axios from 'axios';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

const { TabPane } = Tabs;

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  useEffect(() => {
    if (!user) {
      window.location.href = './login';
    }
  }, [user]);

  return (
    <div>
      <Tabs defaultActiveKey="1" className="box-content">
        <TabPane tab="Profile" key="1">
          <h1>My Profile</h1>
          <br />
          <h1>Name: {user && user.username}</h1>
          <h1>Email: {user && user.email}</h1>
          <h1>isAdmin: {user && user.isAdmin ? 'Yes' : 'No'}</h1>
        </TabPane>
        <TabPane tab="Bookings" key="2">
          <MyBookings />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Profile;

function MyBookings() {
  const [bookings, setBookings] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const user = JSON.parse(localStorage.getItem('currentUser'));
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        setLoading(true);
        const rooms = await axios.post('/api/bookings/getbookingsbyuserid/', {
          userid: user._id,
        });

        console.log(rooms.data);
        setBookings(rooms.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };

    fetchRoom();
  }, [user._id]);
  async function cancelBooking(bookingid, roomid) {
    try {
      setLoading(true);
      const result = await (
        await axios.post('/api/bookings/cancelbooking', { bookingid, roomid })
      ).data;
      console.log(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          {loading && <Loader />}
          {bookings &&
            bookings.map((booking) => (
              <React.Fragment key={booking._id}>
                <div className="box-shadow box-content">
                  <h1>{booking.room}</h1>
                  <p>
                    <b>BookingId:</b> {booking._id}
                  </p>
                  <p>
                    <b>Check In:</b> {booking.fromdate}
                  </p>
                  <p>
                    <b>Check Out:</b> {booking.todate}
                  </p>
                  <p>
                    <b>Amount :</b> {booking.totalamount} Tk
                  </p>
                  <p>
                    <b>Status :</b>{' '}
                    {booking.status == 'booked' ? 'Confirmed' : 'Cancelled'}
                  </p>
                  {booking.status !== 'cancelled' && (
                    <div className="text-right">
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          cancelBooking(booking._id, booking.roomid)
                        }
                      >
                        Cancel Booking
                      </button>
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
}
