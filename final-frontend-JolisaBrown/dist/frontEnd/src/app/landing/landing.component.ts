import { Component, OnInit } from '@angular/core';
import{AppService} from "../app.service";
import {Router} from '@angular/router';
import {LandingService} from './landing.service';
import {NgForm} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
  //providers: [LandingService]
})
export class LandingComponent implements OnInit {
  
  title: string;
  theRegistered;
  theArticles;
  //loginStatus = "Just starting"
  loginStatus;
  validUser;

  url = "http://localhost:3000"
  //url = "https://jolisa-hw7backend.herokuapp.com"
  profileId;
  status;
  happyFacebook; 
  canPass;
  canPass2;



  //status2 = "Hi Bud"
  
  

//private router:Router

  constructor(private landingService: LandingService, private router:Router, private http: HttpClient) { 

  http.get('/assets/registered.json').subscribe(res => {
      this.theRegistered=res;
      
    } );

  //get the article information for the table
    http.get('/assets/articles.json').subscribe(res => {
      this.theArticles = res;

    });

  

  }
  //private landingService: LandingService
  //login values
  //loginStatus: string

  account_name1: string
  password1:string


  //registration values
  account_name: string
  
  email:string
  email_1:string
  phone_number:string
  birthdate: string
  zip_code:string
  password:string
  password_confirmation:string
  



  


  

  //console.log("the registered"+ this.theRegistered)
 
    public show:boolean = false;
     toggle() {
     this.show = !this.show;
     if (this.show2 ==true){
      this.show2 = !this.show2
     }
     }

  //show or hide the registration box 
    public show2:boolean = false;
     toggle2() {
     this.show2 = !this.show2;
     if (this.show == true){
      this.show = !this.show
     }
    }  



  //show or hide original registration and login buttons, as well as new login button
    public show3:boolean = true;
     toggle3() {
     this.show3 = !this.show3;
     if (this.show == true || this.show2 == true){
      this.show = !this.show
      this.show2 = !this.show2
     }
    }  

  onRegister(account_name, password){ 
   
  
    
    if (!this.account_name){
   	  console.log("account name is not valid ")
   	  alert('account name required')  
   	  return
    }
    /*if (!this.net_id){
   	  alert("net id required")
   	  return
    }*/
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re.test(this.email);
    console.log(re.test(this.email))
    if (re.test(this.email) == false){
   	  alert("email must be in form handle@domain.xxx; please revise ")
   	  return
    }
    var re2 = /^\d{10}$/
    if (re2.test(this.phone_number) == false){
   	  alert("phone number must be in form xxxxxxxxxx; please revise")
   	  return
    }
    
   if(this.birthdate !==undefined) {
    var eighteen_years = Date.UTC(1988, 1, 1);
    
    
    var the_dates = this.birthdate; 
    
    
    var current_date = new Date ();
    var current_time = current_date.getTime ();
    var true_year1 = the_dates.slice(0,4);
    var true_year = parseInt(true_year1);
    console.log(true_year)
    var true_month1 = the_dates.slice(6,8);
    var true_month = parseInt(true_month1);
    console.log(true_month)
    var true_day1 = the_dates.slice(7,9);
    var true_day = parseInt(true_day1);
    console.log(true_day)

    /*true_year = number(true_year)
    true_month = number(true_month)
    true_day= number(true_day)*/

    

    console.log("type of true year")
    console.log( typeof true_year)


    var kinda_user_age= Date.UTC(true_year, true_month, true_day);
    var user_age = current_time - kinda_user_age
    console.log("user age "+ user_age+ "eighteen years "+ eighteen_years);
    console.log((user_age) < eighteen_years)}
    
    if((user_age < eighteen_years)|| this.birthdate == undefined){

      alert("Account holders must be at least 18 years of age.");
      return}
    


    var re3 = /^\d{5}$/
    if (re3.test(this.zip_code) == false){
   	  alert("zip code must be in form xxxxx; please revise")
   	  return
    }
    if (!this.password){
   	  alert('password required')  
   	  return
    }
    if(this.password != this.password_confirmation) {
      alert("password and password confirmation must be the same; please revise");
      return
    } 

   var payload = { username: this.account_name , email: this.email , dob: this.birthdate , zipcode: this.zip_code, password: this.password}
   this.http.post(this.url + '/register', payload, {'withCredentials':true}).subscribe(result =>{this.theRegistered = result; console.log(result)})
   
   if (this.show == true || this.show2 == true){
      this.show = !this.show
      this.show2 = !this.show2
      console.log("the entered valies to function "+account_name + password)
     }
    return true

  }

