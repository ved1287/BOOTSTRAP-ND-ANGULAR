import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import{HttpClientModule} from '@angular/common/http';
import { Test1Component } from './test1/test1.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    Test2Component,
    Test3Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
