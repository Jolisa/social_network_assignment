import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { browser, by, element } from 'protractor';
import { LandingComponent } from './landing.component';


import { Component, OnInit } from '@angular/core';
import{AppService} from "../app.service";
import {Router} from '@angular/router';
import {LandingService} from './landing.service';
import {NgForm} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {RouterTestingModule} from '@angular/router/testing'

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingComponent ],
      imports: [ RouterTestingModule,HttpModule, HttpClientModule, FormsModule ], 
      providers:[NgForm, LandingService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(LandingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title "We're All Friends!"`, async(() => {
    const fixture = TestBed.createComponent(LandingComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("We're All Friends!");
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(LandingComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain("Welcome to We're All Friends!");
  }));
  it('login a previously registered user',  async(() => {
    const fixture = TestBed.createComponent(LandingComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    app.theRegistered = [{"account":"Jojo Brown", "password":"1"}]
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
    //spyOn(component, 'onSubmit').and.callFake((a, b) => ((a === "jmb26") && (b === "1")));
    app.onsubmit(app.account_name1 = "Jojo Brown",app.password1 = "1")
    fixture.detectChanges();
    

    //expect(component.onSubmit("Jojo Brown","1")).toBe('You have successfully logged in.');
    expect(app.loginStatus).toBe('You have successfully logged in.');

    //expect(compiled.querySelector('h1').textContent).toContain("Welcome to We're All Friends!");
  }));

  it('should not login an invalid user',  async(() => {
    const fixture = TestBed.createComponent(LandingComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    app.theRegistered = [{"account":"JojoBrown", "password":"1"}]
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
    //spyOn(component, 'onSubmit').and.callFake((a, b) => ((a === "jmb26") && (b === "1")));
    app.onSubmit(app.account_name1 = "jmb17",app.password1 = "12")
    fixture.detectChanges();
    expect(app.loginStatus).toBe('User must be registered.');
  }));

  
  it('should change the loginStatus value',  async(() => {
    const fixture = TestBed.createComponent(LandingComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    app.loginUser()
    fixture.detectChanges();

    //expect(component.onSubmit("jmb26","1")).toBe('You have successfully logged in.');
    expect(app.loginStatus).toBe('Hey Pretty Baby Let me Whisper in Your Ear.');

    //expect(compiled.querySelector('h1').textContent).toContain("Welcome to We're All Friends!");
  }));



  
  


  //should only log you in if there is a registered username...aka if username and password aer in profiles doc








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


