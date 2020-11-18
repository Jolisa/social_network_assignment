




var db = require('./connection.js');

const profile = {profiles:[{
  username: "jmb27",
  id: 0,
  status: "I feel so blessed to be alive.",
  email: "jmb27@rice.edu",
  following : ["Misha Mcdaniel", "Jonathon Johnson", "Ayodeji Akin", "KC Nwadaei", "Camy Pierre-Louis", "Bobby Brown", "Aria Allbright"],
  dob: "11021998",
  zipcode: "30331",
  avatar: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiDvNTmv7jeAhVjja0KHSLWDrAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.shareicon.net%2Fwoman-young-profile-people-girl-avatar-user-787498&psig=AOvVaw1TATodL_-9tALKZv5BYgZS&ust=1541343929830495",
},
{
  username: "Misha McDaniel",
  id: 1,
  headline: "I'm so happy.",
  email: "mm1@rice.edu",
  dob: "1289993724311",
  avatar: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiDvNTmv7jeAhVjja0KHSLWDrAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.shareicon.net%2Fwoman-young-profile-people-girl-avatar-user-787498&psig=AOvVaw1TATodL_-9tALKZv5BYgZS&ust=1541343929830495",
  following: [0,2,3,4,5],
  zipcode: 213213
},

{
  username: "Jonathon Johnson",
  id: 2,
  headline: "I'm so shooketh.",
  email: "mm1@rice.edu",
  dob: "1289993724311",
  avatar: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiDvNTmv7jeAhVjja0KHSLWDrAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.shareicon.net%2Fwoman-young-profile-people-girl-avatar-user-787498&psig=AOvVaw1TATodL_-9tALKZv5BYgZS&ust=1541343929830495",
  following: [0,1,3,4,5],
  zipcode: 323234
},

{
  username: "Ayodeji Akin",
  id: 3,
  headline: "I'm so fed up.",
  email: "mm1@rice.edu",
  dob: "1289993724311",
  avatar: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiDvNTmv7jeAhVjja0KHSLWDrAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.shareicon.net%2Fwoman-young-profile-people-girl-avatar-user-787498&psig=AOvVaw1TATodL_-9tALKZv5BYgZS&ust=1541343929830495",
  following: [0,1,2,4,5],
  zipcode: 323432
},

{
  username: "Aria Allbright",
  id: 4,
  headline: "I'm so lit.",
  email: "mm1@rice.edu",
  dob: "1289993724311",
  avatar: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiDvNTmv7jeAhVjja0KHSLWDrAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.shareicon.net%2Fwoman-young-profile-people-girl-avatar-user-787498&psig=AOvVaw1TATodL_-9tALKZv5BYgZS&ust=1541343929830495",
  following: [0,1,2,3,5],
  zipcode: 432124
},

{
  username: "Bobby Brown",
  id: 5,
  headline: "I'm so pumped.",
  email: "mm1@rice.edu",
  dob: "1289993724311",
  avatar: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiDvNTmv7jeAhVjja0KHSLWDrAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.shareicon.net%2Fwoman-young-profile-people-girl-avatar-user-787498&psig=AOvVaw1TATodL_-9tALKZv5BYgZS&ust=1541343929830495",
  following: [0,1,2,3,4],
  zipcode: 324216
}


]}


const getHeadlines = (req,res) => {
  //get the headlines for multiple users and return a dictionary
  var i;
  var headlinesDict = {headlines:[]}
  //checks to see whether there are any users in profile--actually, i dont need to do that

 //users = [0,1,2,3,4,5]   
 const users = req.params.users 

 if (users){
  
  for (i= 0; i<users.length; i++){
  const theHeadline = profile[profiles][users[i]][headline];


  //add user and their status info to an array called headlines to later be sent
  headlinesDict[headlines].unshift({username:users[i], headline:theHeadline})
  }

/*
//the version accessing mongodb profiles instead of hardcoded list
 var allProfiles = db.profiles.find()
 for (i= 0; i<allProfiles.length; i++){
  const theHeadline = allProfiles[i][headline];


  //add user and their status info to an array called headlines to later be sent
  headlinesDict[headlines].unshift({username:allProfiles[i][username], headline:theHeadline})
  }*/ 


 res.send(headlinesDict)
 }
  

}






const putHeadline = (req,res) => {
  //update the headline for the logged in user
  console.log("Teach me how to dougie!!!")
  //{headline:"I'm ecstatic for the new day."}  
  //const newHeadline = "I'm ecstatic for the new day."

  

  const newHeadline = (req.body)
  console.log("This is the query "+ req.query.headline)
  console.log(newHeadline)
  const loggedInUser = 0
  
  //update their headline tag in the profiles list in mongodb

  //errrrooorrr??
  
  db.profiles.update({id:loggedInUser}, {$set: {
       headline: newHeadline,
       }}) 


  //profile["profiles"][loggedInUser]["headline"] = newHeadline


  //profile[profiles][loggedInUser][headline] = req.body.headline

  

  //should I send this off as well, or is it sufficient just to update the info in the profile dictionary?
 res.send({username:loggedInUser, headline: newHeadline})
 // res.send("hello world")
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



    userEmail.email = profile.profiles[0].email

    

    res.send(userEmail)
  }
  




}

