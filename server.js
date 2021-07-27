const express = require('express');
const app = express();
const connectDB = require('./DB/Connection');

const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json({ extended: false}));
app.use('/api/userModel', require('./Api/User'));

app.listen(PORT, () => {
    console.log('Started!');
});