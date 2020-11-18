///////from hw 7 btws
const express = require('express')    
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')    
passport = require('passport')    
FacebookStrategy = require('passport-facebook').Strategy;    



const app = express();




const enableCors = (req, res, next) => {  
  //console.log("enableCors")
  //console.log(req.headers)
  //the original way
  res.header('Access-Control-Allow-Origin',req.headers.origin)
  res.header('Access-Control-Allow-Credentials',true)
  res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers',' Origin, Authorization, Content-Type, X-Request-With, X-Session-Id')
  res.header('Access-Control-Expose-Headers', 'Location, X-Session-Id')

  if(req.method === 'OPTIONS') {
      res.status(200).send("OK")
      //next()
  } else {
      next()
  }
}
//do i need to use app.use(session?? like in the example from his in class thingy??)


app.use(bodyParser.json());
//app.use(bodyParser.json({limit: "50mb"}));
//app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use(cookieParser());
app.use(enableCors);
app.use(passport.initialize())
app.use(passport.session())

require('./uploadCloudinary')
require('./src/auth')(app)
require('./src/mystery')(app)
require('./src/articles')(app)
require('./src/profile')(app)
require('./src/following')(app)

// Get the port from the environment, i.e., Heroku sets it
const port = process.env.PORT || 3000

//const port = "https://jolisa-hw7backend.herokuapp.com/"

const server = app.listen(port, () => {
     const addr = server.address()
     console.log(`Server listening at http://${addr.address}:${addr.port}`)
})