import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { browser, by, element } from 'protractor';
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
import { By } from '@angular/platform-browser';



describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      imports: [ RouterTestingModule,HttpModule, HttpClientModule, FormsModule ],
      providers:[ MainService] 
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
  
  /*
  it('should fetch articles for current logged in user', async(() => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    app.filterArticle({"titles":"Babysitter Wanted", "date":"09/21/2018", "image":"assets/twochildren.jpeg" , "author": "Ayodeji Akin", "comment": "Meee! I love kids."})
    fixture.detectChanges();
    //console.log(localStorage.getItem('theStoredArticles')
    //expect(app.theArticles.length).toBe(8)
    expect(app.localStorage.getItem('theStoredArticles').length).toBe(8);
    //expect((localStorage.getItem('theStoredArticles').length).toBe(8);
  }));*/

  it('should log out a user', async(() => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.debugElement.componentInstance;
    app.loginStatus = "logged in"
    fixture.detectChanges();
    app.logout()
    fixture.detectChanges();
    //console.log(localStorage.getItem('theStoredArticles')
    //expect(app.theArticles.length).toBe(8)
    expect(app.loginStatus).toBe('logged out');
    
    //expect((localStorage.getItem('theStoredArticles').length).toBe(8);
  }));


  
  it('should filter displayed articles by the search keyword', async(() => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.debugElement.componentInstance;
    
    //var el = fixture.debugElement.queryAll(by.css('.searchParameters'));
    //var el = element(by.css('.searchParameters'));
    //el.sendKeys('Misha')
    app.searchParameters = 'Misha'
    app.theAuthors =  ["Misha Mcdaniel", "Jonathon Johnson", "Ayodeji Akin", "Aria Allbright", "Bobby Brown", "Jojo Brown"]
    app.theArticles = [
    {"titles":"Babysitter Wanted", "date":"09/21/2018", "image":"assets/twochildren.jpeg" , "author": "Ayodeji Akin", "comment": "Meee! I love kids."}]

    fixture.detectChanges();
    //should I do something along the lines of expecting the
    app.filterArticle({"titles":"Babysitter Wanted", "date":"09/21/2018", "image":"assets/twochildren.jpeg" , "author": "Ayodeji Akin", "comment": "Meee! I love kids."});
    fixture.detectChanges();
    
    expect(app.shared).toBe('no');
    
    app.filterArticle({"titles":"Syrian Man Stuck in Airport for over 150 days", "date":"09/23/2018", "image":"none" , "author": "Bobby Brown", "comment": "Wow, I don't know if I could take that."}); 
    fixture.detectChanges();
    expect(app.shared).toBe('no');
    
    app.filterArticle({"titles":"McCain Funeral Brings Thousands of Attendees", "date":"09/25/2018", "image":"assets/mccaindaughter.jpeg" , "author": "Jojo Brown", "comment": "He truly served well."});
    fixture.detectChanges();
    expect(app.shared).toBe('no');
    app.filterArticle({"titles":"Obama Coming to Baker Institute", "date":"09/27/2018", "image":"assets/Mr.Obama.jpg" , "author": "Aria Allbright", "comment": "I need an autograph!"});
    fixture.detectChanges();
    expect(app.shared).toBe('no');
    app.filterArticle({"titles":"Brazil Loses National Museum in Fire", "date":"09/28/2018", "image":"none" , "author": "Bobby Brown", "comment": "All that history lost. What a shame"});
    fixture.detectChanges();
    expect(app.shared).toBe('no');
    app.filterArticle({"titles":"Rice Investment Program Offeres Radical Changes in Financial Aid", "date":"09/29/18", "image":"none" , "author": "Aria Allbright", "comment": "Wow, this will really change my life."}); 
  
  }));


