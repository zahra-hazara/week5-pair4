require('dotenv').config()
const express = require('express')
const app = express()
const connectDB = require('./config/db');
const userRoute = require("./routers/userRoute");
const protectedRoute = require('./routers/protectedRoute');



app.use(express.json())

const port=process.env.PORT || 3001;

// Connect to MongoDB database
connectDB();

// Use routes
app.use('/api/users', userRoute);
app.use(protectedRoute); // 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})