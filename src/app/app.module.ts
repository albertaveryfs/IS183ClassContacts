import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ToastModule } from './toast/toast.module';
import { LoginComponent } from './login/login.component';

import { AppRoutes } from './app.routes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SharedServiceModule } from '../shared-service/shared-service.module';
import { CoursesComponent } from './courses/courses.component';
import { GroupsComponent } from './groups/groups.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainNavComponent,
    HomeComponent,
    CartComponent,
    CoursesComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastModule,
    AppRoutes,
    BrowserAnimationsModule,
    MaterialDesignModule,
    SharedServiceModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
