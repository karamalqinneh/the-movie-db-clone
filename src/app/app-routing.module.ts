import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'movie/:id', component: MoviePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
