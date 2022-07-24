import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import {RouterM}

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBannerComponent } from './components/search-banner/search-banner.component';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { MovieDisplayerComponent } from './components/movie-displayer/movie-displayer.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { TrailerBannerComponent } from './components/trailer-banner/trailer-banner.component';
import { TrailerCardComponent } from './components/trailer-card/trailer-card.component';
import { JoinBannerComponent } from './components/join-banner/join-banner.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviePageComponent } from './components/movie-page/movie-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SearchBannerComponent,
    SwitcherComponent,
    MovieDisplayerComponent,
    MovieCardComponent,
    TrailerBannerComponent,
    TrailerCardComponent,
    JoinBannerComponent,
    LeaderboardComponent,
    FooterComponent,
    MoviePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
