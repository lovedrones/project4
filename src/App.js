import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { Route } from 'react-router-dom';

const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
require("dotenv").config();

//import routes
const userRoutes = require("./routes/user");
// app
const app = express();

//db
mongoose
.connect(press.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true
})
.then(( => console.log("DB Connected"));

//middlewares
app.use(morgan('dev'));
app.use(bodyParser);
app.use(cookieParser());
app.use(expressValidator());

// routes middleware
app.use("/api", userRoutes);

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

// ReactDOM.render(<App />, document.querySelector('#app'));

export default App;
