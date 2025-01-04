const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const userRoutes = require('./routes/userRoutes');
const indexRoutes = require('./routes/indexRoutes');
const bikesRouter = require('./routes/bikesRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(expressLayouts);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/',  indexRoutes)
app.use('/users', userRoutes);// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  // ...
});

const User = mongoose.model('User', userSchema);

module.exports = User;

// models/bikeModel.js
const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
  name: String,
  price: Number,
  // ...
});

const Bike = mongoose.model('Bike', bikeSchema);

module.exports = Bike;
app.use('/bikes', bikesRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
