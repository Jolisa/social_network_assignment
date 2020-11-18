


require('./profile.js')
require('.././model.js')
require('.././db.js')
require('.././index.js')


var mongoose = require('mongoose')



///Articles Schema
var commentSchema = new mongoose.Schema({
  commentId: Number, author: String, date: Date, body: String
})
var postsSchema = new mongoose.Schema({
  theId: String, author: String, picture: String, date: Date, body: String,
  comments: [ commentSchema ]
})

//postsSchema.createIndex({ date: -1 });

//postsSchema.index({ date: -1});

Posts  = mongoose.model('Post', postsSchema,'Posts')
exports.Posts = mongoose.model('Post', postsSchema,'Posts')

/////give it some space







var myPosts = {posts: [
    {id:40,titles:"White House will not Limit Kavanaugh Probe", date:"10/1/2018", image:"assets/kavanaugh.jpeg" , author: "Misha Mcdaniel", comment: "They need to get rid of him already."},
    {id:41,titles:"Rice Investment Program Offeres Radical Changes in Financial Aid", date:"09/29/18", image:"none" , author: "Aria Allbright", "comment": "Wow, this will really change my life."},
    {id:42,titles:"Brazil Loses National Museum in Fire", date:"09/28/2018", image:"none" , author: "Bobby Brown", comment: "All that history lost. What a shame"},
    {id:43,titles:"Obama Coming to Baker Institute", date:"09/27/2018", image:"assets/Mr.Obama.jpg" , author: "Aria Allbright", comment: "I need an autograph!"},
    {id:44,titles:"McCain Funeral Brings Thousands of Attendees", date:"09/25/2018", image:"assets/mccaindaughter.jpeg" , "author": "Jojo Brown", comment: "He truly served well."},
    {id:45,titles:"Screw Yer Roommate Expected to Have Record Turnout", date:"09/24/2018", "image":"none" , author: "Misha Mcdaniel", comment: "Screw is always so much fun."},
    {id:46,titles:"Syrian Man Stuck in Airport for over 150 days", date:"09/23/2018", image:"none" , author: "Bobby Brown", comment: "Wow, I don't know if I could take that."},
    {id:47,titles:"Babysitter Wanted", date:"09/21/2018", image:"assets/twochildren.jpeg" , author: "Ayodeji Akin", comment: "Meee! I love kids."}
    
  ]};



const profile = {profiles:[{
  username: "jmb27",
  id: 0,
  status: "I feel so blessed to be alive.",
  headline: "We lit out here.",
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



/*

const addArticle = (req, res) => {
     let post = {id: myPosts.posts.length, text: req.body.text};
     myPosts.posts.push(post);
     res.send(post);
}
const getArticle = (req, res) => {
    let post = myPosts.posts.filter(p => (p.id == req.params.id))

    if (post) {
        res.send(post);
    }
}*/


//5be80a919ef864121ae50303

const putArticles = (req, res) => {
    res.send("here")
}

/*const putArticles = (req, res) => {
  var current_user = "Aria Allbright"
  var theText = req.body.id
  var commmentId = req.body.commentId
  var myId = req.params.id
  res.send("cheers")
  return*/
//if logged in user owns article and no comment id is provided, update it
//if comment id is provided and logged in user owns it, update it
//if logged in user owns neither comment, nor article, add new comment

/*
Profiles.findById(myId,(err,doc)=>{
  if (err){
    res.status(400).send({error:err})
    console.log("nope")
  }
  else{
    if(doc){

      console.log("AYYYYYYY!")
      var theDocument = doc
      console.log(doc)
    //if logged in user owns article and no comment id is provided, update article text
          if(doc.author =="jmb27" && !commentId){
            res.send("this is the logged in article, there's no comment")


           }
     //if comment id is provided and logged in user owns it, update comment text
         else if (commentId){
          for (i= 0; i<doc.comments.length; i++){
           if(doc.comments[i].id == commentId && doc.comments[i].author == "jmb27"){
            res.send("revising the id")

           }
          }

         }
    //if logged in user doesn't own article and no comment id is supplied
         else if (!commentId){
          //get the comment list from the doc
          var current_comments = doc.comments
          //add to the current comment list the new comment from the logged in user
          var new_comments = {"commentId": (current_comments.length-1).toString(), "author":current_user, "body": theText, "date": new Date().getTime() }
          current_comments.push(new_comments) 

         Profiles.findOneAndUpdate({_id:myId},{"comments":current_comments},(err,doc)=>{
        if (err){
    //res.status(400).send({error:err})
              console.log("nope, error")
             }
            else{
            if(doc){
              console.log("This is the new updated doc fam.")
              console.log(doc)



            }
            else{
            console.log("close, but no doc")
              }
            }
           })
        
        res.send("no comment id was provided, so we are creating a new comment.")
        }
      }
  else{
    console.log("close, but no doc")
      }
}
}) */

//}



const getArticles = (req, res) => {

    //check to see whether the article id is in the article list
    
   //shouldn't even waste my time with this... 
   var mysteryId = req.params.id
   console.log(mysteryId)
   //res.send("we made it")
   theFollowers = ''
   array = []
   articleDict = {articles:[]}


   //if no id is given, then return the ten most recent articles

   if(!mysteryId){
     console.log("No mystery Id.")

     Profiles.findOne({ username: "jmb27"}, function(err, doc){
      if (err){
        console.log("nope " + err)
      }
      else{
        if(doc){

          theFollowers = doc.following
          console.log(theFollowers) 
           //res.send(theFollowers) 
       }
       else{
        console.log("close")
       }
     }
    })


     //check each post in the Posts collection

     Posts.find({}, function(err, docs){
      if (err){
        console.log("nope")
      }
      else{
        if(docs){
           //check to see if doc author is in followers list
           //the only issue is whether i'll be able to see this variable value
           

           //console.log(theFollowers)
           var sortedDocs = docs.reverse()
           //for (i= 0; i<docs.length; i++){

          //keep going through the articles list until you have 10 articles or have seen all the articles 
           i = 0
           while (articleDict.articles.length <10 && i<sortedDocs.length){
            if (theFollowers.indexOf(sortedDocs[i].author) !==-1 || sortedDocs[i].author =="jmb27"){
              articleDict.articles.push(sortedDocs[i])
              console.log("i "+i)

            } 
            i+=1
           }
           console.log("just finished up")
           console.log(articleDict)
           res.send(articleDict)  
           return
       }
       else{
        console.log("close, but no doc")
       }
    }})

     /*Posts.find({}, function(err, docs){
     if (err){
    //res.status(400).send({error:err})
    console.log("nope")
     }
     else{
       if(docs){
      
         console.log("should be sorted docs"+ docs)
         var sortedDocs = docs.reverse()
         //now that they're sorted with the last articles first go through all the posts until you have 10 docs or have seen all docs

         //res.send(docs)

    }
      else{
         console.log("close")
    }
  }})*/

     /*Posts.find({}).sort({date: 'descending'}).execFind(function(err,docs){
      console.log(docs)
      res.send(docs)
    
    




    });*/
  }


   
   //get and return the post if this is a post id
   if (mysteryId){
    
     Posts.findById(mysteryId, function(err, doc){
     if (err){
    //res.status(400).send({error:err})
     console.log("nope " + err)
     res.send("nope " + err)
     }
     else{
       if(doc){
      
         console.log("AYYYYYYY!, we've got a doc")    
         //return the post the id belonged to
         //array.push(docs)
         //console.log("array "+ array)
         articleDict.articles.push(doc)
         res.send( articleDict)
         return

    }
      else{
         console.log("close, but No Post doc, must not be a post id")
         //res.send("close, but No Post doc, must not be a post id")
    }
    }})  
   


   //if this is a user id, identify the user's name and profileId, return all articles with that username
   Profiles.findById(mysteryId, function(err, doc){
     if (err){
    //res.status(400).send({error:err})
    console.log("nope " + err)
     }
     else{
       if(doc){
      
         console.log("AYYYYYYY!")
         var theUsername = doc.username
         //now use that to get all posts created by that user
         console.log("this is the username" + theUsername)
         Posts.find({author:"jmb27"}, function(err, docs){
            if (err){
            //res.status(400).send({error:err})
            console.log("nope "+ err)
            }
            else{
              if(docs){
      
                //send all the docs written by that author
                if (docs.length >0){
                  console.log("these are the docs "+ docs)

                  articleDict.articles = docs
                  res.send(articleDict)
                  return
                }
                

              }
              else{
                console.log("close, but no docs")
                res.send("Provided id is neither a post nor a profile id.")
              }
            }})



    }
      else{
         console.log("close, but No Match")
    }
  }})
   
 }


}
   
   //res.send("hey")
/*
  var postId = false
  if (mysteryId){
    Posts.find({_id:mysteryId},(err,doc)=>{
     if (err){
    
       console.log("nope")
     }
     else{
      if(doc){
       //determine whether to update article, comment, or create new comment based on ownership
       postId  =true
       articlesDict.articles = doc
       res.send(articlesDict)
      }
      else{
      console.log("close, but no doc")
      //this means the id must be a user id, we need to get all articles by the user
        Posts.find({ }, function(err, doc){
          if (err){
          res.status(400).send({error:err})
          console.log(err)
          console.log("nope, posts")
           }
         else{
           if(doc){
              //figure out the user's actual name
            articlesDict.articles.unshift(doc)
            res.send(articlesDict)

           }
           else{
             console.log("close, but no post doc")
             
              /*Users.findOne({theId:mysteryId},(err,adoc)=>{
               if (err){
                res.status(400).send({error:err})
                console.log("nope")
                }
               else{
                 if(adoc){
                   //now we can get all of their articles
                   theUserName = adoc.username
                   for (i= 0; i<doc.length; i++){
                   if(doc[i].author == theUserName){
                   articlesDict.articles.unshift(doc[i])
                    }
                    }
                    res.send(articlesDict)
     
                   }
                else{
                 console.log("close, but no doc")
                  }
               }
            }) 

             
                //res.send("done")


            }
          }
         })


       }
     }
    })
    
  }

   //if there is no id return all the articles in the logged in user's feed
   
   if(!mysteryId){

     //get list of logged in user followers
     
     Profiles.findOne({ username: "jmb27"}, function(err, doc){
      if (err){
        console.log("nope")
      }
      else{
        if(doc){

          theFollowers = doc.following
          console.log(theFollowers) 
           //res.send(theFollowers) 
       }
       else{
        console.log("close")
       }
     }
    })


     //check each post in the Posts collection

     Posts.find({}, function(err, doc){
      if (err){
        console.log("nope")
      }
      else{
        if(doc){
           //check to see if doc author is in followers list
           //the only issue is whether i'll be able to see this variable value
           console.log(theFollowers)
           for (i= 0; i<doc.length; i++){
            if (theFollowers.indexOf(doc[i].author) !==-1 || doc[i].author =="jmb27"){
              articleDict.articles.unshift(doc[i])

            } 
           }
           console.log("just finished up")
           console.log(articleDict)
           res.send(articleDict)  
       }
       else{
        console.log("close, but no doc")
       }
   }})


 }
 */

















    //check to determine whether it is a post or article id
    /*Posts.find({author:"jmb27"},(err,doc)=>{
     if (err){
    
       console.log("nope")
     }
     else{
      if(doc){
       //determine whether to update article, comment, or create new comment based on ownership
       postId  =true
       res.send(doc)
      }
      else{
      console.log("close, but no doc")
       }
     }
    })
   //if the id doesn't correspond to a post, it should correspond to a user id; return all articles by user 
     
*/
  


    
    
      

/*

const putArticles = (req, res) => {

  var myId = req.params.id
  var commentID = req.body.commentId
  var myText = req.body.text

     
  Profiles.findOne({_id:myId},(err,doc)=>{
  if (err){
    //res.status(400).send({error:err})
    console.log("nope")
  }
  else{
    if(doc){
      //determine whether to update article, comment, or create new comment based on ownership
       if (doc.author =="jmb27" && !commentId){
       //update article
         console.log("we're on the right track")
         res.send("done")

       } 
    }
    else{
      console.log("close")
    }
  }})



  }*/












//thePic;
const myCount = Posts.countDocuments({}, function( err, count){
    //console.log( "Number of posts:", count )
    return (((count-1)+40).toString());
    })
const postArticle = (req, res) => {
     var textBody = req.body.text
//register
      thePic = req.body.picture
      console.log("thePic   " +thePic)
      if (!thePic){
        thePic = " "
        console.log('the pic'+ thePic)

      }


     //get the total number of posts currently
    
    //console.log(count)
    console.log("myCount")
    //console.log(myCount)

     theCount = 0
    const myCount = Posts.countDocuments({}, function( err, count){
    //console.log( "Number of posts:", count )
      theCount = (count +=1).toString()
    return count;
    })

     var theNewPost = {theId: myCount.toString() ,author:"jmb27", body: textBody, date: new Date().getTime(), picture:thePic,comments:[]  }
     /*var newPost = new Posts(theNewPost )
     //myPosts[posts].append(newArticle)
      
      newPost.save((function (err, result) {
        if (err) {
          console.log("whoopsies")
        }
        else{
          console.log("yayyayay")
        }
        ;
          // saved!
        }));*/

    var newPost = new Posts( theNewPost)
    
      
      newPost.save((function (err, result) {
        if (err) {
          console.log("whoopsies" + err)
        }
        else{
          console.log("yayyayay, new Post uploaded")
        }
        ;
          // saved!
        }));
      



     //return all articles in the Posts collection and send them 
     Posts.find({ },(err,docs)=>{
        if (err){
        //res.status(400).send({error:err})
        console.log("nope" + err)
       }
      else{
        if(docs){
      
         console.log("AYYYYYYY!")
         console.log(docs)
         res.send(docs)
      
       }
     else{
      console.log("close,but no doc")
     }
  }}) 
}






module.exports = (app) => {
  app.get('/hello2',(req,res)=>{res.send({a:"hello world, my bud"})})
  app.get('/articles/:id?', getArticles)
  app.put('articles/:id', putArticles)
  app.post('/article', postArticle)
  /////////We Are Temporarily pausing with cloudinary  
  //app.post('/article',uploadImage('picture'), postArticle)     
}
