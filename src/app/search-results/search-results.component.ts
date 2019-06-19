import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICurrentShow } from '../icurrent-show';
import { TvshowService } from '../tvshow.service';
import { Location } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  shows: ICurrentShow[];
  breakpoint: number;
 

  constructor(private route: ActivatedRoute,
     private tvShowService: TvshowService,
     private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // SearchString is from route configuration referred to app-routing.module
      this.tvShowService.getShowsByName(params['SearchString'])
      .subscribe(
        (data: ICurrentShow[]) => (this.shows = data))
    });
    
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 5;
    
  }
  
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 5;
  }

  navigateToHomePage() {
    this.location.back();
  }

}
