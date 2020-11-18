//THis is where we are now


//////the latest version is on top

//require('./profile.js')
require('.././model.js')
require('.././db.js')
require('.././index.js')
var md5 = require('md5')

var crypto = require('crypto')
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
//passport = require('passport')
//FacebookStrategy = require('passport-facebook').Strategy;


//const redis = require('redis').createClient(process.env.REDIS_URL);
//clears memory cache
//redis.hmset('sessions',sid,JSON.stringify(userObj));
//redis.hgetall('sessions',function(err,object){});

var mongoose = require('mongoose')

///Users Schema

var usersSchema = new mongoose.Schema({
  theId: String, username: String, salt: String, hash: String, withFacebook:String
})

Users  = mongoose.model('User', usersSchema,'Users')






passport.use(new FacebookStrategy({
    clientID: '255624345124187',
    clientSecret: '761281126376107b80267d9172b8f289',
    callbackURL: "http://jolisabookapp.surge.sh/auth/facebook/callback",
    profileFields: ['emails']
  },
  function(accessToken, refreshToken, profile, done) {
    
    if (profile){
      console.log("PROFILE" + profile)
      console.log("DISPLAY NAME" + profile.dislayName)
      

      //DETERMINE if there is already user who has this info
      Users.findOne({ email: profile.email}, function(err, doc){
      if (err){
      //res.status(400).send({error:err})
      console.log("nope, an error")
      }
      else{
        if (!err &&!doc){
         console.log("close, but no doc")
         //this means we just create a new profile for them (Still to be done)
         Users.create({ theId:" ", username: profile.displayName, salt: " ", hash:" " }, function (err, small) {
           if (err) return handleError(err);
            // saved!
           });




        }

       if(doc){
      
         console.log("AYYYYYYY! We have a doc.")
         //send the document to a      
       }
      
      }
   
     })
      
//AND IF THERE IS NO PROFILE TO CHECK ON , then...//
    }
    else{
      console.log("NO PROFILE AVAILABLE")
    
     ///AT THIS POINT SHOULD I TRY TO REDIRECT TO MAIN ? OR DOES auth/facebook/callback do that??
    }

    //
  }
));










var cookieKey = 'sid'
function isLoggedIn(req,res,next) {
  var sid = req.cookies[cookieKey]
  if (!sid){
    return res.sendStatus(401)
  }
  var username = sessionUser[sid]
  if (username){
    req.username = username
    next()

  }else{
    res.sendStatus(401)
  }
}

var theCount;
function countUsers(){
  //var theCount = 0
  //count;
  Users.countDocuments({}, function( err, count){
    //console.log( "Number of posts:", count )
    theCount = (count).toString()
    console.log("count" + count)
    console.log("theCount inside function")
    return (count);
    })
    console.log("theCount outside function" + theCount)
return theCount
}


function logout(req,res){
  //sesionUser.sessionKey = {}
  res.send("OK")

}


const getProfileId = (req,res) => {
  //get the profileId using the provided username and password
  //can get requests have two parameters??

  //const user = 1
  const username = req.params.username
  const email = req.params.email
  var userProfile = {}

  //var userDob = {username:user, dob:"tbd"}

  if (!username){
    res.send('username needed')
  }
  if (!email){
    res.send('email needed')
  }
  
  if (username && email){
    Profiles.findOne({"username":username, "email":email }, function(err, doc){
     if (err){
    //res.status(400).send({error:err})
    console.log("nope")
     }
     else{
       if(doc){
      
         console.log("AYYYYYYY!, we've got a doc")
         
         userProfile.username = doc.username
         userProfile.profileId = doc._id
         
         res.send( userProfile)

    }
      else{
         console.log("close, but No Doc with matching email and username")
         userProfile = {username:username, profileId:"none"}
         res.send( userProfile)
    }
  }})





    //userZipcode.zipcode = profile.profiles[parseInt(user)].zipcode
    
  }
}


