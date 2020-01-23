const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


// const expressValidator = require('express-validator');
const cors = require('cors');
require('dotenv').config();
require('./config/database');

//import
const authRoutes = require('./routes/api/auth');
const userRoutes = require("./routes/api/user");
const categoryRoutes = require("./routes/api/category");
const productRoutes = require("./routes/api/product");

// app
const app = express();



//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(expressValidator());

app.use(express.json());
app.use(cors());

app.use("/api", userRoutes);
app.use("/api", authRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

  // Put API routes here, before the "catch all" route
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/user', require('./routes/api/user'));
app.use('/api/category', require('./routes/api/category'));
app.use('/api/product', require('./routes/api/product'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
  });
  
