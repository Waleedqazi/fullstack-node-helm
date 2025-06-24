const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/devopsdb';

app.use(express.json());

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'API is running' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
