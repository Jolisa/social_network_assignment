

import {Injectable} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import {NgForm} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
//import {HttpClientModule} from '@angular/commmon/http';


@Injectable({
	providedIn: 'root'
})

export class LandingService{
  
  constructor(private http: HttpClient, private router:Router){}
  someMethod(){
  	return "We're All Friends!";

  /*Account_name = localStorage.getItem("theAccountName")
  Display_name = localStorage.getItem("theDisplayName")
  Email = localStorage.getItem("theEmail")
  Phone_number = localStorage.getItem("thePhoneNumber") 
  Birthdate = localStorage.getItem("theBirthdate")
  Zipcode = localStorage.getItem("theZipcode")
  Password = localStorage.getItem("thePassword")
  Password_confirmation = localStorage.getItem("thePasswordConfirmation")


 console.log("local storage info"+Account_name )

*/


  

  	
  }
}