it('should remove articles when removing a follower', async(() => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.debugElement.componentInstance;
    app.theFollowers = [{"id":4, "names":"Jojo Brown", "avatar":"assets/doe.png" , "status": "I feel blessed."},
    {"id":4, "names":"Misha Mcdaniel", "avatar":"assets/misha.png" , "status": "I feel good."},
    {"id":3,"names":"Jonathon Johnson", "avatar":"assets/jonathon.jpg" , "status": "It's my bday!"},
    {"id":2,"names":"Ayodeji Akin", "avatar":"assets/ayo.jpg" , "status": "Ready to graduate"},
    {"id":1,"names":"Aria Allbright", "avatar":"assets/aria.png" , "status": "Missing bae"},
    {"id":0,"names":"Bobby Brown", "avatar":"assets/bobby.png" , "status": "Need Chocolate"}
  ]

    app.theAuthors =  ["Misha Mcdaniel", "Jonathon Johnson", "Ayodeji Akin", "Aria Allbright", "Bobby Brown", "Jojo Brown"]
    app.theArticles = [
    {"titles":"White House will not Limit Kavanaugh Probe", "date":"10/1/2018", "image":"assets/kavanaugh.jpeg" , "author": "Misha Mcdaniel", "comment": "They need to get rid of him already."},
    {"titles":"Rice Investment Program Offeres Radical Changes in Financial Aid", "date":"09/29/18", "image":"none" , "author": "Aria Allbright", "comment": "Wow, this will really change my life."},
    {"titles":"Brazil Loses National Museum in Fire", "date":"09/28/2018", "image":"none" , "author": "Bobby Brown", "comment": "All that history lost. What a shame"},
    {"titles":"Obama Coming to Baker Institute", "date":"09/27/2018", "image":"assets/Mr.Obama.jpg" , "author": "Aria Allbright", "comment": "I need an autograph!"},
    {"titles":"McCain Funeral Brings Thousands of Attendees", "date":"09/25/2018", "image":"assets/mccaindaughter.jpeg" , "author": "Jojo Brown", "comment": "He truly served well."},
    {"titles":"Screw Yer Roommate Expected to Have Record Turnout", "date":"09/24/2018", "image":"none" , "author": "Misha Mcdaniel", "comment": "Screw is always so much fun."},
    {"titles":"Syrian Man Stuck in Airport for over 150 days", "date":"09/23/2018", "image":"none" , "author": "Bobby Brown", "comment": "Wow, I don't know if I could take that."},
    {"titles":"Babysitter Wanted", "date":"09/21/2018", "image":"assets/twochildren.jpeg" , "author": "Ayodeji Akin", "comment": "Meee! I love kids."}
    
  ]
     fixture.detectChanges();
    //var el = fixture.debugElement.queryAll(by.css('.searchParameters'));
    app.removeFriend('Ayodeji Akin')
    
     
    
    fixture.detectChanges();
    //should I do something along the lines of expecting the
    app.filterArticle({"titles":"Babysitter Wanted", "date":"09/21/2018", "image":"assets/twochildren.jpeg" , "author": "Ayodeji Akin", "comment": "Meee! I love kids."});
    fixture.detectChanges();
    expect(app.shared).toBe('yes');   
  }));

  it('should add article when adding a follower', async(() => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.debugElement.componentInstance;
    app.theArticles = [
    {"titles":"White House will not Limit Kavanaugh Probe", "date":"10/1/2018", "image":"assets/kavanaugh.jpeg" , "author": "Misha Mcdaniel", "comment": "They need to get rid of him already."},
    {"titles":"Rice Investment Program Offeres Radical Changes in Financial Aid", "date":"09/29/18", "image":"none" , "author": "Aria Allbright", "comment": "Wow, this will really change my life."},
    {"titles":"Brazil Loses National Museum in Fire", "date":"09/28/2018", "image":"none" , "author": "Bobby Brown", "comment": "All that history lost. What a shame"},
    {"titles":"Obama Coming to Baker Institute", "date":"09/27/2018", "image":"assets/Mr.Obama.jpg" , "author": "Aria Allbright", "comment": "I need an autograph!"},
    {"titles":"McCain Funeral Brings Thousands of Attendees", "date":"09/25/2018", "image":"assets/mccaindaughter.jpeg" , "author": "Jojo Brown", "comment": "He truly served well."},
    {"titles":"Screw Yer Roommate Expected to Have Record Turnout", "date":"09/24/2018", "image":"none" , "author": "Misha Mcdaniel", "comment": "Screw is always so much fun."},
    {"titles":"Syrian Man Stuck in Airport for over 150 days", "date":"09/23/2018", "image":"none" , "author": "Bobby Brown", "comment": "Wow, I don't know if I could take that."},
    {"titles":"Babysitter Wanted", "date":"09/21/2018", "image":"assets/twochildren.jpeg" , "author": "Ayodeji Akin", "comment": "Meee! I love kids."}
    
  ]
     app.theFollowers = [{"id":4, "names":"Jojo Brown", "avatar":"assets/doe.png" , "status": "I feel blessed."},
    {"id":4, "names":"Misha Mcdaniel", "avatar":"assets/misha.png" , "status": "I feel good."},
    {"id":3,"names":"Jonathon Johnson", "avatar":"assets/jonathon.jpg" , "status": "It's my bday!"},
    {"id":2,"names":"Ayodeji Akin", "avatar":"assets/ayo.jpg" , "status": "Ready to graduate"},
    {"id":1,"names":"Aria Allbright", "avatar":"assets/aria.png" , "status": "Missing bae"},
    {"id":0,"names":"Bobby Brown", "avatar":"assets/bobby.png" , "status": "Need Chocolate"}
  ]

    app.theAuthors =  ["Misha Mcdaniel", "Jonathon Johnson", "Ayodeji Akin", "Aria Allbright", "Bobby Brown", "Jojo Brown"]
    //var el = fixture.debugElement.queryAll(by.css('.searchParameters'));
    //var el = element(by.css('.follower_name'));
    //el.sendKeys('Ayodeji Akin')

    app.follower_name = "Ayodeji Akin"
    app.follower_status = "I've got a little cabin fever."

    fixture.detectChanges();
    //should I do something along the lines of expecting the
    app.removeFriend("Ayodeji Akin")
    app.addFollower("Ayodeji Akin", "I've got a little cabin fever.")
    app.filterArticle({"titles":"Babysitter Wanted", "date":"09/21/2018", "image":"assets/twochildren.jpeg" , "author": "Ayodeji Akin", "comment": "Meee! I love kids."});
    fixture.detectChanges();
    expect(app.shared).toBe('yes'); 
  }));

  it('should update the search keyword', async(() => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.debugElement.componentInstance;
    app.searchParameters = 'McCain'
    app.searching('White')
    fixture.detectChanges();
    expect(app.searchParameters).toBe('White');
  }));



  //make sure that there are the correct number of articles


  /*it('fetch articles for current logged in user', () => {
    
    component.filterArticles(article);
    expect(component.(this.someArticles.length)).toBe(8);

  });*/
});
