const express = require('express');
const cors = require('cors');

const app = express();

var corOptions = {
  origin: 'https://localhost:8081'
};


// middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers

const router = require('./routes/productRouter.js')
app.use('/api/products', router)

const router1 = require('./routes/reviewRouter.js')
app.use('/api/reviews', router1)


// testing api
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Test Project' });
});


// port
const PORT = process.env.PORT || 8080;


// server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