const putEmail = (req,res) => {
  //update the email addres for the logged in user
  
  //{email:"heb23@rice.edu"}
  const newEmailAddress = "heb23@rice.edu" 
  //const newEmailAddress = req.body.email
  

  var loggedinUser = 1
  if (user){
   
   var newEmail = {username:loggedInUser}

   //update profile records
   profile[profiles][loggedInUser][email] = newEmailAddress[email]

   newEmail[email] = profile[profiles][loggedInUser][email]
   
   res.send(newEmail)
  }
}

const getZipcode = (req,res) => {
  //get the zipcode for the requested user

  //const user = 1
  const user = req.params.user

  var userZipcode = {username:user}
  if (user){
    userZipcode[zipcode] = profile[profiles][user][zipcode]
    res.send(userZipcode)
  }
}


const putZipcode = (req,res) => {
  
  //update the zipcode for the logged in user

  //{zipcode:342421} 
  
  //const newZipcode = 342421 
  const newZipcode = req.body.zipcode

  //should i be identifying the logged in user myself? or getting this info from somewhere
  const loggedInUser = 0
  
  //update their headline tag in the profiles list

  profile[profiles][loggedInUser][zipcode] = newZipcode
  //profile[profiles][loggedInUser][headline] = req.body.headline


  //should I send this off as well, or is it sufficient just to update the info in the profile dictionary?
 res.send({username:loggedInUser, zipcode: newZipcode})
}

const getDob = (req,res) => {
  //get the date of birth in milliseconds for the requested user

  //const user = 1
  const user = req.params.user

  var userDob = {username:user}
  if (user){
    userDob[dob] = profile[profiles][user][dob]
    res.send(userDob)
  }
}

const getAvatars = (req,res) => {
  //get the avatar for the requested user(s)

  //const user = 1
  const user = req.params.user

  var userAvatar = {avatars:""}
  if (user){
    if (typeof user == number){
      //is this bit right??
      userAvatar[avatars][user] = profile[profiles][user][avatar]
      res.send(userAvatar)
    }
    if (typeof user == object){
      for (i= 0; i<users.length; i++){
        const theAvatar = profile[profiles][users[i]][avatar];

        //add user and their status info to an array called headlines to later be sent
        userAvatar[avatars].unshift({username:user[i], avatar:theAvatar})
  }
    }
    res.send(userAvatar)
  }
}

const putAvatar = (req,res) => {
  
  //update the avatar for the logged in user

   //{avatar: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpickaface.net%2Fgallery%2Favatar%2Fsara.lee.3994854dbe74d74861.png&imgrefurl=https%3A%2F%2Fpickaface.net%2Favatar%2F83551%2Fjane%2Bdoe.html&docid=SBDL0-BG1pq0HM&tbnid=Lw-tfifm1rJyJM%3A&vet=10ahUKEwiVsK6mubveAhUf3YMKHcFyBwsQMwhXKAgwCA..i&w=215&h=215&itg=1&client=safari&bih=822&biw=1375&q=jane%20doe%20avatar&ved=0ahUKEwiVsK6mubveAhUf3YMKHcFyBwsQMwhXKAgwCA&iact=mrc&uact=8"}  
  
  //const newAvatar = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpickaface.net%2Fgallery%2Favatar%2Fsara.lee.3994854dbe74d74861.png&imgrefurl=https%3A%2F%2Fpickaface.net%2Favatar%2F83551%2Fjane%2Bdoe.html&docid=SBDL0-BG1pq0HM&tbnid=Lw-tfifm1rJyJM%3A&vet=10ahUKEwiVsK6mubveAhUf3YMKHcFyBwsQMwhXKAgwCA..i&w=215&h=215&itg=1&client=safari&bih=822&biw=1375&q=jane%20doe%20avatar&ved=0ahUKEwiVsK6mubveAhUf3YMKHcFyBwsQMwhXKAgwCA&iact=mrc&uact=8"
  const newAvatar = req.body.avatar

  //should i be identifying the logged in user myself? or getting this info from somewhere
  const loggedInUser = 0
  
  //update their headline tag in the profiles list

  profile[profiles][loggedInUser][avatar] = newAvatar
  //profile[profiles][loggedInUser][headline] = req.body.headline


  //should I send this off as well, or is it sufficient just to update the info in the profile dictionary?
 res.send({username:loggedInUser, avatar: newAvatar})


}


module.exports = (app) => {
  app.get('/',(req,res)=>{res.send({a:"hello world"})})
  app.get('/headlines/:users?',getHeadlines);
  app.put('/headline',putHeadline);
  app.get('/email/:user?', getEmail);
  app.put('/email',putEmail);
  app.get('/zipcode/:user?', getZipcode);
  app.put('/zipcode',putZipcode);
  app.get('/dob/:user?', getDob);
  app.get('/avatars/user?',getAvatars);
    app.put('/avatar',putAvatar)


}