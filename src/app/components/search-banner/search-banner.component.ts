import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-search-banner',
  templateUrl: './search-banner.component.html',
  styleUrls: ['./search-banner.component.sass'],
})
export class SearchBannerComponent implements OnInit {
  searchQuery!: string;
  constructor(private apiService: ApiServiceService, private router: Router) {}

  ngOnInit(): void {}

  onClick(): void {
    console.log(this.searchQuery);
    this.apiService
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=${this.searchQuery}&page=1&include_adult=false`
      )
      .subscribe((ele: any) =>
        this.router.navigate(['movie/' + `${ele.results[0].id}`])
      );
  }
}