function register(req,res){
  
  //const aUsername = "a username"
  const aUsername = req.body.username
  var password = req.body.password
  
  const registerDict = {username: aUsername}

   var totalUsers = 0
  
  //console.log("theCount" + theCount)
  //totalUsers = countUsers()
  //console.log("total Users"+ totalUsers)

  const mongoUser = {username:aUsername}
  const mongoProf = {username: aUsername, headline:"Today is the best day ever.", avatar:"" ,following:[], theId:"", email:req.body.email, dob:req.body.dob, zipcode:req.body.zipcode}

  /*require('crypto').randomBytes(48, function(err, buffer) {
    var salt = buffer.toString('hex');
  });*/

  salt = require('crypto').randomBytes(16).toString('base64')

  //var salt =  new Date.getTime() + username
  
  var hash = getHash(password,salt)
  


  //insert a new document into the user collection and profile with the following information



  console.log(salt)
  console.log(hash)
  mongoUser.salt = salt
  mongoUser.hash = hash


  //db.users.insert(mongoUser)
  //db.profiles.insert(mongoProf)
  
  console.log(mongoUser)
  console.log(mongoProf)


 //add mongoUser to Users collection

  var newUser = new Users( mongoUser)
     //myPosts[posts].append(newArticle)
      
      newUser.save((function (err, result) {
        if (err) {
          console.log("whoopsies")
        }
        else{
          console.log("yayyayay, new User uploaded")
        }
        ;
          // saved!
        }));

 //add mongoProf to Profiles collection
   var newProfile = new Profiles( mongoProf)
     //myPosts[posts].append(newArticle)
      
      newProfile.save((function (err, result) {
        if (err) {
          console.log("whoopsies")
        }
        else{
          console.log("yayyayay, new Profile uploaded")

        }
        ;
          // saved!
        }));


  registerDict.result = "success"

  res.send(registerDict)

}

function getHash (aPassword, aSalt){
  //takes a dictionary with a password and salt and returns the hashed version
  var password = this.aPassword
  var theSalt = this.aSalt

  //i need to check on whether this is allowed

  
  
  
  //console.log(theSalt)
  //var hashedPass = crypto.createHash('md5').update(password+theSalt).digest("hex")
  //var hashedPass = SHA256(password+theSalt)
  var hashedPass = md5(aPassword+ aSalt)


  //const hashedPass = hash(this.aPassword+this.aSalt)

  //res.send(hashedPass)
  return hashedPass
}





var sessionUser = {}
//const cookieKey = 'sid'
//cookieKey is declared higher up in the doc above the isLoggedIn function
function login(req,res){
  var username = req.body.username;
  var password = req.body.password;
  if (!username|| !password){
    ///potential user needs to have both a username and a password
    res.send('Missing a username or password')
    res.sendStatus(400)
    return
  }



  //verify login using facebook
  


  Users.find({username: username},(err,doc)=>{
    if (err){
    //res.status(400).send({error:err})
    console.log("NOPE SOMETHING IS AMISS" + error)
  }
  else{
    if(doc){

      console.log("AYYYYYYY!")
      var theDocument = doc
      var savedHash = doc[0].hash
      var savedSalt = doc[0].salt
      ///check to see whether the entered username and password match the ones on file

      
      var calculatedHash = getHash(password,savedSalt)
      console.log("doc"+doc)
      console.log("calculated Hash" +calculatedHash)
      console.log("username" + doc[0].username)
      console.log("saved salt" + savedSalt)
      console.log("saved Hash"+savedHash)
      var matching = (calculatedHash == savedHash)
      if(matching){
          //does it matter what i make my secret message??
          var theDate = new Date()
          var sessionKey = md5("topSecretMessage"+ (theDate).getTime() + username)
          console.log("session key" + sessionKey)
           //should this user information be the from the Users collection still? Or from the Profiles collection?
           

           //what was this line supposed to do exactly?
           sessionUser.sessionKey = doc




           ////../////..//////...//////....
          //this sets a cookie
          res.cookie(cookieKey,sessionKey,{maxAge:3600*1000 ,httpOnly:true})
          //res.cookie(cookieKey,generateCode(userObj),{maxAge:3600*1000,httpOnly:true})
          var msg = {username:username, result:'success'}
          res.send(msg)
        }
        if (!matching){
          res.send({username:username, result: "User name and password not on file"})
        }
      }
      else{
        console.log("close, but no doc")
        res.send("Only Registered Users may log in. Please first register.")
      }

    }
  })
}
 




   
const putPassword = (req,res) => {
  
  //change the password for the logged in user

  const newPassword = req.body.password
  
  //update their headline tag in the profiles list
  var passwordDict = {username:"jmb27", result:"success"}
  //profile.profiles[loggedInUser].password = newPassword
  //here we are updating

  

  //i need to find the userId from the profileId basically to update and somehow get the userid


  Users.find({username:"jmb27"},(err,doc)=>{
  if (err){
    //res.status(400).send({error:err})
    console.log("nope")
  }
  else{
    if(doc){
      
      console.log("the doc unchanged")
      console.log(doc)
      console.log("new password"+newPassword)
      console.log("hashes before and after")
      //console.log(getHash("dchapeme",doc.salt))
      //console.log(getHash("dougey32",doc.salt))

      var newHash = getHash(newPassword, doc[0].salt)
      console.log("hash" + newHash)
      Users.findOneAndUpdate({username:"jmb27"},{hash:newHash},{new:true},(err,doc)=>{
        if (err){
        //res.status(400).send({error:err})
        console.log("nope")
        }
       else{
         if(doc){
      
          console.log("changed Doc")
          console.log(doc)
         }
        else{
           console.log("close")
        }
      }
    })



   }
   else{
      console.log("close, but no doc")
    }
  }})
  res.send(passwordDict)
  

}




