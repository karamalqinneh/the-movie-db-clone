import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  getPoster(link: string) {
    return `https://image.tmdb.org/t/p/w500${link}`;
  }

  handleRoute() {
    this.router.navigate(['movie/' + `${this.movie.id}`]);
  }
}
