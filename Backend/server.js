const express = require("express");
const res = require("express/lib/response");
const ConnectDB = require("./config/database.js");
//const RouteURL = require("./routes/RouteURL.js");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");

// Connect Database
ConnectDB();
//Init Middleware
app.use(express.json({ extended: false }));

/*
app.post("/auth", async (req, res) {
  try {
    var username = req.body.username;
    var password = req.body.password;
    console.log(req.body);
    res.send("hello");
  } catch (err) {
    console.log(err);
  }
});
*/

//Route Url
//RouteURL(app);

//Define Routes
app.use('/api/v1/users', require('./routes/api/users'));
app.use('/api/v1/auth', require('./routes/api/auth'));
//app.use('/api/v1/profile', require('./routes/api/profile'));
app.use('/api/v1/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
