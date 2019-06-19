import { Component, OnInit, Input } from '@angular/core';
import {ICurrentShow} from '../icurrent-show';
import { Router } from '@angular/router';
@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {
  @Input() current: ICurrentShow

  constructor(private router: Router) {
  
  }

  ngOnInit() {
  }

  navigateToShowDetails(showName: string) {
    this.router.navigate(['/show-details', showName])
  }

}
