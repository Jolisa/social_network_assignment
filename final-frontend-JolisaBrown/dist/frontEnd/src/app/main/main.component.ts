import {Component, OnInit, ViewChild,AfterViewInit, ElementRef} from '@angular/core';
import {AppService} from "../app.service";
import {Router} from '@angular/router';
import {HttpModule} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {FOLLOWERS} from './follower-class';
import {MainService} from './main.service';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
  //providers: [MainService]
})

export class MainComponent implements OnInit {
  title: string;
  shared: string
  theFollowers;
  theArticles;
  loginStatus = "logged in"
  //theArticles;

  //retrievedArticles: string;
  articlesCopy;
  theAuthors;
  authors;
  names;
  //url = "http://localhost:3000"
  url = "https://jolisa-hw7backend.herokuapp.com"
  


  //somehow broke this, would need to fix it for articles to remain persistent
  //theArticles = JSON.parse(localStorage.getItem("theStoredArticles"));

  //status;


  public newPost: string;
  public rows: Array<{ newPost: string }> = [];

  public show2: boolean = false;
  public show4: boolean = false;

  //show or hide the update status box before updating
  public show: boolean = false;

  searchParameters: string;
  newStatus: string;
  
  profileId = localStorage.getItem("profileId")

  status;
  file;


  //retrievedArticles = localStorage.getItem("theStoredArticles");
  
  //theArticles = JSON.parse(localStorage.getItem("theStoredArticles"));
  
  

  constructor(public mainService: MainService, private http: HttpClient) {
    //profileId = localStorage.getItem("profileId")
    //get the friends and folllowers for the side bar
    //http.get('/assets/followers.json').subscribe(res => {
      //this.theFollowers = res;});

    
    
  
    //get the user's followers and their info
    this.http.get(this.url +"/followingInfo/"+ this.profileId , {'withCredentials':true}).subscribe(result =>{this.theFollowers = result['following']; console.log(result['following']); console.log(this.theFollowers);});
    
    //set the articles feed
    //this.http.get(this.url + '/articles' , {'withCredentials':true}).subscribe(result =>{this.theArticles = result['articles']; console.log("the Articles "+this.theArticles.length+this.theArticles);});
    this.http.post(this.url + '/articles2' ,{profileId:this.ProfileId}, {'withCredentials':true}).subscribe(result =>{this.theArticles = result['articles']; console.log("the Articles "+this.theArticles.length+this.theArticles);});



    //get the user headline
    this.http.get(this.url +"/headlines/"+ this.profileId,
    {'withCredentials':true}).subscribe(result =>{this.status = result['headlines'][0]['headline']; console.log(this.status);});

    
    


    


    /*http.get('/assets/articles.json').subscribe(res => {
      this.articlesCopy = res;

    });*/


    //get the authors list
    http.get('/assets/authors.json').subscribe(res => {
      this.theAuthors = res;

    });
    this.title = this.mainService.someMethod();
    
  }





  onFileChanged(event) {
    //var file = event.target.files[0]
    this.file = event.target.files[0]

    console.log("This is the file"+ this.file)
    console.log(typeof this.file)
    //localStorage.setItem("theFile", JSON.stringify(file))


    //const fd = new FormData()
    //fd.append('text', message)
    //fd.append('image', file)
  }

