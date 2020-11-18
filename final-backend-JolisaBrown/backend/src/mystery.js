

require('.././model.js')
require('.././db.js')
require('.././index.js')

const getArticles2 = (req, res) => {

    theArticle = ""
    //check to see whether the article id is in the article list
    //loggedInUser = req.body.profileId
   //shouldn't even waste my time with this... 
   var mysteryId = req.params.id
   //console.log(mysteryId)
   //res.send("we made it")
   theFollowers = ''
   array = []
   articleDict = {articles:[]}


   //if no id is given, then return the ten most recent articles

   if(!mysteryId){
     //console.log("No mystery Id.")

     Profiles.findById( req.body.profileId , function(err, doc){
      if (err){
        //console.log("nope " + err)
        res.send({articles:["error"]} + err)
      }
      else{
        if(doc){

          theFollowers = doc.following
          theAuthor = doc.username
                  




                  //check each post in the Posts collection
     Posts.find({}, function(err, docs){
      if (err){
        //console.log("nope")
        res.send({articles:["error"]} + err)
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
           console.log("doc.articles.length "+ docs.length)
           //res.send("done")
           //return
           while (articleDict.articles.length < docs.length && i<sortedDocs.length){
            console.log("line 63 "+theAuthor)
            if (theFollowers.indexOf(sortedDocs[i].author) !==-1 || sortedDocs[i].author ==theAuthor){
              articleDict.articles.push(sortedDocs[i])
              //console.log("i "+i)

            } 
            i+=1
           }
           //console.log("just finished up")
           //console.log(articleDict)
           res.send(articleDict)  
           return
       }
       else{
        //console.log("close, but no doc")
        //res.send({articles:["no doc"]})
       }
    }})

  






          //console.log(theFollowers) 
           //res.send(theFollowers) 
       }
       else{
        //console.log("close")
        res.send({articles:["no doc"]})
       }
     }
    })


  

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
     //console.log("nope " + err)
     //res.send("nope " + err)
     }
     else{
       if(doc){
      
         //console.log("AYYYYYYY!, we've got a doc")    
         //return the post the id belonged to
         //array.push(docs)
         //console.log("array "+ array)
         articleDict.articles.push(doc)
         res.send( articleDict)
         return

    }
      else{
         //console.log("close, but No Post doc, must not be a post id")
         //res.send("close, but No Post doc, must not be a post id")
    }
    }})  
   


   //if this is a user id, identify the user's name and profileId, return all articles with that username
   Profiles.findById(mysteryId, function(err, doc){
     if (err){
    //res.status(400).send({error:err})
    //console.log("nope " + err)
     }
     else{
       if(doc){
      
         //console.log("AYYYYYYY!")
         var theUsername = doc.username
         //now use that to get all posts created by that user
         //console.log("this is the username" + theUsername)
         Posts.find({author:theUsername}, function(err, docs){
            if (err){
            //res.status(400).send({error:err})
            //console.log("nope "+ err)
            }
            else{
              if(docs){
      
                //send all the docs written by that author
                if (docs.length >0){
                  //console.log("these are the docs "+ docs)

                  articleDict.articles = docs
                  res.send(articleDict)
                  return
                }
                

              }
              else{
                //console.log("close, but no docs")
                //res.send("Provided id is neither a post nor a profile id.")
              }
            }})



    }
      else{
         //console.log("close, but No Match")
    }
  }})
   
 }


}

module.exports = (app) => {
  //app.get('/hello2',(req,res)=>{res.send({a:"hello world, my bud"})})
  app.post('/articles2/:id?', getArticles2)
  //app.put('articles/:id', putArticles)
  //app.post('/article', postArticle)
  /////////We Are Temporarily pausing with cloudinary  
  //app.post('/article',uploadImage('picture'), postArticle)     
}