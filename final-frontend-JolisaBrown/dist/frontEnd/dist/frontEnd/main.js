(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- to be able to use the routes created-->  \n<router-outlet></router-outlet>\n\n\n\n\n\n\n\n\n\n    \n\n    \n \n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    //title = 'My Front End Yayy!';
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: routes, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./searchbar/searchbar.component */ "./src/app/searchbar/searchbar.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _landing_landing_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing/landing.service */ "./src/app/landing/landing.service.ts");
/* harmony import */ var _main_main_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/main.service */ "./src/app/main/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();








//in response to error angular.element is not defined
//import * as _angular_ from 'angular';
var routes = [{ path: '', redirectTo: 'app', pathMatch: 'full' }, { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"] }, { path: 'app', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"] }, { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"] }, { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] }, { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"] }];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_9__["SearchbarComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                //i took out the config part from here...will this give me probs later??
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            exports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            providers: [_landing_landing_service__WEBPACK_IMPORTED_MODULE_11__["LandingService"], _main_main_service__WEBPACK_IMPORTED_MODULE_12__["MainService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n<div class=\"container\" style=\"background-color:lightblue;\">\n  <!--only displayed up until register button is clicked -->\n  <div class=\"container center\"  *ngIf=\"show3\">\n    <h1>Welcome to {{title}}!</h1>\n    <button type=\"button\" (click)=\"toggle()\" class=\"btn btn-primary btn-sm\" >Login</button> \n    \n <button type=\"button\" (click)=\"toggle2()\" class=\"btn btn-primary btn-sm\">Register</button> <br/> <br/>\n  </div>\n</div> \n\n  \n  <!--div class=\"center\" *ngIf=\"!show3\">\n    <button type=\"button\" (click)=\"toggle()\" class=\"btn btn-primary btn-sm\" >Login</button>\n  </div--> \n\n\n<!-- login and registration buttons-->\n<div class=center>\n \n</div>\n\n  \n\n  <ng-container *ngIf=\"show\">\n    <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">Login</div> \n          <div class=\"panel-body\">\n\n          <!-- Login-->\n          \n          <form id=\"myForm1\"  #myForm1 = \"ngForm\">\n            \n            <div class=\"form-group\">\n              <label for=\"account_name1\">Account Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"account_name1\" name=\"account_name1\" placeholder=\"Enter Account Name\" \n              [(ngModel)]=\"account_name1\" required>\n            </div>\n      \n            <div class=\"form-group\">\n              <label for=\"email_1\">Email</label>\n              <input type=\"text\" class=\"form-control\" id=\"email_1\" name=\"email_1\" placeholder=\"Enter Registered Email\" \n              [(ngModel)]=\"email_1\" required>\n            </div>\n      \n            <div class=\"form-group\">\n              <label for=\"password1\">Password</label>\n              <input type=\"password\" id=\"password1\" name=\"password1\" placeholder=\"Enter Password\" class=\"form-control\" [(ngModel)]=\"password1\" required>\n            </div> \n\n\n\n            \n\n\n              <input type=\"reset\" class=\"btn btn-primary\" value=\"Clear\" > \n              \n              <input type=\"button\" class=\"btn btn-primary\" value=\"Login\" (click)=\"onSubmit(account_name1, email_1, password1)\">\n            \n\n          </form> \n\n               <input type=\"button\" class=\"btn btn-primary\" value=\"Login with Facebook\" (click)=\"loginWithFacebook()\">\n        </div> \n\n\n\n  </div>\n    \n  </ng-container>  \n\n  <ng-container *ngIf=\"show2\">\n    <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">Register</div> \n          <div class=\"panel-body\">\n\n          <!-- Register-->\n          \n        </div> \n        <!-- (ngSubmit)=\"onRegister(myForm.valid)\" #myForm = \"ngForm\"-->\n   <form id=\"myForm\"  >\n\n            <div class=\"form-group\">\n              <label for=\"account_name\">Account Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"account_name\" name= \"account_name\" [(ngModel)]=\"account_name\" placeholder=\"Account Name\" required>\n              <!--div id=\"account_name_wrong\" class=\"alert alert-danger\">\n                <strong>Account Name is Required. </strong>   Account Name </label>\n             </div-->\n             <div id=\"account_name_wrong\" class=\"alert alert-danger hidden\">\n               <strong>Account Name is Required. </strong> \n             </div>\n           </div>\n      \n\n      \n            <!--div class=\"form-group\">\n              <label for=\"net_id\">Net Id</label>\n              <input type=\"text\" class=\"form-control\" id=\"net_id\" name=\"net_id\" [(ngModel)]=\"net_id\" placeholder=\"Net Id\" required>\n            </div-->\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Email address</label>\n            <input type=\"email\" [(ngModel)]=\"email\" class=\"form-control\" id=\"email\" name=\"email\" aria-describedby=\"email_help\" pattern=\"[A-Za-z0-9._%+-]+@[A-za-z-z0-9.-]+\\.[a-z]{2,3}$\" placeholder=\"Enter email\" required >\n            <small id=\"email_help\" class=\"form-text text-muted\">Must be in form handle@domain.xxx</small>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"phone_number\">Phone Number</label>\n            <input type=\"text\" class=\"form-control\" id=\"phone_number\"  name=\"phone_number\" [(ngModel)]=\"phone_number\" aria-describedby=\"password_help\" placeholder=\"Enter phone number\" required pattern=\"[0-9]{3}[ -][0-9]{3}[ -][0-9]{4}\" required>\n            <small id=\"password_help\" class=\"form-text text-muted\">Must be in form xxxxxxxxxx</small>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"birthdate\">Date of Birth</label>\n            <input type=\"date\" class=\"form-control\" id=\"birthdate\" name= \"birthdate\" [(ngModel)]=\"birthdate\" aria-describedby=\"birthdate_help\" placeholder=\"Enter birthdate\" required>\n            <small id=\"birthdate_help\" class=\"form-text text-muted\">Must be at least 18 years of age</small>\n          </div> \n\n          <div class=\"form-group\">\n            <label for=\"zip_code\">Zip Code</label>\n            <input type=\"text\" class=\"form-control\" id=\"zip_code\" name = zip_code [(ngModel)]=\"zip_code\" required pattern=\"[0-9]{5}\" placeholder=\"Zip Code\" required>\n          </div>    \n\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"password\"  placeholder=\"Enter Password\" required>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"password_confirmation\">Confirm Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password_confirmation\" name=\"password_confirmation\" [(ngModel)]=\"password_confirmation\" aria-describedby=\"password_confirmation_help\" placeholder=\"Re-enter password\" required>\n            <small id=\"password_confirmation_help\" class=\"form-text text-muted\">Please ensure that password and password confirmation match</small>\n          </div>\n\n          <input type=\"reset\" class=\"btn btn-primary\" value=\"Clear\" > \n          <input type=\"button\" class=\"btn btn-primary\" value=\"Register\" (click)=\"onRegister(account_name,password)\">\n      </form>\n\n  </div>\n    \n  </ng-container>  "

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing.service */ "./src/app/landing/landing.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LandingComponent = /** @class */ (function () {
    //status2 = "Hi Bud"
    //private router:Router
    function LandingComponent(landingService, router, http) {
        var _this = this;
        this.landingService = landingService;
        this.router = router;
        this.http = http;
        //url = "http://localhost:3000"
        this.url = "https://jolisa-hw7backend.herokuapp.com";
        //console.log("the registered"+ this.theRegistered)
        this.show = false;
        //show or hide the registration box 
        this.show2 = false;
        //show or hide original registration and login buttons, as well as new login button
        this.show3 = true;
        http.get('/assets/registered.json').subscribe(function (res) {
            _this.theRegistered = res;
        });
        //get the article information for the table
        http.get('/assets/articles.json').subscribe(function (res) {
            _this.theArticles = res;
        });
    }
    LandingComponent.prototype.toggle = function () {
        this.show = !this.show;
        if (this.show2 == true) {
            this.show2 = !this.show2;
        }
    };
    LandingComponent.prototype.toggle2 = function () {
        this.show2 = !this.show2;
        if (this.show == true) {
            this.show = !this.show;
        }
    };
    LandingComponent.prototype.toggle3 = function () {
        this.show3 = !this.show3;
        if (this.show == true || this.show2 == true) {
            this.show = !this.show;
            this.show2 = !this.show2;
        }
    };
    LandingComponent.prototype.onRegister = function (account_name, password) {
        var _this = this;
        if (!this.account_name) {
            console.log("account name is not valid ");
            alert('account name required');
            return;
        }
        /*if (!this.net_id){
          alert("net id required")
          return
        }*/
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        re.test(this.email);
        console.log(re.test(this.email));
        if (re.test(this.email) == false) {
            alert("email must be in form handle@domain.xxx; please revise ");
            return;
        }
        var re2 = /^\d{10}$/;
        if (re2.test(this.phone_number) == false) {
            alert("phone number must be in form xxxxxxxxxx; please revise");
            return;
        }
        if (this.birthdate !== undefined) {
            var eighteen_years = Date.UTC(1988, 1, 1);
            var the_dates = this.birthdate;
            var current_date = new Date();
            var current_time = current_date.getTime();
            var true_year1 = the_dates.slice(0, 4);
            var true_year = parseInt(true_year1);
            console.log(true_year);
            var true_month1 = the_dates.slice(6, 8);
            var true_month = parseInt(true_month1);
            console.log(true_month);
            var true_day1 = the_dates.slice(7, 9);
            var true_day = parseInt(true_day1);
            console.log(true_day);
            /*true_year = number(true_year)
            true_month = number(true_month)
            true_day= number(true_day)*/
            console.log("type of true year");
            console.log(typeof true_year);
            var kinda_user_age = Date.UTC(true_year, true_month, true_day);
            var user_age = current_time - kinda_user_age;
            console.log("user age " + user_age + "eighteen years " + eighteen_years);
            console.log((user_age) < eighteen_years);
        }
        if ((user_age < eighteen_years) || this.birthdate == undefined) {
            alert("Account holders must be at least 18 years of age.");
            return;
        }
        var re3 = /^\d{5}$/;
        if (re3.test(this.zip_code) == false) {
            alert("zip code must be in form xxxxx; please revise");
            return;
        }
        if (!this.password) {
            alert('password required');
            return;
        }
        if (this.password != this.password_confirmation) {
            alert("password and password confirmation must be the same; please revise");
            return;
        }
        var payload = { username: this.account_name, email: this.email, dob: this.birthdate, zipcode: this.zip_code, password: this.password };
        this.http.post(this.url + '/register', payload, { 'withCredentials': true }).subscribe(function (result) { _this.theRegistered = result; console.log(result); });
        if (this.show == true || this.show2 == true) {
            this.show = !this.show;
            this.show2 = !this.show2;
            console.log("the entered valies to function " + account_name + password);
        }
        return true;
    };
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
    LandingComponent.prototype.loginUser = function () {
        this.loginStatus = 'Hey Pretty Baby Let me Whisper in Your Ear.';
    };
    LandingComponent.prototype.loginWithFacebook = function () {
        //console.log("happy")
        //window.location.href="http://localhost:3000/auth/facebook"
        var _this = this;
        console.log("sup chicka");
        /*this.http.post(this.url+ '/auth/facebook/callback', {},
          {'withCredentials':true}).subscribe(result =>{this.happyFacebook = result; console.log(result);});*/
        this.http.get(this.url + '/auth/facebook', { 'withCredentials': true }).subscribe(function (result) { _this.happyFacebook = result; console.log(result); });
    };
    //the actual function
    LandingComponent.prototype.onSubmit = function (account_name1, email_1, password1) {
        //this.router.navigate(['/main'])
        //function here that returns the userId using a doc search on the email and username
        //profileId = 
        //http.get()...
        /*this.http.get('http://localhost:3000/headlines/[0]', {'withCredentials':true}).subscribe(result =>{this.status = result['headlines'][0]['headline']; console.log(result['headlines'][0]['headline'])}
        
         }*/
        var _this = this;
        console.log("teach me how to dougie");
        if (!this.account_name1) {
            console.log("account name is not valid ");
            alert('account name required');
            return;
        }
        if (!this.password1) {
            console.log("password is not valid ");
            alert('password required');
            return;
        }
        if (!this.email_1) {
            console.log("email is not valid ");
            alert('email required');
            return;
        }
        //check to see whether it passes the login function
        var payload = { "username": account_name1, "password": password1 };
        //check to determine whether username and password are appropriate
        this.http.post(this.url + '/login', payload, { 'withCredentials': true }).subscribe(function (result) {
            _this.loginStatus = result['result'];
            console.log(result);
            if (_this.loginStatus == 'success') {
                console.log("yayy! Valid username and password.");
            }
            else {
                console.log("Username and password invalid.");
                alert(_this.loginStatus);
                return;
            }
            /*
            console.log('here1', this.loginStatus)
            if (this.loginStatus !== 'success'){
              return
            }*/
        });
        console.log('here2');
        //now check to determine whether the email is appropriate
        console.log("account name 1" + account_name1);
        console.log("email_1" + email_1);
        this.http.get(this.url + '/profileId/' + account_name1 + "/" + email_1, { 'withCredentials': true }).subscribe(function (result) {
            _this.loginStatus = result['profileId'];
            console.log(result);
            localStorage.setItem("profileId", result['profileId']);
            console.log("this is the login status " + _this.loginStatus);
            if (_this.loginStatus == "none") {
                console.log('here3');
                console.log("Not a valid email");
                alert('Please use email previously registered with account.');
                return;
            }
            else {
                console.log('here4');
                alert('You have successfully logged in.');
                _this.router.navigate(['/main']);
            }
        });
        /*if (this.loginStatus !== 'none' && this.loginStatus !== 'User name and password not on file'){
         
         console.log("We're all clear on the login.")
         console.log('this.loginStatus equals' + this.loginStatus)
         
        }*/
    };
    LandingComponent.prototype.ngOnInit = function () {
        this.title = this.landingService.someMethod();
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [_landing_service__WEBPACK_IMPORTED_MODULE_2__["LandingService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.service.ts":
/*!********************************************!*\
  !*** ./src/app/landing/landing.service.ts ***!
  \********************************************/
/*! exports provided: LandingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingService", function() { return LandingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {HttpClientModule} from '@angular/commmon/http';
var LandingService = /** @class */ (function () {
    function LandingService(http, router) {
        this.http = http;
        this.router = router;
    }
    LandingService.prototype.someMethod = function () {
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
    };
    LandingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LandingService);
    return LandingService;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n.table-wrapper-scroll-y {\n  display: block;\n  max-height: 400px;\n  overflow-y: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n.thead-dark{\n  background-color: black;\n\n}\n\n.sidenav {\n    width: 170px;\n    position: fixed;\n    z-index: 1;\n    top: 0px;\n    left: 0px;\n    background: #eee;\n    overflow-x: hidden;\n    padding: 8px 0;\n}\n\n.sidenav a {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #2196F3;\n    display: block;\n}\n\n.sidenav a:hover {\n    color: #064579;\n}\n\n.main {\n    margin-left: 140px; /* Same width as the sidebar + left position in px */\n    font-size: 13px; /* Increased text to enable scrolling */\n    padding: 0px 10px;\n}\n\n#navigation\n{\n    background-color: #0F2F56 ; \n    height:100%;\n    color: white;\n    float:left;\n    \n    z-index:1;\n}\n\n@media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n    .sidenav a {font-size: 18px;}\n}"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n   \n<router-outlet></router-outlet>\n    \n<div class=\"container\">\n<div class=\"row\">\n<h1 class=\"text-center\"> Your {{title}}</h1>\n<!--All of the content above the table -->\n\n<div name= \"profile/avatar\" class=\"text-right\" >\n  \n  <h6> Hey Jojo</h6>\n  <p id=\"myStatus\"> Status: {{status}}</p>\n<!-- Button to update status-->\n\n  <div class=\"row\">\t\n  \n    <img id=\"img1\" src= \"assets/jojo.png\" alt=\"Jojo\" style=\"width:60px;height:80px;\">\t\n    <a routerLink=\"/app\" (click) = \"logout()\">Logout </a>\n    <a routerLink=\"/profile\"> Profile </a>\n    \n  </div>\n\n  <button type=\"button\" (click)=\"atoggle()\" class=\"btn btn-primary btn-sm\">Update Status</button> <br/> <br/>\n\n  \n\n  <ng-container *ngIf=\"show\">\n    <!-- Changing your status-->\n      <button id= \"myStatus\" type=\"button\" (click)=\"changeStatus(textarea.value)\" class=\"btn btn-primary btn-sm\">Update </button>\n\n      <textarea #textarea rows=\"2\" [(ngModel)]=\"newStatus\" name=\"aStatus\" type=\"text\"></textarea>\n\n    <!--input #textbox type=\"text\" [(ngModel)]=\"status\" required-->\n\n    \n  </ng-container>\n  <hr>\n</div>\n</div>\n</div>\n<!-- This is my sidebar, I put it all in a container split between the sidebar and the main section-->\n\n<div class=\"container\">\n<div name=\"sidebar\" class=\"sidenav\" id=\"navigation\">\t\n\n  <h3>My Followers</h3>  \n \n <button type=\"button\" (click)=\"toggle2()\" class=\"btn btn-primary btn-sm\">Add Follower</button> <br/> <br/>\n <button type=\"button\" (click)=\"toggle4()\" class=\"btn btn-primary btn-sm\">Remove Follower</button> <br/> <br/>\n \n  <ng-container *ngIf=\"show2\">\n    <!-- Describing the follower you want to add-->\n\n      <form id=\"myForm2\" #myForm2 = \"ngForm\">\n            <div class=\"form-group\">\n              <label for=\"follower_name\">Follower Name:</label>\n              <input class= \"follower_name\" type=\"text\" class=\"form-control\" id=\"follower_name\" name=\"follower_name\"  \n              [(ngModel)]=\"follower_name\" required>\n            </div>\n      \n            <div class=\"form-group\">\n              <label for=\"follower_status\"> Follower Email: </label>\n              <input type=\"text\" class=\"form-control\" id=\"follower_email\" name=\"follower_email\"  \n              [(ngModel)]=\"follower_email\" required>\n            </div>\n      <button type=\"button\" (click)=\"addFollower(follower_name,follower_email)\" class=\"btn btn-primary btn-sm\">Post Follower </button>     \n\n          </form> \n\n  </ng-container>\n\n\n  <ng-container *ngIf=\"show4\">\n    <!-- Describing the follower you want to add-->\n\n      <form id=\"myForm4\" #myForm4 = \"ngForm\">\n            <div class=\"form-group\">\n              <label for=\"follower_name2\">Follower Name:</label>\n              <input class= \"follower_name2\" type=\"text\" class=\"form-control\" id=\"follower_name2\" name=\"follower_name2\"  \n              [(ngModel)]=\"follower_name2\" required>\n            </div>\n      \n            <div class=\"form-group\">\n              <label for=\"follower_status2\"> Follower Email: </label>\n              <input type=\"text\" class=\"form-control\" id=\"follower_email2\" name=\"follower_email2\"  \n              [(ngModel)]=\"follower_email2\" required>\n            </div>\n      <button type=\"button\" (click)=\"removeFriend(follower_name2,follower_email2)\" class=\"btn btn-primary btn-sm\">Remove </button>     \n\n          </form> \n\n  </ng-container>\n\n\n\n\n\n\n  <div class=\"followers\">\n   <div *ngFor=\"let follower of theFollowers\">\n    <div *ngIf='mainService.isDefined(follower)'>\n    <p> {{follower.username}} </p>\n    <p><img id=\"img1\" src= {{follower.avatar}} alt=\"\n      jojo\" style=\"float:left;width:70px;height:80px;\"> Status: {{follower.headline}}  </p><br><br><br>\n    </div>  \n   </div>\n    <!--span class=\"followerName\">{follower.name}}</span> {{follower.avatar}}{{follower.status}}\n  </li-->\n </div>\n\n<!--ul class=\"followers\">\n  <li *ngFor=\"let follower of theFollowers\">\n    <span class=\"friends\">{{follower.name}}</span> {{follower.avatar}}{{follower.status}}\n  </li>\n</ul-->\n\n  \n</div>\n\n<!-- You can do the search bar here-->\n<!--div class = \"center\"\n<input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for article by author or title..\" title=\"Type in a name\">\n</div-->\n\n<div class=\"center\">\n  <input class=\"searchParameters\" class=\"form-control\" rows=\"1\" id=\"searchParameters\" [(ngModel)]=\"searchParameters\" name=\"searchParameters\" type=\"text\" placeholder=\"Search by author or title...\" (change)=\"searching(searchParameters)\">\n\n\n\n</div>\n\n\n\n<!-- This is the div where all the non-sidebar content goes-->\n\n\n\n<div name=\"main content\" class=\"main\">\n\n\n  <div class=\"table-wrapper-scroll-y\">\n\n  <table class=\"table table-bordered table-striped\"  >\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>\n          Recent News <button id= \"some_comments\" class= \"center-right\" type=\"button\" (click)=\"commentViewing()\" class=\"btn btn-primary btn-sm\">View Article Comments</button>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <!-- Inserting new table entries as users create them-->\n      <!--tr *ngFor=\"let row of rows\">\n      <td>{{row.newPost}}</td>     \n      </tr--> \n\n        <!-- on-mouseover='filterArticle(article)'-->\n      <div *ngFor=\"let article of theArticles\" >\n      <!--div *ngIf='filterArticle(article)'-->\n      <div *ngIf='filterArticle(article)'>\n      <tr >\n      <td>{{article.body}} \n        <div *ngIf='mainService.hasImage(article)'>\n        <img id=\"img2\" src= {{article.picture}} style=\"float:right;width:80px;height:80px;\">\n         </div>\n\n        <br>{{article.author}} <br>{{article.date}} <br><br>\n\n      <button type=\"button\" class=\"btn btn-primary btn-sm\">Comment</button>\n      <button type=\"button\" class=\"btn btn-primary btn-sm\">Edit</button><br><br>\n\n      \n      <br><br>\n\n      <div *ngIf='show3'>\n        Comments: <br>\n        <strong>{{article.comments}}</strong><br><br>\n      </div>  \n\n\n      </td>     \n      </tr>\n      \n\n      </div>\n      </div>\n\n    </tbody>\n  </table>\n </div> \n\n\n\n\n\n<!-- finiwh here-->\n\n<div class=\"container\">\n  <h2>Create New Post: </h2>\n  <form id=\"myForm2\" (ngSubmit)=\"makePost(myForm2.valid)\" #myForm2 = \"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"Post\">Post:</label>\n      <textarea class=\"form-control\" rows=\"3\" id=\"comment\" [(ngModel)]=\"newPost\" name=\"aPost\" type=\"text\"></textarea>\n    </div>\n\n    <div class=\"form-group\">\n      <input type=\"file\" (change)=\"onFileChanged($event)\">\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary btn-sm\">Post</button>\n    <button type=\"reset\" class=\"btn btn-primary btn-sm\">Clear</button>\n    \n    <!-- This guy currently does nothing-->\n\n   </form>\n</div>\n</div>\n<!-- This is the div for the entire sidebar and main content bar-->\n</div>\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.service */ "./src/app/main/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = /** @class */ (function () {
    //retrievedArticles = localStorage.getItem("theStoredArticles");
    //theArticles = JSON.parse(localStorage.getItem("theStoredArticles"));
    function MainComponent(mainService, http) {
        //profileId = localStorage.getItem("profileId")
        //get the friends and folllowers for the side bar
        //http.get('/assets/followers.json').subscribe(res => {
        //this.theFollowers = res;});
        var _this = this;
        this.mainService = mainService;
        this.http = http;
        this.loginStatus = "logged in";
        //url = "http://localhost:3000"
        this.url = "https://jolisa-hw7backend.herokuapp.com";
        this.rows = [];
        this.show2 = false;
        this.show4 = false;
        //show or hide the update status box before updating
        this.show = false;
        this.profileId = localStorage.getItem("profileId");
        this.show3 = false;
        //get the user's followers and their info
        this.http.get(this.url + "/followingInfo/" + this.profileId, { 'withCredentials': true }).subscribe(function (result) { _this.theFollowers = result['following']; console.log(result['following']); console.log(_this.theFollowers); });
        //set the articles feed
        this.http.get(this.url + '/articles', { 'withCredentials': true }).subscribe(function (result) { _this.theArticles = result['articles']; console.log("the Articles " + _this.theArticles.length + _this.theArticles); });
        //get the user headline
        this.http.get(this.url + "/headlines/" + this.profileId, { 'withCredentials': true }).subscribe(function (result) { _this.status = result['headlines'][0]['headline']; console.log(_this.status); });
        /*http.get('/assets/articles.json').subscribe(res => {
          this.articlesCopy = res;
    
        });*/
        //get the authors list
        http.get('/assets/authors.json').subscribe(function (res) {
            _this.theAuthors = res;
        });
        this.title = this.mainService.someMethod();
    }
    MainComponent.prototype.onFileChanged = function (event) {
        //var file = event.target.files[0]
        this.file = event.target.files[0];
        console.log("This is the file" + this.file);
        console.log(typeof this.file);
        //localStorage.setItem("theFile", JSON.stringify(file))
        //const fd = new FormData()
        //fd.append('text', message)
        //fd.append('image', file)
    };
    MainComponent.prototype.makePost = function (form) {
        var _this = this;
        var theResult;
        console.log("make post button works");
        //this.theArticles = JSON.parse(localStorage.getItem("theStoredArticles"));
        //this is the get articles function with no id
        this.http.get(this.url + '/articles', { 'withCredentials': true }).subscribe(function (result) { _this.theArticles = result['articles']; console.log(result); });
        //@ViewChild('imageInput') imageInput: ElementRef;
        console.log("here is the imageFile");
        //console.log(this.imageInput.nativeElement.files[0])
        /*AfterViewInit() {
           console.log(this.imageInput.nativeElement.value) ;
         }*/
        //payload = {"image": imageInput, "text": this.newPost}
        //how can i globallly access the file??
        console.log("This is the file type in makePost function" + typeof this.file);
        //file = JSON.parse(localStorage.getItem("theFile"))
        console.log(this.file);
        var fd = new FormData();
        fd.append('text', this.newPost);
        fd.append('image', this.file);
        console.log("this is the fd" + fd);
        //these next two lines are options of things to try, but i'd need to import Headers and RequestOptions
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers }); 
        this.http.post(this.url + '/article', fd, { 'withCredentials': true, headers: {
                'Content-Type': 'application/json'
            }
        }).subscribe(function (result) { _this.theArticles = result['articles']; console.log("new article list " + result); });
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
    };
    //upload new image with post
    MainComponent.prototype.toggle2 = function () {
        //add followers form
        this.show2 = !this.show2;
        if (this.show2 == true && this.show4 == true) {
            //this.show2 = !this.show2
            this.show4 = !this.show4;
        }
        return;
    };
    MainComponent.prototype.toggle4 = function () {
        //remove followers form
        this.show4 = !this.show4;
        if (this.show4 == true && this.show2 == true) {
            this.show4 = !this.show4;
            this.show2 = !this.show2;
        }
        return;
    };
    MainComponent.prototype.atoggle = function () {
        this.show = !this.show;
        return;
    };
    MainComponent.prototype.changeStatus = function (value) {
        var _this = this;
        this.show = !this.show;
        //localStorage.setItem("theStatus", ` '${value}'\n`);
        //this.status = ` '${value}'\n`;
        //this.status = localStorage.getItem("theStatus");
        console.log("ckickis");
        var payload = { username: "jmb27", headline: " '" + value + "'\n" };
        console.log();
        console.log("hello buddy");
        console.log(this.profileId);
        console.log("That was the profileId");
        //this.http.get('http://localhost:3000/headlines/[0]', {'withCredentials':true}).subscribe(result =>{this.status = result['headlines'][0]['headline']; console.log(result['headlines'][0]['headline'])}
        this.http.put(this.url + '/headline', payload, { 'withCredentials': true }).subscribe(function (result) { _this.status = result['headline']; console.log(result); });
        console.log('That was the status');
        console.log("Here I am" + this.status);
    };
    MainComponent.prototype.addFollower = function (follower_name, follower_email) {
        //check for validation
        var _this = this;
        this.followerProfileId = '';
        this.friendRegistered = "true";
        //getting the profile info of the new follower
        this.http.get(this.url + '/profileId/' + follower_name + "/" + follower_email, { 'withCredentials': true }).subscribe(function (result) {
            _this.followerProfileId = result['profileId'];
            localStorage.setItem("theFollowerProfileId", result['profileId']);
            if (_this.followerProfileId == "none") {
                alert('New friend not a registered user; Please add only registered users as friends.');
                _this.friendRegistered = "false";
                console.log("FRIEND REGISTEREDDDD?" + _this.friendRegistered);
            }
            ;
        });
        console.log("this is the followerProfileId" + localStorage.getItem("theFollowerProfileId"));
        //check to see if the user is on file
        if (this.friendRegistered == "false") {
            //we won't add this unregistered friend, and can exit the addFollower function
            return;
        }
        //using that info to add the new user
        this.http.put(this.url + '/following/' + localStorage.getItem("theFollowerProfileId"), {}, { 'withCredentials': true }).subscribe(function (result) {
            _this.newFollowerList = result['following'];
            console.log("result " + result);
            console.log("this.theFollowers AYYYYYYYYYYY" + _this.newFollowerList);
            if (_this.newFollowerList == "not a user on file") {
                console.log("somehow we still tried to add them as a friend even tho we should've exited the function since the 'new friend' wasn't registered.");
            }
        });
        location.reload();
        //and using the modified get function to provide the neccesary additional info
        this.http.get(this.url + "/followingInfo/" + this.profileId, { 'withCredentials': true }).subscribe(function (result) {
            _this.theFollowers = result['following'];
            console.log(result['following']);
            console.log(_this.theFollowers);
        });
        this.show2 = !this.show2;
    };
    MainComponent.prototype.commentViewing = function () {
        this.show3 = !this.show3;
    };
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
    MainComponent.prototype.filterArticle = function (anArticle) {
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
                this.shared = "no";
                return false;
            }
        }
        if (typeof this.theAuthors !== 'undefined') {
            var authors = JSON.parse(JSON.stringify(this.theAuthors));
            //console.log("mi amor" + authors)
            if (anArticle.author !== "") {
                //console.log()
                if (this.theAuthors.indexOf(anArticle.author) == -1) {
                    this.shared = "no";
                    //console.log("line 243 this.shared" + this.shared)
                    return false;
                }
            }
            if (typeof this.searchParameters == 'undefined') {
                this.shared = "yes";
                return true;
            }
            if ((anArticle.author.toUpperCase()).indexOf(this.searchParameters.toUpperCase()) > -1) {
                //console.log("search parameters 252  has authorr"+ this.searchParameters)
                this.shared = "yes";
                return true;
            }
            if ((anArticle.titles.toUpperCase()).indexOf(this.searchParameters.toUpperCase()) > -1) {
                //console.log("search parameters 252 has title "+ this.searchParameters)
                this.shared = "yes";
                return true;
            }
            this.shared = "no";
            return false;
        }
        this.shared = "yes";
        return true;
    };
    MainComponent.prototype.logout = function () {
        this.loginStatus = "logged out";
    };
    MainComponent.prototype.removeFriend = function (follower_name2, follower_email2) {
        var _this = this;
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
        this.followerProfileId = '';
        this.friendRegistered = "true";
        //getting the profile info of the new follower
        this.http.get(this.url + '/profileId/' + follower_name2 + "/" + follower_email2, { 'withCredentials': true }).subscribe(function (result) {
            _this.followerProfileId = result['profileId'];
            localStorage.setItem("theFollowerProfileId", result['profileId']);
            if (_this.followerProfileId == "none") {
                alert('Not already a registered friend; You may only remove friends you currently have.');
                _this.friendRegistered = "false";
                console.log("FRIEND REGISTEREDDDD?" + _this.friendRegistered);
            }
            ;
        });
        console.log("this is the followerProfileId" + localStorage.getItem("theFollowerProfileId"));
        //check to see if the user is on file
        if (this.friendRegistered == "false") {
            //we won't add this unregistered friend, and can exit the addFollower function
            alert("friend not registered");
            return;
        }
        //using that info to add the new user
        this.http.delete(this.url + '/following/' + localStorage.getItem("theFollowerProfileId"), { 'withCredentials': true }).subscribe(function (result) {
            _this.newFollowerList = result['following'];
            console.log("result " + result);
            console.log("this.theFollowers AYYYYYYYYYYY" + _this.newFollowerList);
            if (_this.newFollowerList == "not a user on file") {
                console.log("somehow we still tried to add them as a friend even tho we should've exited the function since the 'new friend' wasn't registered.");
            }
            else {
                //reload the page once you've updated your following list if it does need to be updated/removed user is a valid friend
                location.reload();
            }
        });
        //and using the modified get function to provide the neccesary additional info
        this.http.get(this.url + "/followingInfo/" + this.profileId, { 'withCredentials': true }).subscribe(function (result) {
            _this.theFollowers = result['following'];
            console.log(result['following']);
            console.log(_this.theFollowers);
        });
    };
    MainComponent.prototype.searching = function (searchKeyword) {
        console.log("search Parameter 300" + this.searchParameters);
        this.searchParameters = searchKeyword;
        console.log("302 these are our search parameters" + this.searchParameters);
    };
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/main.service.ts":
/*!**************************************!*\
  !*** ./src/app/main/main.service.ts ***!
  \**************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {HttpClientModule} from '@angular/commmon/http';
var MainService = /** @class */ (function () {
    function MainService(http) {
        this.http = http;
        this.rows = [];
        this.newStatus = '';
        this.status = "I'm feeling blessed.";
        /*http.get('/assets/followers.json').subscribe(res => {
        this.theFollowers=res;} );
      
        //get the authors list
        http.get('/assets/authors.json').subscribe(res => {
        this.theAuthors=res;});*/
        this.show2 = false;
    }
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
    MainService.prototype.someMethod = function () {
        return "Feed";
    };
    MainService.prototype.hasImage = function (anArticle) {
        if (typeof anArticle !== 'undefined') {
            //console.log(anArticle)
            if (anArticle.image !== "none") {
                return true;
            }
            return false;
        }
        return true;
    };
    MainService.prototype.isDefined = function (anything) {
        if (anything === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
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
    MainService.prototype.makePost = function (form) {
        console.log("make post button works");
        //makes their entry a new row in the table
        //this.rows.push( {newPost: this.newPost } );
        this.theArticles.unshift({ "titles": this.newPost, "image": "none", "author": "", "date": "" });
        //clears the input
        this.newPost = null;
    };
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n<div class=\"row\" class=\"float-left\">\t\n    <h6>     Jojo</h6>\n\n    <img id=\"img1\" src= \"assets/jojo.png\" alt=\"Jojo\" style=\"width:60px;height:80px;\">\t\n    \n  </div>\n\n<a routerLink=\"/main\">Return to Main Page</a>\n<a routerLink=\"/app\" (click) = \"logout()\">Logout </a>\n\n<div class=\"center\">\n\n<h1> Registration Info: </h1> <br><br>\n\n<button type=\"button\" (click)=\"toggle()\" class=\"btn btn-primary btn-sm center\">Update Registration Details </button>\n\n<h5>\n  \n\n  <!--Account name: {{Account_name}}   \n  \n  <ng-container *ngIf=\"show\">\n    \n      <br> <br>\n\n      <textarea [(ngModel)]=\"account_name\" #textarea rows=\"1\" class=\"form-control\"  name=\"account_update\" type=\"text\"></textarea> <br>\n\n      <button type=\"button\" (click)=\"Update(textarea.value,0)\" class=\"btn btn-primary btn-sm\">Submit </button>\n    \n  </ng-container><br><br>\n  \n\n\n  \n  Net Id: {{Net_id}} \n    \n    <ng-container *ngIf=\"show\">\n    \n      <br> <br>\n      <textarea class=\"form-control\" #textarea rows=\"1\" name=\"display_update\" type=\"text\"></textarea>  <br>\n    \n       <button type=\"button\" (click)=\"Update(textarea.value,1)\" class=\"btn btn-primary btn-sm\">Submit </button>\n    </ng-container> <br><br>-->\n\n  \n  Email: {{Email}}  \n    \n    <ng-container *ngIf=\"show\">\n    <!-- Changing your email handle value-->\n<br> <br>\n      <textarea class = \"form-control\" #textarea rows=\"1\"  name=\"display_update\" type=\"text\"></textarea> <br> \n      \n      <button type=\"button\" (click)=\"Update(textarea.value,2)\" class=\"btn btn-primary btn-sm\">Update </button>\n    </ng-container> <br><br>\n  \n\n  <!--\n  Phone number:  {{Phone_number}} \n    \n    <ng-container *ngIf=\"show\">\n    \n      <br> <br>\n\n      <textarea class=\"form-control\" #textarea rows=\"1\" name=\"display_update\" type=\"text\"></textarea> <br> \n\n      <button type=\"button\" (click)=\"Update(textarea.value,3)\" class=\"btn btn-primary btn-sm\">Submit </button>\n    \n    </ng-container> <br><br>-->\n  \n  Birthdate:  {{Birthdate}} \n\n  <br><br>\n  \n \n  Zipcode: {{Zipcode}} \n    \n    <ng-container *ngIf=\"show\">\n    <!-- Changing your account name value-->\n     \n      <br> <br>\n      <textarea class=\"form-control\" #textarea rows=\"1\"  name=\"display_update\" type=\"text\"></textarea> <br> \n\n      <button type=\"button\" (click)=\"Update(textarea.value,5)\" class=\"btn btn-primary btn-sm\">Submit </button>\n    \n     </ng-container> <br><br>\n  \n  \n  Password: {{Password}} \n    \n    <ng-container *ngIf=\"show\">\n    <!-- Changing your account name value-->\n       <br> <br>\n       <textarea  class=\"form-control\" #textarea rows=\"1\" name=\"display_update\" type=\"text\"></textarea> <br> \n\n       <button type=\"button\" (click)=\"Update(textarea.value,6)\" class=\"btn btn-primary btn-sm\">Submit </button>\n\n      \n    \n    </ng-container> <br><br>\n  \n  \n  <!--Password confirmation: {{Password_confirmation}} \n     \n     <ng-container *ngIf=\"show\">\n    \n       <br> <br>\n\n        <textarea class=\"form-control\" #textarea rows=\"1\"  name=\"display_update\" type=\"text\"></textarea> <br>\n\n         \n         <button type=\"button\" (click)=\"Update(textarea.value,7)\" class=\"btn btn-primary btn-sm\">Submit </button><br><br>\n     </ng-container> -->\n\n\n\n</h5>\n     <button type=\"button\" (click)=\"toggle2()\" class=\" btn btn-primary btn-sm center\">Select New Profile Image </button>\n\n\n<ng-container *ngIf=\"show2\">\n    <!-- Changing your account name value-->\n       <br> <br>\n  <div class=\"form-group\">\n      <input type=\"file\" (change)=\"onFileChanged($event)\">\n    </div>\n</ng-container> <br><br>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n<!--label for=\"typeahead-basic\">Search for article by author:</label>-->\n\n<!--input id=\"typeahead-basic\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\"-->\n\n<!--input id=\"typeahead-basic\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" \n(change)=\"search\"/>\n<hr>\n<h5>Author: {{ model | json }}</h5-->\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {Observable} from 'rxjs';
//import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(http) {
        var _this = this;
        this.http = http;
        this.profileId = localStorage.getItem("profileId");
        this.url = "http://localhost:3000";
        this.show = false;
        this.show2 = false;
        //this.http.get(this.url +"/email", {'withCredentials':true}).subscribe(result =>{Email = result['email']; console.log(result['email'])} 
        this.http.get(this.url + "/email/" + this.profileId, { 'withCredentials': true }).subscribe(function (result) { _this.Email = result['email']; console.log(result['email']); });
        this.http.get(this.url + '/dob/' + this.profileId, { 'withCredentials': true }).subscribe(function (result) { _this.Birthdate = result['dob']; console.log(result['dob']); });
        this.http.get(this.url + '/zipcode/' + this.profileId, { 'withCredentials': true }).subscribe(function (result) { _this.Zipcode = result['zipcode']; console.log(result['zipcode']); });
        this.Password = "Confidential";
    }
    ProfileComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    ProfileComponent.prototype.toggle2 = function () {
        this.show2 = !this.show2;
    };
    ProfileComponent.prototype.logout = function () {
        this.loginStatus = "logged out";
    };
    ProfileComponent.prototype.Update = function (text, number) {
        var _this = this;
        var payload = {};
        if (number == 2) {
            //localStorage.setItem("theEmail", text);
            payload = { "email": text };
            this.http.put(this.url + '/email', payload, { 'withCredentials': true }).subscribe(function (result) { _this.Email = result['email']; console.log(result); });
            console.log(text);
            location.reload();
        }
        if (number == 5) {
            //localStorage.setItem("theZipcode", text);
            payload = { "zipcode": text };
            this.http.put(this.url + '/zipcode', payload, { 'withCredentials': true }).subscribe(function (result) { _this.Zipcode = result['zipcode']; console.log(result); });
            location.reload();
        }
        if (number == 6) {
            //localStorage.setItem("thePassword", text);
            //localStorage.setItem("thePasswordConfirmation", text);
            payload = { "password": text };
            this.http.put(this.url + '/password', payload, { 'withCredentials': true }).subscribe(function (result) { _this.Password = result['zipcode']; console.log(result); });
            location.reload();
        }
    };
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/searchbar/searchbar.component.css":
/*!***************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/searchbar/searchbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/searchbar/searchbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.ts ***!
  \**************************************************/
/*! exports provided: SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchbarComponent = /** @class */ (function () {
    function SearchbarComponent() {
    }
    SearchbarComponent.prototype.ngOnInit = function () {
    };
    SearchbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchbar',
            template: __webpack_require__(/*! ./searchbar.component.html */ "./src/app/searchbar/searchbar.component.html"),
            styles: [__webpack_require__(/*! ./searchbar.component.css */ "./src/app/searchbar/searchbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchbarComponent);
    return SearchbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jolisabrown/Documents/GitHub/final-frontend-JolisaBrown/dist/frontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map