  makePost(form) {
    var theResult;
    console.log("make post button works");
    
    //this.theArticles = JSON.parse(localStorage.getItem("theStoredArticles"));

    //this is the get articles function with no id

    this.http.get(this.url + '/articles' , {'withCredentials':true}).subscribe(result =>{this.theArticles = result['articles']; console.log(result);});

    
     //@ViewChild('imageInput') imageInput: ElementRef;
     console.log("here is the imageFile")
     
     //console.log(this.imageInput.nativeElement.files[0])
     /*AfterViewInit() {
        console.log(this.imageInput.nativeElement.value) ;
      }*/

      //payload = {"image": imageInput, "text": this.newPost}
      this.newPost = (<HTMLInputElement>document.getElementById("newPost"))
      this.file = (<HTMLInputElement>document.getElementById("postPicture")).files[0]
      //how can i globallly access the file??
      console.log("This is the file type in makePost function" + typeof this.file)
      //file = JSON.parse(localStorage.getItem("theFile"))
      console.log("this here is the image file "+this.file)
      const fd = new FormData()
      fd.append('text', this.newPost)
      console.log("HERE IS THE ENTERED POST " + this.newPost )
      fd.append('image', this.file)
      console.log("this is the fd" + fd)
     
     //these next two lines are options of things to try, but i'd need to import Headers and RequestOptions
     //let headers = new Headers({ 'Content-Type': 'application/json' });
     //let options = new RequestOptions({ headers: headers }); 
     
      this.http.post(this.url + '/article', fd, {'withCredentials':true, headers: {
          'Content-Type' : 'application/json'}
      }).subscribe(result =>{this.theArticles = result['articles']; console.log("new article list "+result);})



      //this is the post articles function
    //this.theArticles.unshift({"titles": this.newPost, "image": "none", "author": "", "date": "", "comment":""})
    //console.log("new article list"+this.theArticles)

    //var payload = {text: this.newPost, image:""}
    //this.http.post(this.url + '/article', fd, {'withCredentials':true}).subscribe(result =>{this.theArticles = result['articles']; console.log(result);
      //console.log("new article list"+this.theArticles);});




    //localStorage.setItem("theStoredArticles", JSON.stringify(this.theArticles))
    //this.theArticles = JSON.parse(this.theArticles);

    //clears the input
    this.newPost = null;
  }

  //upload new image with post
  
  



  toggle2() {
    //add followers form
    this.show2 = !this.show2
    if (this.show2 == true && this.show4 == true){
      //this.show2 = !this.show2
      this.show4 = !this.show4
     }
    return
  }
  toggle4() {
    //remove followers form
    this.show4 = !this.show4
    if (this.show4 == true && this.show2 == true){
      this.show4 = !this.show4
      this.show2 = !this.show2
     }
    return
  }

  atoggle() {
    this.show = !this.show;
    return;
  }


  changeStatus(value: string) {
    this.show = !this.show;
    //localStorage.setItem("theStatus", ` '${value}'\n`);
    //this.status = ` '${value}'\n`;
    //this.status = localStorage.getItem("theStatus");

     
    console.log("ckickis")
    var payload = { username: "jmb27",headline: ` '${value}'\n` }
    console.log()
    console.log("hello buddy")
    console.log(this.profileId)
    console.log("That was the profileId")

    //this.http.get('http://localhost:3000/headlines/[0]', {'withCredentials':true}).subscribe(result =>{this.status = result['headlines'][0]['headline']; console.log(result['headlines'][0]['headline'])}
    
     

    this.http.put(this.url + '/headline', payload, {'withCredentials':true}).subscribe(result =>{this.status = result['headline']; console.log(result)})
    console.log('That was the status')
    console.log(  "Here I am"+this.status)

     }


  //add friend in sidebar
  follower_name: string
  follower_email: string
  followerProfileId: string
  friendRegistered :string
  newFollowerList: string

  addFollower(follower_name,follower_email) {
    //check for validation

    this.followerProfileId = ''
    this.friendRegistered = "true"
    //getting the profile info of the new follower
    this.http.get(this.url + '/profileId/'+ follower_name +"/"+ follower_email, {'withCredentials':true}).subscribe(result =>{this.followerProfileId = result['profileId']; localStorage.setItem("theFollowerProfileId", result['profileId'])
      if (this.followerProfileId == "none"){
        alert('New friend not a registered user; Please add only registered users as friends.')
        this.friendRegistered = "false"
        console.log("FRIEND REGISTEREDDDD?" + this.friendRegistered)
      }   

    ;});
      
    console.log("this is the followerProfileId"+localStorage.getItem("theFollowerProfileId"))
    //check to see if the user is on file
    
    if (this.friendRegistered == "false"){
      //we won't add this unregistered friend, and can exit the addFollower function
      return
    }


    //using that info to add the new user

    this.http.put(this.url + '/following/'+ localStorage.getItem("theFollowerProfileId"),{}, {'withCredentials':true}).subscribe(result =>{this.newFollowerList = result['following']; 
          console.log("result "+result);console.log("this.theFollowers AYYYYYYYYYYY"+ this.newFollowerList)
          if (this.newFollowerList == "not a user on file"){
            console.log("somehow we still tried to add them as a friend even tho we should've exited the function since the 'new friend' wasn't registered.")
            return
          }
          else{
            location.reload()
          }
        });
        
    //and using the modified get function to provide the neccesary additional info
    this.http.get(this.url +"/followingInfo/"+ this.profileId , {'withCredentials':true}).subscribe(result =>{this.theFollowers = result['following']; console.log(result['following']); 
      console.log(this.theFollowers);});
      //location.reload()
    this.show2 = !this.show2
  }
    //
    
