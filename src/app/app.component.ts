import { Component } from '@angular/core';
import { TvshowService } from './tvshow.service';
import { ICurrentShow } from './icurrent-show';
import { Router } from '@angular/router';
// import { icurrentshow } from './icurrent-show';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TV MAZE';

  constructor (private router: Router ) {
  }

  showSearch(searchValue) {
    this.router.navigate(['/search-results', searchValue])
  }

  ngOnInit() {
  }

}
