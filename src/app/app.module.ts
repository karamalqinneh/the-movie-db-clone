import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
