import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { NavComponent } from './nav/nav.component';
import { ViewmessageComponent } from './viewmessage/viewmessage.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
const apprRoutes:Routes=[
  {path:'',component:MessageComponent},
  {path:'message',component:MessageComponent},
  {path:'viewmessage',component:ViewmessageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    NavComponent,
    ViewmessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(apprRoutes)
  ],
  providers: [],
  bootstrap: [NavComponent,AppComponent]
})
export class AppModule { }
