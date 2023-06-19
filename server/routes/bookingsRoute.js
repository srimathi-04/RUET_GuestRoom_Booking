const express = require('express');
const router = express.Router();
const moment = require('moment');
const Booking = require('../models/booking');
const Room = require('../models/room');
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')(
  'sk_test_51N95g4DM8NhNwA7Ipb7mE2m3tktX0oMmSyLlOjSsLQGLE52zUPrKupBbcr2SJPrnZc4m0qvg23YgggdSBRsDsl1n006s00zoFU'
);
router.post('/bookroom', async (req, res) => {
  const { room, userid, fromdate, todate, totalamount, totaldays, token } =
    req.body;

  //for payment
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: totalamount * 100,
        customer: customer.id,
        currency: 'BDT',
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      const newbooking = new Booking({
        room: room.name,
        roomid: room._id,
        userid,
        fromdate: moment(fromdate).format('DD-MM-YYYY'),
        todate: moment(todate).format('DD-MM-YYYY'),
        totalamount,
        totaldays,
        transactionId: '1234',
      });
      const booking = await newbooking.save();
      const roomtemp = await Room.findOne({ _id: room._id });
      roomtemp.currentbookings.push({
        bookingid: booking._id,
        fromdate: moment(fromdate).format('DD-MM-YYYY'),
        todate: moment(todate).format('DD-MM-YYYY'),
        userid: userid,
        status: booking.status,
      });
      await roomtemp.save();
    }
    res.send('Room Booked Successfully');
  } catch (error) {
    return res.status(400).json({ error });
  }
  //for booking
});

router.post('/getbookingsbyuserid', async (req, res) => {
  const userid = req.body.userid;
  try {
    const bookings = await Booking.find({ userid: userid });
    res.send(bookings);
  } catch (error) {
    return res.status(200).json({ error });
  }
});

router.post('/cancelbooking', async (req, res) => {
  const { bookingid, roomid } = req.body;
  try {
    const bookingitem = await Booking.findOne({ _id: bookingid });
    bookingitem.status = 'cancelled';
    await bookingitem.save();
    const room = await Room.findOne({ _id: roomid });
    const bookings = room.currentbookings;
    const temp = bookings.filter(
      (booking) => booking.bookingid.toString() !== bookingid
    );
    room.currentbookings = temp;
    await room.save();
    res.send('Your Booking Cancelled Successfully');
  } catch (error) {
    return res.status(200).json({ error });
  }
});
// for admin bookings tab
router.get('/getallbookings', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.send(bookings);
  } catch (error) {
    return res.status(200).json({ error });
  }
});

module.exports = router;
