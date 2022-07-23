import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-banner',
  templateUrl: './search-banner.component.html',
  styleUrls: ['./search-banner.component.sass'],
})
export class SearchBannerComponent implements OnInit {
  searchQuery!: string;
  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    console.log(this.searchQuery);
  }
}