//should i really have app.use here...since there is no app.use, or should i put these in the index file...?
//app.use(passport.initialize())
//app.use(passport.session())


module.exports = (app) => {
  
  app.get('/',(req,res)=>{res.send({a:"hello world"})})
  
  app.post('/login',login);
  app.post('/register',register)
  //app.put('/password',cookieParser???, isLoggedIn, putPassword);
  app.put('/password', putPassword);

  app.put('/logout',isLoggedIn, logout);
  //app.get('/profileId/username/email',getProfileId);
  app.get('/profileId/:username?/:email?',getProfileId);



  //these are the facebook login functions



app.get('/auth/facebook',
  //This bit is giving
  

  //passport.initialize()
  //passport.session()
  passport.authenticate('facebook', { scope: ["public_profile","email"] })
 
  );

//I'm actually not really sure about what this function should do...?????//

app.get('/auth/facebook/callback',
  //passport.initialize()
  //passport.session()
  passport.authenticate('facebook', { successRedirect: '/#/main',failureRedirect: '/#/app' }),
  );

  //STILL GOTTA IMPLEMENT THIS GUY
  //app.put('/logout',isLoggedIn,logout)
  
}








-----------------



//require('./profile.js')
require('.././model.js')
require('.././db.js')
require('.././index.js')
var md5 = require('md5')

var crypto = require('crypto')
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
//passport = require('passport')
//FacebookStrategy = require('passport-facebook').Strategy;


//const redis = require('redis').createClient(process.env.REDIS_URL);
//clears memory cache
//redis.hmset('sessions',sid,JSON.stringify(userObj));
//redis.hgetall('sessions',function(err,object){});

var mongoose = require('mongoose')

///Users Schema

var usersSchema = new mongoose.Schema({
  theId: String, username: String, salt: String, hash: String, withFacebook:String
})

Users  = mongoose.model('User', usersSchema,'Users')






passport.use(new FacebookStrategy({
    clientID: '255624345124187',
    clientSecret: '761281126376107b80267d9172b8f289',
    callbackURL: "http://jolisabookapp.surge.sh/auth/facebook/callback",
    profileFields: ['emails']
  },
  function(accessToken, refreshToken, profile, done) {
    
    if (profile){
      console.log("PROFILE" + profile)
      console.log("DISPLAY NAME" + profile.dislayName)
      

      //DETERMINE if there is already user who has this info
      Users.findOne({ email: profile.email}, function(err, doc){
      if (err){
      //res.status(400).send({error:err})
      console.log("nope, an error")
      }
      else{
        if (!err &&!doc){
         console.log("close, but no doc")
         //this means we just create a new profile for them (Still to be done)
         Users.create({ theId:" ", username: profile.displayName, salt: " ", hash:" " }, function (err, small) {
           if (err) return handleError(err);
            // saved!
           });




        }

       if(doc){
      
         console.log("AYYYYYYY! We have a doc.")
         //send the document to a      
       }
      
      }
   
     })
      
//AND IF THERE IS NO PROFILE TO CHECK ON , then...//
    }
    else{
      console.log("NO PROFILE AVAILABLE")
    
     ///AT THIS POINT SHOULD I TRY TO REDIRECT TO MAIN ? OR DOES auth/facebook/callback do that??
    }

    //
  }
));










