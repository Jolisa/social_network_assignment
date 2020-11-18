
 
 loggedInUser = "5bffe399e7179a6ca07f1bef"



const getFollowers = (req,res) => {
  //get the list of users being followed by the requested user
  //5be3200de7179a33cc151eb4 -- that's the id for the loggedInUser
  

  const user = req.params.user
  console.log("user" + user)

  if (!user){
    res.send('No user has been provided')
  }

  var userFollowers = {username:user, following:"tbd"}

  if (user){
    Profiles.findById(user, function(err, doc){
     if (err){
    //res.status(400).send({error:err})
    console.log("nope")
     }
     else{
       if(doc){
      
         console.log("AYYYYYYY!")
         //userFollowers.username = doc.username
         userFollowers.following = doc.following
         res.send(userFollowers)

    }
      else{
         console.log("close, but No Match")
    }
  }})
    
  }

}



const getFollowersAndFollowerInfo = (req,res) => {
  //get the list of users being followed by the requested user
  //5be3200de7179a33cc151eb4 -- that's the id for the loggedInUser
  

  const user = req.params.user
  ////console.log("user" + user)

  

  if (!user){
    res.send('No user has been provided')
  }

  var userFollowers = {username:user, following:[]}

  if (user){
    Profiles.findById(user, function(err, doc){
     if (err){
    //res.status(400).send({error:err})
    ////console.log("nope")
     }
     else{
       if(doc){
      
         console.log("AYYYYYYY1!")
         //userFollowers.username = doc.username
         //userFollowers.followers = doc.following
         //res.send(userFollowers)
         var followersNeeded = doc.following.length
         followers = doc.following
         ////console.log("this is the complete followers list" + followers)

         for (i=0; i < doc.following.length; i++){
           ////console.log("trying to see followers here. " + followers)
           //create a dict with structure {username:user, followers:[{username: user, headline: headline, avatar: avatar}]}
           console.log("This is the current follower " + doc.following[i])
           Profiles.findOne({username:doc.following[i]}, function(err, doc2){
            ////console.log("trying to see followers here2. " + followers)
            if (err){
            //res.status(400).send({error:err})
            ////console.log("nope")
            }
            else{
              ////console.log("trying to see followers here3. " + followers)
              if(doc2){
                console.log("This is the current follower " + i + " " + doc.following[i])
                var followerInfo = {username:doc2.username, headline: doc2.headline, avatar: doc2.avatar}
                ////console.log("here is follower info" + followerInfo)
                userFollowers.following.unshift(followerInfo)
                //console.log("this is the user following " + userFollowers.following)

              }
              else{
                //console.log("trying to see followers here4. " + followers + i+ userFollowers.following.length)
                //console.log("close, but no doc2")
                //console.log("here is followers[i]" + followers[userFollowers.following.length])
                var followerInfo = {username: followers[userFollowers.following.length], headline: '', avatar: 'https://vignette.wikia.nocookie.net/tumblr-survivor-athena/images/7/7a/Blank_Avatar.png/revision/latest?cb=20161204161729'}
                userFollowers.following.unshift(followerInfo)
                //console.log("here is follower info" + followerInfo)
                //console.log("this is the user following, though no user in profiles " + [userFollowers.following.length]+ " "+ userFollowers.following)
              }
              if (followersNeeded == userFollowers.following.length){
                console.log(userFollowers)
                res.send(userFollowers)}
            }})
         }
    }
      else{
         console.log("close, but No Match")
    }
  }})
    
  }

}




                               

const putUser = (req,res) => {
  //add user to the following list for the logged in user(with logged in user represented as a profile id)
  //const  user = 1
  var user = (req.params.user).toString()
  var userFollowing = {username:user}

  //var loggedinUser = 0
  if (user){
   Profiles.findById(loggedInUser, function(err, doc){
     if (err){
    //res.status(400).send({error:err})
    console.log("nope1 "+ err)
     }
     else{
       if(doc){
         //get the list of currently followed individuals and append the new User user
         var currentFollowing = doc.following
         //not quite this simple, i still have to go into the profiles collection to identify this user
         //currentFollowing.push(user)
         //console.log(currentFollowing)
           Profiles.findById(user, function(err2, doc){
            if (err2){
            //res.status(400).send({error:err})
            res.send('not a user on file')
            console.log("nope2 "+ err2)
            }
          else{
            if(doc){

              console.log("This is the user." + user)
              user = doc.username
              console.log("This is the user's name." + user)
              currentFollowing.push(user)
              console.log(currentFollowing)

                 //now go into the database and update

         Profiles.findByIdAndUpdate(loggedInUser,{following:currentFollowing},{new:true},(err3,doc)=>{
           if (err3){
            //res.status(400).send({error:err})
            console.log("nope, there's an error " + err3  )
            }
            else{
              if(doc){
                //userFollowing.username = doc.username
                console.log("AYYYYYYY! WE got a doc.")
                userFollowing.following = doc.following
                res.send(userFollowing)
                
              }
              else{
                  console.log("close but no doc")
              }
              }})
         /////done updating in the database, the rest of code is just for alternate cases

            }
           else{
              res.send('not a user on file')
              console.log("This individual is not a registered user and cannot be added as a friend. Invite them to join!")
          }
          }})
                

    }
      else{
         console.log("close but no doc")
    }
  }})
 
  }
else{
  res.send("No user id was provided.")
}}

const deleteUser = (req,res) => {
  //delete user from the following list for the logged in user(with logged in user represented as a user id)
  

  var user = req.params.user
  var userFollowing = {username:user}

  
  if (user){
   Profiles.findById(loggedInUser, function(err, doc){
     if (err){
    //res.status(400).send({error:err})
    console.log("nope")
     }
     else{
       if(doc){
         //get the list of currently followed individuals and remove the unwanted User user
         var currentFollowing = doc.following

          //we figure out now who what this user's actual name is based on their profile id
          Profiles.findById(user, function(err, doc){
            if (err){
            //res.status(400).send({error:err})
            console.log("nope")
            }
          else{
            if(doc){

              console.log("This is the user." + user)
              user = doc.username
              var index = currentFollowing.indexOf(user)
               //remove all instances of the unwanted User from the follower list    
              currentFollowing.splice(index,1)
              console.log(currentFollowing)
              console.log("This is the user's name." + user)
              //now go into the database and update
              


         Profiles.findByIdAndUpdate(loggedInUser,{following:currentFollowing},{new:true},(err,doc)=>{
           if (err){
            //res.status(400).send({error:err})
            console.log("nope, there's an error " + error  )
            }
            else{
              if(doc){
                //userFollowing.username = doc.username
                console.log("AYYYYYYY! WE got a doc.")
                userFollowing.following = doc.following
                res.send(userFollowing)
                
              }
              else{
                  console.log("close but no doc")
              }
              }})
         /////done updating in the database, the rest of code is just for alternate cases

            }
           else{
              console.log("close,but no input user doc")
          }
          }})

                

    }
      else{
         console.log("close but no doc")
    }
  }})
 
  }
else{
  res.send("No user id was provided.")
}}
  

  









module.exports = (app) => {
  app.get('/following/:user?',getFollowers) 
  app.get('/followingInfo/:user?', getFollowersAndFollowerInfo)
  app.put('/following/:user',putUser)
  app.delete('/following/:user', deleteUser)
}