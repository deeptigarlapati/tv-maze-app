import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICurrentShow } from '../icurrent-show';
import { TvshowService } from '../tvshow.service';
import { ISingleShowDetails } from '../isingleShowDetails';
import { Route } from '@angular/compiler/src/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  showName: string;
  show: ISingleShowDetails;
  

  constructor(private route: ActivatedRoute,
     private tvShowService: TvshowService,
     private location: Location ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.showName = params['showName'];
      this.tvShowService.getSingleShowByName(params['showName'])
      
      .subscribe(
        (data: ISingleShowDetails) => (this.show = data))
    })
  }

  navigateToHomePage() {
    this.location.back();
  }

}