var cookieKey = 'sid'
function isLoggedIn(req,res,next) {
  var sid = req.cookies[cookieKey]
  if (!sid){
    return res.sendStatus(401)
  }
  var username = sessionUser[sid]
  if (username){
    req.username = username
    next()

  }else{
    res.sendStatus(401)
  }
}

var theCount;
function countUsers(){
  //var theCount = 0
  //count;
  Users.countDocuments({}, function( err, count){
    //console.log( "Number of posts:", count )
    theCount = (count).toString()
    console.log("count" + count)
    console.log("theCount inside function")
    return (count);
    })
    console.log("theCount outside function" + theCount)
return theCount
}


function logout(req,res){
  //sesionUser.sessionKey = {}
  res.send("OK")

}


const getProfileId = (req,res) => {
  //get the profileId using the provided username and password
  //can get requests have two parameters??

  //const user = 1
  const username = req.params.username
  const email = req.params.email
  var userProfile = {}

  //var userDob = {username:user, dob:"tbd"}

  if (!username){
    res.send('username needed')
  }
  if (!email){
    res.send('email needed')
  }
  
  if (username && email){
    Profiles.findOne({"username":username, "email":email }, function(err, doc){
     if (err){
    //res.status(400).send({error:err})
    console.log("nope")
     }
     else{
       if(doc){
      
         console.log("AYYYYYYY!, we've got a doc")
         
         userProfile.username = doc.username
         userProfile.profileId = doc._id
         
         res.send( userProfile)

    }
      else{
         console.log("close, but No Doc with matching email and username")
         userProfile = {username:username, profileId:"none"}
         res.send( userProfile)
    }
  }})





    //userZipcode.zipcode = profile.profiles[parseInt(user)].zipcode
    
  }
}


function register(req,res){
  
  //const aUsername = "a username"
  const aUsername = req.body.username
  var password = req.body.password
  
  const registerDict = {username: aUsername}

   var totalUsers = 0
  
  //console.log("theCount" + theCount)
  //totalUsers = countUsers()
  //console.log("total Users"+ totalUsers)

  const mongoUser = {username:aUsername}
  const mongoProf = {username: aUsername, headline:"Today is the best day ever.", avatar:"" ,following:[], theId:"", email:req.body.email, dob:req.body.dob, zipcode:req.body.zipcode}

  /*require('crypto').randomBytes(48, function(err, buffer) {
    var salt = buffer.toString('hex');
  });*/

  salt = require('crypto').randomBytes(16).toString('base64')

  //var salt =  new Date.getTime() + username
  
  var hash = getHash(password,salt)
  


  //insert a new document into the user collection and profile with the following information



  console.log(salt)
  console.log(hash)
  mongoUser.salt = salt
  mongoUser.hash = hash


  //db.users.insert(mongoUser)
  //db.profiles.insert(mongoProf)
  
  console.log(mongoUser)
  console.log(mongoProf)


 //add mongoUser to Users collection

  var newUser = new Users( mongoUser)
     //myPosts[posts].append(newArticle)
      
      newUser.save((function (err, result) {
        if (err) {
          console.log("whoopsies")
        }
        else{
          console.log("yayyayay, new User uploaded")
        }
        ;
          // saved!
        }));

 //add mongoProf to Profiles collection
   var newProfile = new Profiles( mongoProf)
     //myPosts[posts].append(newArticle)
      
      newProfile.save((function (err, result) {
        if (err) {
          console.log("whoopsies")
        }
        else{
          console.log("yayyayay, new Profile uploaded")

        }
        ;
          // saved!
        }));


  registerDict.result = "success"

  res.send(registerDict)

}

function getHash (aPassword, aSalt){
  //takes a dictionary with a password and salt and returns the hashed version
  var password = this.aPassword
  var theSalt = this.aSalt

  //i need to check on whether this is allowed

  
  
  
  //console.log(theSalt)
  //var hashedPass = crypto.createHash('md5').update(password+theSalt).digest("hex")
  //var hashedPass = SHA256(password+theSalt)
  var hashedPass = md5(aPassword+ aSalt)


  //const hashedPass = hash(this.aPassword+this.aSalt)


  return hashedPass
}





