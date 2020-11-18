//my main spec as of rn, kinda broken whoopsies

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';

import { Component, OnInit } from '@angular/core';
import{AppService} from "../app.service";
import {Router} from '@angular/router';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FOLLOWERS } from './follower-class';
import {MainService} from './main.service';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';

import { FormsModule } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing'

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      imports: [ RouterTestingModule,HttpModule, HttpClientModule, FormsModule ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  


  //make sure that there are the correct number of articles

/*
  it('fetch articles for current logged in user', () => {
    
    component.filterArticles(article);
    expect(component.(this.someArticles.length)).toBe(8);

  });*/
});






/*
  //need to write isRegistered function and login function
  it('login only registered users', () => {
    spyOn(component, 'onRegister').and.callFake((a, b) => ((a === "jmb26") && (b === "1")));
    component.onSubmit();
    expect(component.loginStatus).toBe('You have successfully logged in.');
    expect(page.getLoginStatus()).toEqual('You have successfully logged in.');
    expect(browser.getCurrentUrl()).toEqual("/main");

    //also needs to check on the displayed success message

    component.onSubmit(form);
    expect(component.loginStatus).toBe('User must be registered; please register.');
    expect(page.getLoginStatus()).toEqual('User must be registered; please register.');
    expect(browser.getCurrentUrl()).toEqual("/landing");
    //also needs to check on the displayed error message
  });*/
  
}


);






//my current filterArticle function in the html document

filterArticle(anArticle){
      /* me trying to be extra and extract the followers list
      var names = []
      var i;
      if (this.theFollowers!== "undefined"){
      for (i = 0; i < this.theFollowers.length; i++) {
        names.push(this.theFollowers[i].names)
} }
      console.log("names"+names)*/

      //console.log("this.theFollowers.indexOf(anArticle.author) == -1" + names.indexOf(anArticle.author) )
      var articles = this.someArticles
      if (anArticle.author !== "" && typeof this.theAuthors !== 'undefined'){

        console.log()
        

        if (this.theAuthors.indexOf(anArticle.author) == -1) {

          //has passed requirement, so add article to external json file of displayed articles
          if ((this.someArticles).indexOf(article) > -1){
            index = this.someArticles.indexOf(article)
            this.someArticles.splice(0,1)
            articles = this.someArticles
          }
          //bad job

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
         
          //has passed requirement, so add article to external json file of displayed articles
          if ((this.someArticles).indexOf(article) > -1){
            index = this.someArticles.indexOf(article)
            this.someArticles.splice(0,1)
            articles = this.someArticles
          }
          //bad job

          return false
        }
      }

       //if there's nothing in the search bar display all valid articles
        if(typeof this.searchParameters == 'undefined' ) {

          //has passed requirement, so add article to external json file of displayed articles
          if ((this.someArticles).indexOf(article) = -1){
            this.someArticles.push(article)
            articles = this.someArticles
          }
          //good job

          return true}

        if ((anArticle.author.toUpperCase()).indexOf(this.searchParameters.toUpperCase()) > -1) {  
          
          //has passed requirement, so add article to external json file of displayed articles
          if ((this.someArticles).indexOf(article) = -1){
            this.someArticles.push(article)
            articles = this.someArticles
          }
          //good job 

          return true
      }

        if ((anArticle.titles.toUpperCase()).indexOf(this.searchParameters.toUpperCase()) > -1) {  
          
          //has passed requirement, so add article to external json file of displayed articles
          if ((this.someArticles).indexOf(article) = -1){
            this.someArticles.push(article)
            articles = this.someArticles
          }
          //good job

          return true
      }


         //has passed requirement, so add article to external json file of displayed articles
          if ((this.someArticles).indexOf(article) > -1){
            index = this.someArticles.indexOf(article)
            this.someArticles.splice(0,1)
            articles = this.someArticles
          }
          //bad job

         return false
  }
        //has passed all requirements, so add article to external json file of displayed articles
        if ((this.someArticles).indexOf(article) = -1){
          this.someArticles.push(article)
          articles = this.someArticles

        }
        //good job

        //do i neeed to set this.someArticles to some other variable like articles or can i Just extract the variable value directly...?
        articles = this.someArticles
        console.log("this is the some articles list i created" + this.someArticles)
        return true
       } 

//here is the filter article function from before













