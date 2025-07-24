const express = require('express');
const db = require('./utils/db-connection');
const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/buses', busRoutes);

app.get('/', (req, res) => {
  res.send('Bus Booking System API is running');
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