    /*this.http.get(this.url + '/profileId/'+ follower_name +"/"+ follower_email, {'withCredentials':true}).subscribe(result =>{followerProfileId = result['profileId']; 
      console.log("result "+result); console.log("follower ProfileId "+followerProfileId);
      if (this.followerProfileId == "none"){
        alert('New friend not a registered user; Please add only registered users as friends.')
      }
      else{
        //use the gathered friend's profileId in the put request to add them as a friend
        //var payload = {user: followerProfileId}
        this.http.put(this.url + '/following'+followerProfileId,{}, {'withCredentials':true}).subscribe(result =>{this.theFollowers = result['following']; 
          console.log("result "+result);console.log("this.theFollowers "+ this.theFollowers)
          if (this.theFollowers == "not a user on file"){

          }
        });
      }
    //is it possible for me to make this put request in the body of this get request?


  });*/
    
    

    

    /*console.log("folllower function here")
    if (typeof this.theArticles == 'undefined'){
    //this.theArticles = JSON.parse(localStorage.getItem("theStoredArticles"));
    //set the value of this.theArticles
    this.http.get(this.url + '/articles' , {'withCredentials':true}).subscribe(result =>{this.theArticles = result['articles']; console.log(result);});
    }
    if (!this.follower_name) {
      console.log("account name is not valid ")
      alert('follower name required to create follower')
      return
    }
    //don't need to make people make up their follower's status' anymore
    /*if (!this.follower_status) {
      console.log("status needed")
      alert("status required to create follower")
      return
    }*/
    //console.log("Author is in Follower list" + this.theFollowers.indexOf(this.follower_name))
    //console.log("follower is in the articles list"+ this.theArticles.indexOf(this.follower_name))
    
    /*console.log("these are the articles"+ this.theArticles)
    
    //so this is basically to get the articles of the newly added user, which is no longer neccesary in this manner
    var i;
    for (i = 0; i < this.theArticles.length; i++) {
        //console.log("this is the articles at"+ i + this.theArticles[i])
        
        console.log("the authors are" + this.theAuthors)
        if ((this.theArticles[i].author).indexOf(this.follower_name) > -1 ) {
          this.theAuthors.push(this.follower_name)
          console.log("145Author is in Article list at index " + i+ "the authors are" + this.theAuthors)

          //console.log("before" + this.theFollowers)
          this.theFollowers.unshift({"id": this.theFollowers.length, "names": this.follower_name,"avatar": "assets/doe.png","status": this.follower_status})

          //console.log("after" + this.theFollowers)
          //console.log(this.theFollowers[5].names)
          this.show2 = !this.show2
          return
        }
      }

    //re-add follower to approved authors list if follower is among articles created  
    /*if (this.theArticles.indexOf(this.follower_name) > -1) {
        this.theAuthors.push(this.follower_name)
      }*/
    /*console.log("the Authors"+ this.theAuthors)
    if (this.theAuthors.indexOf(this.follower_name) == -1) {
        alert('New friend not a registered user; Please add only registered users as friends.')
        return 
      }*/


    //add the new follower back to the approved authors list
    //this.theAuthors.push(this.follower_name)
    //console.log("135" + this.follower_name)


    
  


  public
  show3: boolean = false;

