
require('.././model.js')
require('.././db.js')
require('.././index.js')
const uploadImage = require('.././uploadCloudinary')
//require('.././index.js')
var mongoose = require('mongoose')


/////give it some space


///Profiles Schema
var profilesSchema = new mongoose.Schema({
  username:String, id: String, headline: String, email: String, following: Array, dob: Date, zipcode: Number, avatar: String,
  
})

//mongoose.model('Profile', profilesSchema)
Profiles = mongoose.model('Profile', profilesSchema,"Profiles")
exports.Profiles = mongoose.model('Profile', profilesSchema,"Profiles")


 


//var Profile = mongoose.model('Profile')




//var Profile = mongoose.model('Profile', profilesSchema,"Profiles")





//exports.ProfileCollection = mongoose.model('profiles', profilesSchema,"Profiles")





//require('.././db.js')
//require('.././model.js')
//require('.././index.js')
//var mongoose = require('mongoose')

const loggedInUser = "5be3200de7179a33cc151eb4"




const getHeadlines = (req,res) => {
  //get the headlines for multiple users and return a dictionary
  var i;
  headlinesDict = {headlines:[]}
  //checks to see whether there are any users in profile--actually, i dont need to do that

 //users = [0,1,2,3,4,5]   
 var users = req.params.users
 console.log("these are the users"+users)
  
if (!users){
  res.send({headlines:["no users"]})
}

 if (users){
  //users = users.slice(1,-1)
  console.log("these are the users"+ users)
  users = users.split(',')
  var usersNeeded = users.length

  console.log("these are the users"+users)
  console.log("user lenght" + users.length)
  for (i= 0; i<users.length; i++){
  //for(user in users){
    console.log("This is the users at [i]"+users[i])
    Profiles.findById(users[i], function(err, doc){
     if (err){
    //res.status(400).send({error:err})
    console.log("nope")
     }
     else{
       if (!err &&!doc){
         console.log("close")
         usersNeeded -= 1
         console.log(usersNeeded)
        }

       if(doc){
      
         console.log("AYYYYYYY!")
         var theDocument = doc
         //check to see whether the headline looks like ' \'erw\'\n'


         headlinesDict.headlines.unshift({username:doc.username, headline:doc.headline})
         console.log(doc)
         var check = users.length 
         console.log(headlinesDict)      
       }
      
      }
    if (usersNeeded == headlinesDict.headlines.length){
            res.send(headlinesDict)
           
     }
})
    i+=1
  }
  console.log("exited the for loop")
 
 }  
 }
 






const putHeadline = (req,res) => {
  console.log("backend friend")
  //update the headline for the logged in user
  const newHeadline = (req.body.headline) 
  var newHeadlineDict = {}
  //findOneandUpdate({theId:"0"},
  //findByIdAndUpdate("5be3200de7179a33cc151eb4"
  Profiles.findByIdAndUpdate("5be3200de7179a33cc151eb4",{headline:newHeadline},{new:true},(err,doc)=>{
  if (err){
    //res.status(400).send({error:err})
    console.log("nope"  )
  }
  else{
    if(doc){
      
      console.log("AYYYYYYY!")
      //var theDocument = doc
      console.log(doc.headline)
      console.log(doc.username)
      newHeadlineDict.headline = doc.headline
      console.log(newHeadlineDict)
      newHeadlineDict.username = doc.username
      console.log(newHeadlineDict)
      console.log(newHeadlineDict)
      res.send(newHeadlineDict)
    }
    else{
      console.log("close")
    }
  }})
 //newHeadlineDict = {username:loggedInUser, headline: newHeadline}





}






const getEmail = (req,res) => {
  //get the email address for the requested user

  //const user = 1
  const user = req.params.user


  var userEmail = {username:user, email:"heya"}
  if (user){
    //console.log("Here we are 1"+ profile.profiles[0].email)
    //userEmail.email= profile.profiles.user.email
    //console.log("Here we are"+ userEmail.username)
    Profiles.findById(loggedInUser, function(err, doc){
     if (err){
    //res.status(400).send({error:err})
    res.send({username:user, email:"error"})
    console.log("nope")
     }
     else{
       if(doc){
      
         userEmail.email = doc.email
         console.log(userEmail)
         res.send(userEmail)

    }
      else{
         console.log("close")
         res.send({username:user, email:"no doc available"})
    }
  }})



    

    
  }
  




}

