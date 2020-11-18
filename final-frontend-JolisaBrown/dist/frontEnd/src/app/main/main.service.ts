import {Injectable} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Router} from '@angular/router';
import {HttpModule} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {FOLLOWERS} from './follower-class';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';

//import {HttpClientModule} from '@angular/commmon/http';


@Injectable({
  providedIn: 'root'
})

export class MainService {


  theFollowers;
  theAuthors;

  title: string;
  //theFollowers;
  theArticles;
  articlesCopy;
  //theAuthors;
  authors;
  names;
  // status;

  public newPost: string;
  public rows: Array<{ newPost: string }> = [];


  newStatus = '';
  status = "I'm feeling blessed.";

  constructor(private http: HttpClient) {
  }


  /*http.get('/assets/followers.json').subscribe(res => {
  this.theFollowers=res;} );

  //get the authors list
  http.get('/assets/authors.json').subscribe(res => {
  this.theAuthors=res;});*/


  public show2: boolean = false;

/*
  toggle2() {
    this.show2 = !this.show2
    return
  }*/


  /*public show2:boolean = false;
  addFollower(){
      //check for validation
      if (!this.follower_name){
        console.log("account name is not valid ")
        alert('follower name required to create follower')  
        return
      }
      if (!this.follower_status){
        alert("status required to create follower")
        return
      }

      //add the new follower back to the approved authors list
      this.theAuthors.push(this.follower_name)
      console.log("135" + this.follower_name)


      console.log("before" +this.theFollowers)
      this.theFollowers.unshift({"id": this.theFollowers.length, "names": this.follower_name, "avatar": "assets/doe.png", "status": this.follower_status})

      console.log("after"+ this.theFollowers)
      console.log(this.theFollowers[5].names)
      this.show2 = !this.show2
    }*/


  //console.log()


  //(<HTMLInputElement>document.getElementById('some_comments')).textContent

  someMethod() {
    return "Feed"
  }


  hasImage(anArticle) {
    if (typeof anArticle !== 'undefined') {
      //console.log(anArticle)
      if (anArticle.image !== "none") {
        return true
      }
      return false
    }
    return true
  }

  isDefined(anything) {
    if (anything === undefined) {
      return false
    }
    else {
      return true
    }
  }

  /*
  public show: boolean = false;

  atoggle() {
    this.show = !this.show;
    return;
  }*/

  /*changeStatus(value: string): void {
   console.log("service show"+ this.show)
   this.show = !this.show;
   this.status = ` '${value}'\n`
   console.log("service status"+this.status)
   return this.status
   ;}*/


  makePost(form) {
    console.log("make post button works");
    //makes their entry a new row in the table
    //this.rows.push( {newPost: this.newPost } );
    this.theArticles.unshift({"titles": this.newPost, "image": "none", "author": "", "date": ""})
    //clears the input
    this.newPost = null;
  }

/*
  filterArticle(anArticle) {
    //console.log(searching)
    if (typeof this.theAuthors !== 'undefined') {
      var authors = JSON.parse(JSON.stringify(this.theAuthors))
      console.log("hey buddy ")
      //this.show3 = true
      //console.log(anArticle.author);
      if (typeof this.searchParameters == 'undefined') {
        return true
      }

      if ((anArticle.author.toUpperCase()).indexOf(this.searchParameters.toUpperCase()) > -1) {
        console.log(anArticle.author + "success");
        return true
      }

      if ((anArticle.titles.toUpperCase()).indexOf(this.searchParameters.toUpperCase()) > -1) {
        console.log(anArticle.titles + "success");
        return true
      }
      return false
    }
    return true;
  }*/

/*
  addFollower() {
    //check for validation
    if (!this.follower_name) {
      console.log("account name is not valid ")
      alert('follower name required to create follower')
      return
    }
    if (!this.follower_status) {
      alert("status required to create follower")
      return
    }
    console.log("before" + this.theFollowers)
    this.theFollowers.unshift({
      "id": this.theFollowers.length,
      "name": this.follower_name,
      "avatar": "assets/doe2.png",
      "status": this.follower_status
    })

    console.log("after" + this.theFollowers)
    console.log(this.theFollowers[5].name)
    this.show2 = !this.show2;
  };*/


  //get the friends and folllowers for the side bar
  /*http.get('/assets/followers.json').subscribe(res => {
    this.theFollowers=res;

  } );*/


}
