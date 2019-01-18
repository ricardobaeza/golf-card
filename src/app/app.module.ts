import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule, MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerAddComponent } from './player-add/player-add.component';
import { RouterModule, Routes } from '@angular/router';
import { GolfCourseDisplayComponent } from './golf-course-display/golf-course-display.component';
import {HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "@angular/fire";
import { environment} from "../environments/environment"



const appRoutes:Routes = [
  {path: 'welcomePage', component: WelcomePageComponent },
  {path: 'playerAdd', component: PlayerAddComponent},
  {path: 'golfDisplay', component: GolfCourseDisplayComponent},
  {path: '', redirectTo:'/welcomePage', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    PlayerAddComponent,
    GolfCourseDisplayComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule

  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