const putEmail = (req,res) => {
  //update the email addres for the logged in user
  
  //{email:"heb23@rice.edu"}
  //const newEmailAddress = "heb23@rice.edu" 
  const newEmailAddress = req.body.email 
  var newEmail = {username:"tbd", email:'tbd'}

  Profiles.findByIdAndUpdate(loggedInUser,{email:newEmailAddress},{new:true},(err,doc)=>{
  if (err){
    //res.status(400).send({error:err})
    console.log("nope")
  }
  else{
    if(doc){
      
      console.log("AYYYYYYY!")
      var theDocument = doc
      console.log(doc.email)
      newEmail.email = doc.email
      newEmail.username = doc.username
      res.send(newEmail)
    }
    else{
      console.log("close")
    }
  }})


   
   //update profile records
  //profile.profiles[loggedInUser].email = newEmailAddress

  //newEmail.email = newEmailAddress
   
  
  
}

const getZipcode = (req,res) => {
  //get the zipcode for the requested user

  //const user = 1
  const user = req.params.user
  console.log("user" + user)

  if (!user){
    res.send({username:user, zipcode:" "})
  }

  var userZipcode = {username:user, zipcode:"tbd"}

  if (user){
    Profiles.findById(user, function(err, doc){
     if (err){
    //res.status(400).send({error:err})
    console.log("nope")
     }
     else{
       if(doc){
      
         console.log("AYYYYYYY!")
         var theDocument = doc
         userZipcode.username = doc.username
         userZipcode.zipcode = doc.zipcode
         res.send(userZipcode)

    }
      else{
         console.log("close, but No Match")
         res.send({username:user, zipcode:"no available doc."})
    }
  }})
    
  }

}


const putZipcode = (req,res) => {
  
  //update the zipcode for the logged in user
  const newZipcode = req.body.zipcode
  var aNewZipcode = {username:"tbd",zipcode:"tbd"}
 

 Profiles.findByIdAndUpdate(loggedInUser,{zipcode:newZipcode},{new:true},(err,doc)=>{
  if (err){
    res.status(400).send({error:err})
    console.log("nope")
  }
  else{
    if(doc){
      
      console.log("AYYYYYYY!")
      var theDocument = doc
      console.log(doc.zipcode)
      aNewZipcode.zipcode = doc.zipcode
      aNewZipcode.username = doc.username
      res.send(aNewZipcode)
    }
    else{
      console.log("close")
      res.send("no doc available")
    }
  }})

  //res.send(anewZipcode)
}

const getDob = (req,res) => {
  //get the date of birth in milliseconds for the requested user

  //const user = 1
  const user = req.params.user

  var userDob = {username:user, dob:"tbd"}

  if (!user){
    res.send('')
  }

  if (user){
    Profiles.findById(user, function(err, doc){
     if (err){
    //res.status(400).send({error:err})
    res.send("error")
    console.log("nope")
     }
     else{
       if(doc){
      
         console.log("AYYYYYYY!")
         var theDocument = doc
         userDob.dob = doc.dob
         userDob.username = doc.username
         res.send(userDob)

    }
      else{
         console.log("close, but No Match")
         res.send({username:user, dob:"no available doc"})
    }
  }})
  }
 } 



/*const getProfileId = (req,res) => {
  //get the profileId using the provided username and password
  //can get requests have two parameters??

  //const user = 1
  const username = req.params.username
  const password = req.params.password

  //var userDob = {username:user, dob:"tbd"}

  if (!username){
    res.send('username needed')
  }
  if (!password){
    res.send('password needed')
  }

  if (username){
    Users.findOne(user, function(err, doc){
     if (err){
    //res.status(400).send({error:err})
    console.log("nope")
     }
     else{
       if(doc){
      
         console.log("AYYYYYYY!")
         var theDocument = doc
         userDob.dob = doc.dob
         userDob.username = doc.username
         res.send(userDob)

    }
      else{
         console.log("close, but No Match")
    }
  }})





    //userZipcode.zipcode = profile.profiles[parseInt(user)].zipcode
    
  }
}*/