  commentViewing(){
    this.show3 = !this.show3
  } 
  //changes the view button text
  /*commentViewing(article, element, text) {
    if (element.textContent == text) {
      element.textContent = "View Comments";
      console.log("article of comment viewig" + article.comment)
      var preserve = (article.comment).substr(0, (article.comment).length)
      //article.comment = ""
      this.show3 = false
      //console.log("show3" + this.show3)
    } else {
      element.textContent = text;
      //article.comment = preserve
      this.show3 = true
      //console.log("show3" + this.show3)

    }
  }*/






  //shows or hides the comments

  /*
      showingComments(){
        //var heresy = (<HTMLInputElement>document.getElementById('some_comments')).textContent
        //console.log(heresy + "comment button  val"+(<HTMLInputElement>document.getElementById('some_comments')).textContent)
        if((<HTMLInputElement>document.getElementById('some_comments')).textContent == 'Hide Comments'){
          return true
        }else{
          return false
        }

      }*/


/*
  filterArticle(anArticle){
      /* me trying to be extra and extract the followers list
      var names = []
      var i;
      if (this.theFollowers!== "undefined"){
      for (i = 0; i < this.theFollowers.length; i++) {
        names.push(this.theFollowers[i].names)
} }
      console.log("names"+names)

      //console.log("this.theFollowers.indexOf(anArticle.author) == -1" + names.indexOf(anArticle.author) )
      
      if (anArticle.author !== "" && typeof this.theAuthors !== 'undefined'){

        console.log()
        

        if (this.theAuthors.indexOf(anArticle.author) == -1) {

          

          return false
        }
      }

      //console.log(names)
      
      //console.log(getFriendNames())

      if (typeof this.theAuthors !== 'undefined') {
        var authors = JSON.parse(JSON.stringify(this.theAuthors))
        console.log("mi amor"+authors)
       
        
        if (anArticle.author !== ""){

        console.log()
        if (this.theAuthors.indexOf(anArticle.author) == -1) {
         
          

          return false
        }
      }

       //if there's nothing in the search bar display all valid articles
        if(typeof this.searchParameters == 'undefined' ) {

          

          return true}

        if ((anArticle.author.toUpperCase()).indexOf(this.searchParameters.toUpperCase()) > -1) {  
          
          

          return true
      }

        if ((anArticle.titles.toUpperCase()).indexOf(this.searchParameters.toUpperCase()) > -1) {  
          
          //has passed requirement, so add article to external json file of displayed articles
          

          return true
      }


         //has passed requirement, so add article to external json file of displayed articles
          

         return false
  }
        

        //do i neeed to set this.someArticles to some other variable like articles or can i Just extract the variable value directly...?
        articles = this.someArticles
        console.log("this is the some articles list i created" + this.someArticles)
        return true
       } */

  

  filterArticle(anArticle) {
    //this.shared = 'yes'
    //console.log("line 223 this.shared" + this.shared)
    //console.log("line 224 authors" +this.theAuthors)
    //console.log("search parameters 225 "+ this.searchParameters)
    




    //console.log("sup friends")
    //console.log("an article"+ anArticle +"this.theAuthors"+ this.theAuthors)
    if (anArticle.author !== "" && typeof this.theAuthors !== 'undefined') {
      //console.log("yayyy, anArticle.author and this.theAuthors are defined")
      //console.log("look at index to see if article should display line 227"+(this.theAuthors.indexOf(anArticle.author)))
      if (this.theAuthors.indexOf(anArticle.author) == -1) {
        this.shared = "no"
        return false
      }
    }


    if (typeof this.theAuthors !== 'undefined') {
      var authors = JSON.parse(JSON.stringify(this.theAuthors))
      
      //console.log("mi amor" + authors)


      if (anArticle.author !== "") {

        //console.log()
        if (this.theAuthors.indexOf(anArticle.author) == -1) {
          this.shared = "no"
          //console.log("line 243 this.shared" + this.shared)
          return false
        }
      }

      if (typeof this.searchParameters == 'undefined') {
        this.shared = "yes"
        return true
      }

      if ((anArticle.author.toUpperCase()).indexOf(this.searchParameters.toUpperCase()) > -1) {
        //console.log("search parameters 252  has authorr"+ this.searchParameters)
        this.shared = "yes"
        return true
      }

      if ((anArticle.titles.toUpperCase()).indexOf(this.searchParameters.toUpperCase()) > -1) {
        //console.log("search parameters 252 has title "+ this.searchParameters)
        this.shared = "yes"
        return true
      }
      this.shared = "no"
      return false
    }
    this.shared = "yes"


    
    return true
  }