var sessionUser = {}
//const cookieKey = 'sid'
//cookieKey is declared higher up in the doc above the isLoggedIn function
function login(req,res){
  var username = req.body.username;
  var password = req.body.password;
  if (!username|| !password){
    ///potential user needs to have both a username and a password
    res.send('Missing a username or password')
    res.sendStatus(400)
    return
  }



  //verify login using facebook
  


  Users.find({username: username},(err,doc)=>{
    if (err){
    //res.status(400).send({error:err})
    console.log("nope" + error)
  }
  else{
    if(doc){

      console.log("AYYYYYYY!")
      var theDocument = doc
      var savedHash = doc[0].hash
      var savedSalt = doc[0].salt
      ///check to see whether the entered username and password match the ones on file

      
      var calculatedHash = getHash(password,savedSalt)
      console.log("doc"+doc)
      console.log("calculated Hash" +calculatedHash)
      console.log("username" + doc[0].username)
      console.log("saved salt" + savedSalt)
      console.log("saved Hash"+savedHash)
      var matching = (calculatedHash == savedHash)
      if(matching){
          //does it matter what i make my secret message??
          var theDate = new Date()
          var sessionKey = md5("topSecretMessage"+ (theDate).getTime() + username)
          console.log("session key" + sessionKey)
           //should this user information be the from the Users collection still? Or from the Profiles collection?
           

           //what was this line supposed to do exactly?
           sessionUser.sessionKey = doc




           ////../////..//////...//////....
          //this sets a cookie
          res.cookie(cookieKey,sessionKey,{maxAge:3600*1000 ,httpOnly:true})
          //res.cookie(cookieKey,generateCode(userObj),{maxAge:3600*1000,httpOnly:true})
          var msg = {username:username, result:'success'}
          res.send(msg)
        }
        if (!matching){
          res.send({username:username, result: "User name and password not on file"})
        }
      }
      else{
        console.log("close, but no doc")
        res.send("Only Registered Users may log in. Please first register.")
      }

    }
  })
}
 




   
const putPassword = (req,res) => {
  
  //change the password for the logged in user

  const newPassword = req.body.password
  
  //update their headline tag in the profiles list
  var passwordDict = {username:"jmb27", result:"success"}
  //profile.profiles[loggedInUser].password = newPassword
  //here we are updating

  


  Users.find({username:"jmb27"},(err,doc)=>{
  if (err){
    //res.status(400).send({error:err})
    console.log("nope")
  }
  else{
    if(doc){
      
      console.log("the doc unchanged")
      console.log(doc)
      console.log("new password"+newPassword)
      console.log("hashes before and after")
      console.log(getHash("dchapeme",doc.salt))
      console.log(getHash("dougey32",doc.salt))

      var newHash = getHash(newPassword, doc[0].salt)
      console.log("hash" + newHash)
      Users.findOneAndUpdate({username:"jmb27"},{hash:newHash},{new:true},(err,doc)=>{
        if (err){
        //res.status(400).send({error:err})
        console.log("nope")
        }
       else{
         if(doc){
      
          console.log("changed Doc")
          console.log(doc)
         }
        else{
           console.log("close")
        }
      }
    })



   }
   else{
      console.log("close, but no doc")
    }
  }})
  res.send(passwordDict)
  

}




//should i really have app.use here...since there is no app.use, or should i put these in the index file...?
//app.use(passport.initialize())
//app.use(passport.session())


module.exports = (app) => {
  
  app.get('/',(req,res)=>{res.send({a:"hello world"})})
  
  app.post('/login',login);
  app.post('/register',register)
  //app.put('/password',cookieParser???, isLoggedIn, putPassword);
  app.put('/password', putPassword);
  app.put('/logout',isLoggedIn, logout);
  //app.get('/profileId/username/email',getProfileId);
  app.get('/profileId/:username?/:email?',getProfileId);



  //these are the facebook login functions



app.get('/auth/facebook',
  //This bit is giving
  

  //passport.initialize()
  //passport.session()
  passport.authenticate('facebook', { scope: ["public_profile","email"] })
 
  );

//I'm actually not really sure about what this function should do...?????//

app.get('/auth/facebook/callback',
  //passport.initialize()
  //passport.session()
  passport.authenticate('facebook', { successRedirect: '/#/main',failureRedirect: '/#/app' }),
  );

  //STILL GOTTA IMPLEMENT THIS GUY
  //app.put('/logout',isLoggedIn,logout)
  
}





