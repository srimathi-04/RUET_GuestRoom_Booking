/* eslint-disable no-unused-vars */
import { json, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './bookingscreen.css';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import moment from 'moment';
//for payment
import StripeCheckout from 'react-stripe-checkout';
import Success from '../../components/Success';

export default function BookingScreen() {
  let params = useParams();

  const [room, setRoom] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const fromdate = moment(params.fromdate, 'DD-MM-YYYY');
  const todate = moment(params.todate, 'DD-MM-YYYY');
  const totaldays = moment.duration(todate.diff(fromdate)).asDays() + 1;

  useEffect(() => {
    const fetchRoom = async () => {
      if (!localStorage.getItem('currentUser')) {
        window.location.href = '/login';
      }
      try {
        setLoading(true);
        const response = await axios.post('/api/rooms/getroombyid', {
          roomid: params.roomid,
        });
        setRoom(response.data);
        setLoading(false);
      } catch (error) {
        // Handle the error here, e.g., show an error message or perform other actions
        setError(true);
        console.log('Error fetching rooms:', error);
        setLoading(false);
      }
    };

    fetchRoom();
  }, [params.roomid]);
  //pay now

  //for stripe payment
  async function onToken(token) {
    console.log(token);
    const bookingDetails = {
      room,
      userid: JSON.parse(localStorage.getItem('currentUser'))._id,
      fromdate,
      todate,
      totalamount: room.rentperday * totaldays,
      totaldays,
      token,
    };

    try {
      const result = await axios.post('/api/bookings/bookroom', bookingDetails);
      // Handle the result here
      window.alert('Room booked Successfully');
      window.location.href = '/home';
    } catch (error) {
      // Handle the error here
      console.error(error);
    }
  }
  return (
    <div className="m-5">
      {loading ? (
        <Loader />
      ) : room ? (
        <div>
          <div className="row justify-content-center mt-5 box-shadow">
            <div className="col-md-6">
              <h1>{room.name}</h1>
              <img src={room.imageurls[1]} alt="" className="bigimg" />
            </div>
            <div className="col-md-6" style={{ textAlign: 'right' }}>
              <h1>Booking Details</h1>
              <hr />
              <div>
                <b>
                  <p>
                    Name :{' '}
                    {JSON.parse(localStorage.getItem('currentUser')).username}
                  </p>
                  <p>From Date : {params.fromdate}</p>
                  <p>To Date : {params.todate} </p>
                  <p>Max Count: {room.maxcount}</p>
                </b>
              </div>
              <div style={{ textAlign: 'right' }}>
                <b>
                  <h1>Amount</h1>
                  <hr />
                  <p>Total days : {totaldays} </p>
                  <p>Rent per Day : {room.rentperday} Tk</p>
                  <p>Total Amount : {room.rentperday * totaldays} Tk</p>
                </b>
              </div>
              <div style={{ float: 'right' }}>
                <StripeCheckout
                  amount={room.rentperday * totaldays * 100}
                  token={onToken}
                  currency="BDT"
                  stripeKey="pk_test_51N95g4DM8NhNwA7IEMlWcsZzNE9p1hHppR1Y1SmgQZIN7fqhtpP4FtJ2mgOEPo5fPCB3CkHtjdKtxPZ6g3GngdYt00ADLjCLQv"
                >
                  <button className="btn btn-primary">Pay Now</button>
                </StripeCheckout>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
}
