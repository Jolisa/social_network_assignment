import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {enableProdMode} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

enableProdMode();

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchComponent } from './search/search.component';
import {LandingService} from './landing/landing.service';
import {MainService} from './main/main.service';

//in response to error angular.element is not defined
//import * as _angular_ from 'angular';




export const routes: Routes = [{path:'', redirectTo:'app', pathMatch:'full'},{path: 'landing', component: LandingComponent},{path: 'app', component: LandingComponent}, {path: 'main', component: MainComponent}, {path: 'profile', component: ProfileComponent}, {path: 'search', component: SearchComponent} ];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProfileComponent,
    LandingComponent,
    SearchbarComponent,
    SearchComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    //i took out the config part from here...will this give me probs later??
    RouterModule.forRoot(routes, {useHash:true}), 
    HttpClientModule
  ],
  exports:[
    HttpClientModule,
    RouterModule
  ],
  providers: [LandingService, MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }














