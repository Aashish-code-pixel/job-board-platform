const express = require('express');
const connectDB = require('./config/db');
const jobRoutes = require('./routes/jobRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

connectDB();
const app = express();
app.use(express.json());

app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
