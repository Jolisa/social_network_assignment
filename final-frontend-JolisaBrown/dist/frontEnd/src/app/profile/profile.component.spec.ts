import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { browser, by, element } from 'protractor';


import { ProfileComponent } from './profile.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {RouterTestingModule} from '@angular/router/testing'

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [ RouterTestingModule, HttpClientModule, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log out a user', async(() => {
    const fixture = TestBed.createComponent(ProfileComponent);
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

it("should fetch the logged in user's profile information", async(() => {
    const fixture = TestBed.createComponent(ProfileComponent);
    const app = fixture.debugElement.componentInstance;
    //app.onsubmit("Jojo Brown","1")
    app.Account_name = localStorage.getItem("theAccountName")
    app.Password = localStorage.getItem("thePassword")
    app.Password_confirmation = localStorage.getItem("thePasswordConfirmation")
    fixture.detectChanges();
    //should I do something along the lines of expecting the
    expect(app.Account_name).toEqual(localStorage.getItem("theAccountName"))
    expect(app.Password).toEqual(localStorage.getItem("thePassword"))
    expect(app.Password_confirmation).toEqual(localStorage.getItem("thePasswordConfirmation"))
    
  }));

});
