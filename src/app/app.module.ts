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
import { RouterModule, Routes } from '@angular/router';
import { GolfCourseDisplayComponent } from './golf-course-display/golf-course-display.component';
import {HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "@angular/fire";
import { environment} from "../environments/environment"
import {AngularFireDatabase} from "@angular/fire/database";
import { PlayerNameComponent } from './player-name/player-name.component';
import { DuplicateNameFixerPipe } from './shared/duplicate-name-fixer.pipe';
import {AngularFirestore} from '@angular/fire/firestore';
import { CreatorComponent } from './creator/creator.component';



const appRoutes:Routes = [
  {path: 'welcomePage', component: WelcomePageComponent },
  {path: 'golfDisplay', component: GolfCourseDisplayComponent},
  {path: 'playerName', component: PlayerNameComponent},
  {path: '', redirectTo: '/welcomePage', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    GolfCourseDisplayComponent,
    PlayerNameComponent,
    DuplicateNameFixerPipe,
    CreatorComponent,

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
  providers: [ AngularFirestore ],
  bootstrap: [AppComponent]
})
export class AppModule { }