const getAvatars = (req,res) => {
  //get the avatar for the requested user(s)

  //const user = 1
  var user = req.params.user
  

  //its a dictionary with key avatars, value dictionaries that contain username and avatar
  var userAvatar = {avatars:[]}
  if (user){
    //checking to see if user is a number
    console.log(user)
    console.log(user.indexOf(','))
    console.log(user.indexOf(',') ==-1)
    if (user.indexOf(',')==-1){
      

      Profiles.findById(user, function(err, doc){
      if (err){
      //res.status(400).send({error:err})
      console.log("nope")
      res.send("error")
       }
    
      if(doc){
      
        console.log("AYYYYYYY!")
        var theDocument = doc
        console.log(doc)
        userAvatar.avatars.unshift({username:doc.username, avatar:doc.avatar})
        console.log(userAvatar)
        res.send(userAvatar)

      }
      else{
         console.log("close, but No Match")
         //res.send("no available doc")
      }
    })
    }
    //checking to see if user is in list object form
    if (user.indexOf(',')!==-1){
      //turn the string from the param into an actual list object

      console.log("AYYYYYYY, a list!")
      user = user.slice(1,-1)
      user = user.split(',')
      console.log(user)
      var totalNeeded = user.length
      console.log("totalNeeded" + totalNeeded)
      var champ = 0
      for (i= 0; i<user.length; i++){
        champ+=1
        console.log("champ" + champ)
        console.log(i)
        
      Profiles.findById(loggedInUser, function(err, doc){
      console.log("happy" + i)
      if (err){
      //res.status(400).send({error:err})
      console.log("nope")
       }
     if(!err&&!doc){
         console.log("close, but No Match")
         console.log(totalNeeded)
         totalNeeded-=1

      }
      if(doc){
      
        console.log("AYYYYYYY!")
        var theDocument = doc
        //console.log(doc)
        userAvatar.avatars.unshift({username:doc.username, avatar:doc.avatar})

      }
    if (userAvatar.avatars.length== totalNeeded){
          console.log("we finally made ir" )
          console.log(doc)
          console.log(userAvatar)
          res.send(userAvatar) 

        }
      
    }) 
    }
    
  }
    
  }
  
}

const putAvatar = (req,res) => {
  
  //update the avatar for the logged in user

   //{avatar: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpickaface.net%2Fgallery%2Favatar%2Fsara.lee.3994854dbe74d74861.png&imgrefurl=https%3A%2F%2Fpickaface.net%2Favatar%2F83551%2Fjane%2Bdoe.html&docid=SBDL0-BG1pq0HM&tbnid=Lw-tfifm1rJyJM%3A&vet=10ahUKEwiVsK6mubveAhUf3YMKHcFyBwsQMwhXKAgwCA..i&w=215&h=215&itg=1&client=safari&bih=822&biw=1375&q=jane%20doe%20avatar&ved=0ahUKEwiVsK6mubveAhUf3YMKHcFyBwsQMwhXKAgwCA&iact=mrc&uact=8"}  
  
  //const newAvatar = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpickaface.net%2Fgallery%2Favatar%2Fsara.lee.3994854dbe74d74861.png&imgrefurl=https%3A%2F%2Fpickaface.net%2Favatar%2F83551%2Fjane%2Bdoe.html&docid=SBDL0-BG1pq0HM&tbnid=Lw-tfifm1rJyJM%3A&vet=10ahUKEwiVsK6mubveAhUf3YMKHcFyBwsQMwhXKAgwCA..i&w=215&h=215&itg=1&client=safari&bih=822&biw=1375&q=jane%20doe%20avatar&ved=0ahUKEwiVsK6mubveAhUf3YMKHcFyBwsQMwhXKAgwCA&iact=mrc&uact=8"
  
  
  //the question now is whether this is the right way to access the new avatar since it's a form instead of a dictionary
  const newAvatar = req.body.avatar
  //should i be identifying the logged in user myself? or getting this info from somewhere 
  //update their headline tag in the profiles list
  var avatarDict = {username:"tbd", avatar:"tbd"}
  //profile.profiles[loggedInUser].avatar = newAvatar
  //avatarDict.avatar = newAvatar
 

  Profiles.findByIdAndUpdate(loggedInUser,{avatar:newAvatar},{new:true},(err,doc)=>{
  if (err){
    //res.status(400).send({error:err})
    console.log("nope" + err)
    res.send({username:"none", avatar:"none"})
  }
  else{
    if(doc){
      
      console.log("AYYYYYYY!")
      var theDocument = doc
      console.log(doc.avatar)
      avatarDict.avatar = doc.avatar
      avatarDict.username = doc.username
      res.send(avatarDict)
    }
    else{
      console.log("close")
      res.send({username:"none", avatar:"none"})
    }
  }}) 
  

}



