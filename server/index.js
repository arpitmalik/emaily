const express = require("express");
// To execute passport.js
require('./services/passport');

const app = express();

// Since 'authRoutes' returns a function, with an immidiately invoked callback function 'app'.
require('./routes/authRoutes')(app); 

const PORT = process.env.PORT || 5000; //For heroku
app.listen(PORT);