  logout(){
    this.loginStatus = "logged out"
  }


  removeFriend(follower_name2,follower_email2) {
    //console.log("a follower "+ aFollower.names)
    //console.log("a follower " + aFollower.id)
    /*var index = aFollower.id
    //console.log(index)
    delete this.theFollowers[(this.theFollowers.length) - (index + 1)]
    //console.log(this.theFollowers[index] === undefined)

    this.theAuthors.splice(this.theAuthors.indexOf(aFollower.names), 1);*/
    //console.log("line 285 removing friend authors"+ this.theAuthors + "ther followers too"+ this.theFollowers)
    //console.log("authors" + this.theAuthors)
    //get a list of the authors still remaining
    this.followerProfileId = ''
    this.friendRegistered = "true"
    //getting the profile info of the new follower
    this.http.get(this.url + '/profileId/'+ follower_name2 +"/"+ follower_email2, {'withCredentials':true}).subscribe(result =>{this.followerProfileId = result['profileId']; localStorage.setItem("theFollowerProfileId", result['profileId'])
      if (this.followerProfileId == "none"){
        alert('Not already a registered friend; You may only remove friends you currently have.')
        this.friendRegistered = "false"
        console.log("FRIEND REGISTEREDDDD?" + this.friendRegistered)
      }   

    ;});
      
    console.log("this is the followerProfileId"+localStorage.getItem("theFollowerProfileId"))
    //check to see if the user is on file
    
    if (this.friendRegistered == "false"){
      //we won't add this unregistered friend, and can exit the addFollower function
      alert("friend not registered")
      return
    }


    //using that info to add the new user

    this.http.delete(this.url + '/following/'+ localStorage.getItem("theFollowerProfileId"), {'withCredentials':true}).subscribe(result =>{this.newFollowerList = result['following']; 
          console.log("result "+result);console.log("this.theFollowers AYYYYYYYYYYY"+ this.newFollowerList)
          if (this.newFollowerList == "not a user on file"){
            console.log("somehow we still tried to add them as a friend even tho we should've exited the function since the 'new friend' wasn't registered.")
          }
          else{
            //reload the page once you've updated your following list if it does need to be updated/removed user is a valid friend
            location.reload()
          }
        });
        
    //and using the modified get function to provide the neccesary additional info
    this.http.get(this.url +"/followingInfo/"+ this.profileId , {'withCredentials':true}).subscribe(result =>{this.theFollowers = result['following']; console.log(result['following']); 
      console.log(this.theFollowers);});
  }


  searching(searchKeyword){
    console.log("search Parameter 300"+this.searchParameters)
    this.searchParameters = searchKeyword
    console.log("302 these are our search parameters" + this.searchParameters)

  }
  ngOnInit(){
    //get the user's followers and their info
    this.http.get(this.url +"/followingInfo/"+ this.profileId , {'withCredentials':true}).subscribe(result =>{this.theFollowers = result['following']; console.log(result['following']); console.log(this.theFollowers);});
    
    //set the articles feed
    this.http.post(this.url + '/articles2' ,{profileId:this.profileId}, {'withCredentials':true}).subscribe(result =>{this.theArticles = result['articles']; console.log("the Articles "+this.theArticles.length+this.theArticles);});

    //get the user headline
    this.http.get(this.url +"/headlines/"+ this.profileId,
    {'withCredentials':true}).subscribe(result =>{this.status = result['headlines'][0]['headline']; console.log(this.status);});

    if (typeof this.profileId == undefined){
      
      this.http.get("https://jolisabookapp.surge.sh/auth/facebook", {'withCredentials':true}).subscribe(result =>{this.profileId = result['following']; console.log(result); 
        console.log(this.profileId);});localStorage.setItem("profileId", result['profileId']);

    }


  }


  


}
