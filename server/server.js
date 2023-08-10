const express = require('express'); //getting exprees

const app = express(); // middleware app
const dbConfig = require('./db'); //accessing db.js file
const roomsRoute = require('./routes/roomsRoute');
const usersRoute = require('./routes/userRouter');
const bookingsRoute = require('./routes/bookingsRoute');
app.use(express.json());
app.use('/api/rooms', roomsRoute);
app.use('/api/users', usersRoute);
app.use('/api/bookings', bookingsRoute);
const port = process.env.PORT || 5000; // by default port || manual port

app.listen(port, () => console.log(`Server running on port ${port}`)); // starting express js as server
