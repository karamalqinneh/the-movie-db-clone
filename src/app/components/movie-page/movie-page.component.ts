import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.sass'],
})
export class MoviePageComponent implements OnInit {
  id!: string;
  currentMovie!: any;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.apiService
      .get(
        `https://api.themoviedb.org/3/movie/${this.id}?api_key=<<api_key>>&language=en-US`
      )
      .subscribe((ele) => (this.currentMovie = ele));
  }
}