  /*if (typeof(Storage) !== "undefined") {  
    localStorage.setItem("theAccountName", this.account_name);
    localStorage.setItem("theNetId", this.net_id);
    localStorage.setItem("theEmail", this.email);
    localStorage.setItem("thePhoneNumber", this.phone_number);
    localStorage.setItem("theBirthdate", this.birthdate);
    localStorage.setItem("theZipcode", this.zip_code);  
    localStorage.setItem("thePassword", this.password);
    localStorage.setItem("thePasswordConfirmation", this.password_confirmation);
    //this is the status for the main page
    localStorage.setItem("theStatus", "I'm feeling blessed.")
    localStorage.setItem("theStoredArticles", this.theArticles)
    

    //localStorage.setItem("registrationInformation", [this.account_name,this.display_name,this.email,this.phone_number,this.birthdate,this.password,this.password_confirmation])
    var someVarName = localStorage.getItem("registrationInformation");
    console.log(someVarName)  
   }*/

  

  loginUser(){
    this.loginStatus='Hey Pretty Baby Let me Whisper in Your Ear.'

  }


   loginWithFacebook(){
    //console.log("happy")
    //window.location.href="http://localhost:3000/auth/facebook"
    
    console.log("sup chicka")
    /*this.http.post(this.url+ '/auth/facebook/callback', {},
      {'withCredentials':true}).subscribe(result =>{this.happyFacebook = result; console.log(result);});*/


    this.http.get(this.url+ '/auth/facebook',
      {'withCredentials':true}).subscribe(result =>{this.happyFacebook = result; console.log(result);});

     }


  //the actual function

   onSubmit(account_name1,email_1, password1) { 
     //this.router.navigate(['/main'])
    //function here that returns the userId using a doc search on the email and username
    //profileId = 
    //http.get()...
    /*this.http.get('http://localhost:3000/headlines/[0]', {'withCredentials':true}).subscribe(result =>{this.status = result['headlines'][0]['headline']; console.log(result['headlines'][0]['headline'])}
    
     }*/
     


    console.log("teach me how to dougie")
    if (!this.account_name1){
      console.log("account name is not valid ")
      alert('account name required')
      return
    }
    if (!this.password1){
      console.log("password is not valid ")
      alert('password required')
      return
    }
    if (!this.email_1){
      console.log("email is not valid ")
      alert('email required')

      return
    }

    //check to see whether it passes the login function

    
    this.http.get(this.url + '/profileId/'+ account_name1 +"/"+ email_1, {'withCredentials':true}).subscribe(result =>{this.loginStatus = result['profileId']; console.log(result); localStorage.setItem("profileId", result['profileId']);
      console.log("this is the login status "+ this.loginStatus)
      if (this.loginStatus == "none" ){
        console.log('here3')
        console.log("Not a valid email")
        alert('Please use email previously registered with account.')
        return 
      }
      else{
        console.log('here4')
        
      }

     })


    var payload = {"username":account_name1, "password": password1 }
    //check to determine whether username and password are appropriate
    this.http.post(this.url + '/login', payload, {'withCredentials':true}).subscribe(result =>{this.loginStatus = result['result']; console.log(result);
      if(this.loginStatus == 'success'){
        console.log("yayy! Valid username and password.") 
        alert('You have successfully logged in.')
        this.router.navigate(['/main'])
      }
      else{
        console.log("Username and password invalid.")
        alert(this.loginStatus)

        return

      }
      /*
      console.log('here1', this.loginStatus)
      if (this.loginStatus !== 'success'){
        return
      }*/

      })
    
    console.log('here2')
    console.log("This is the login status "+this.loginStatus)
    //now check to determine whether the email is appropriate
    console.log("account name 1" + account_name1)
    console.log("email_1" + email_1)
    
   
   /*if (this.loginStatus !== 'none' && this.loginStatus !== 'User name and password not on file'){
    
    console.log("We're all clear on the login.")
    console.log('this.loginStatus equals' + this.loginStatus)
    
   }*/

    
    }



  ngOnInit() {
    this.title = this.landingService.someMethod();
    
  }
  


}