const uploadAvatar = (req,res) => {
  
  //update the avatar for the logged in user

   //{avatar: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpickaface.net%2Fgallery%2Favatar%2Fsara.lee.3994854dbe74d74861.png&imgrefurl=https%3A%2F%2Fpickaface.net%2Favatar%2F83551%2Fjane%2Bdoe.html&docid=SBDL0-BG1pq0HM&tbnid=Lw-tfifm1rJyJM%3A&vet=10ahUKEwiVsK6mubveAhUf3YMKHcFyBwsQMwhXKAgwCA..i&w=215&h=215&itg=1&client=safari&bih=822&biw=1375&q=jane%20doe%20avatar&ved=0ahUKEwiVsK6mubveAhUf3YMKHcFyBwsQMwhXKAgwCA&iact=mrc&uact=8"}  
  
  //const newAvatar = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpickaface.net%2Fgallery%2Favatar%2Fsara.lee.3994854dbe74d74861.png&imgrefurl=https%3A%2F%2Fpickaface.net%2Favatar%2F83551%2Fjane%2Bdoe.html&docid=SBDL0-BG1pq0HM&tbnid=Lw-tfifm1rJyJM%3A&vet=10ahUKEwiVsK6mubveAhUf3YMKHcFyBwsQMwhXKAgwCA..i&w=215&h=215&itg=1&client=safari&bih=822&biw=1375&q=jane%20doe%20avatar&ved=0ahUKEwiVsK6mubveAhUf3YMKHcFyBwsQMwhXKAgwCA&iact=mrc&uact=8"
  
  
  //the question now is whether this is the right way to access the new avatar since it's a form instead of a dictionary
  const newAvatar = req.body.avatar
  //should i be identifying the logged in user myself? or getting this info from somewhere 
  //update their headline tag in the profiles list
  var avatarDict = {username:"tbd", avatar:"tbd"}
  //profile.profiles[loggedInUser].avatar = newAvatar
  //avatarDict.avatar = newAvatar
 

  Profiles.findByIdAndUpdate(loggedInUser,{avatar:newAvatar},{new:true},(err,doc)=>{
  if (err){
    //res.status(400).send({error:err})
    console.log("nope" + err)
    res.send({username:"none", avatar:"none"})
  }
  else{
    if(doc){
      
      console.log("AYYYYYYY!")
      var theDocument = doc
      console.log(doc.avatar)
      avatarDict.avatar = doc.avatar
      avatarDict.username = doc.username
      res.send(avatarDict)
    }
    else{
      res.send({username:"none", avatar:"none"})
    }
  }}) 
  

}





module.exports = (app) => {
  
  app.get('/headlines/:users?',getHeadlines);
  app.put('/headline',putHeadline);
  app.get('/email/:user?', getEmail);
  app.put('/email',putEmail);
  app.get('/zipcode/:user?', getZipcode);
  app.put('/zipcode',putZipcode);
  app.get('/dob/:user?', getDob);
  app.get('/avatars/:user?',getAvatars);


  //should this one here basically do the same as what putAvatar used to do?? aka should i just make uploadAvatar a copy of putAvatar?
  //app.put('/avatar', uploadImage('avatar'), uploadAvatar);
  app.put('/avatar',putAvatar)


}