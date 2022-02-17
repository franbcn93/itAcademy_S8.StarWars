import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StarshipsComponent } from './starships/starships.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyPopupComponent } from './my-pop-up/my-pop-up.component';
import { LogAndSignComponent } from './log-and-sign/log-and-sign.component';
import { MyPopUpSignComponent } from './my-pop-up-sign/my-pop-up-sign.component';

const routes: Routes=[
  {path: '', component:HomeComponent},
  {path: 'starships', component:StarshipsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarshipsComponent,
    MyPopupComponent,
    LogAndSignComponent,
    MyPopUpSignComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  
}
