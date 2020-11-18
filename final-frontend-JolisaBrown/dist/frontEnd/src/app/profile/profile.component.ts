import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { FormsModule } from '@angular/forms';


//import {Observable} from 'rxjs';
//import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profileId = localStorage.getItem("profileId")
  loginStatus;
  status;
  //url = "http://localhost:3000"
  url = "https://jolisa-hw7backend.herokuapp.com"
  Email;
  Zipcode;
  Birthdate;
  Password;
  
  constructor(private http: HttpClient) { 
    //this.http.get(this.url +"/email", {'withCredentials':true}).subscribe(result =>{Email = result['email']; console.log(result['email'])} 
    this.http.get(this.url +"/email/"+ this.profileId , {'withCredentials':true}).subscribe(result =>{this.Email = result['email']; console.log(result['email']);});
    this.http.get(this.url + '/dob/' +this.profileId, {'withCredentials':true}).subscribe(result =>{this.Birthdate = result['dob']; console.log(result['dob']);});
    this.http.get(this.url + '/zipcode/' +this.profileId, {'withCredentials':true}).subscribe(result =>{this.Zipcode = result['zipcode']; console.log(result['zipcode']);});
    this.Password = "Confidential"
   }


  public show:boolean = false;
     toggle() {
     this.show = !this.show;
    }

  public show2:boolean = false;
     toggle2() {
     this.show2 = !this.show2;
    }
 
   logout(){
    this.loginStatus = "logged out"
  }

  
  Update(text, number){
    var payload = {}
   if (number == 2){
     //localStorage.setItem("theEmail", text);
     payload = {"email": text}

     this.http.put(this.url + '/email', payload, {'withCredentials':true}).subscribe(result =>{this.Email = result['email']; console.log(result)})
    
     


     console.log(text)
     location.reload();
   }
   
   
   if (number == 5){
     //localStorage.setItem("theZipcode", text);
     payload = {"zipcode": text}
     this.http.put(this.url + '/zipcode', payload, {'withCredentials':true}).subscribe(result =>{this.Zipcode = result['zipcode']; console.log(result)})
    
     
     location.reload();
   }
   if (number == 6){
     //localStorage.setItem("thePassword", text);
     //localStorage.setItem("thePasswordConfirmation", text);
     payload = {"password": text}
     this.http.put(this.url + '/password', payload, {'withCredentials':true}).subscribe(result =>{this.Password = result['zipcode']; console.log(result)})
     location.reload();
   }
  

  }

      
  ngOnInit() {}


}


