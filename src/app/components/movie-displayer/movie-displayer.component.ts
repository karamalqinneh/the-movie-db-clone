import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-movie-displayer',
  templateUrl: './movie-displayer.component.html',
  styleUrls: ['./movie-displayer.component.sass'],
})
export class MovieDisplayerComponent {
  popular: any[] = ['Streaming', 'On TV', 'For Rent', 'In Theaters'];
  @Input() tag!: string;
  data!: any;
  constructor(private api: ApiServiceService) {}

  ngOnInit(): void {
    this.api
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1'
      )
      .subscribe((res: any) => {
        this.data = res.results;
      });
  }

  updateData(event: string) {
    if (event.trim() === 'Streaming') {
      console.log('working');
      this.api
        .get(
          'https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1'
        )
        .subscribe((res: any) => {
          this.data = res.results;
        });
    } else if (event.trim() === 'On TV') {
      this.api
        .get(
          'https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1'
        )
        .subscribe((res: any) => {
          this.data = res.results;
        });
    } else {
      this.api
        .get(
          'https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1'
        )
        .subscribe((res: any) => {
          this.data = res.results;
        });
    }
  }
}
