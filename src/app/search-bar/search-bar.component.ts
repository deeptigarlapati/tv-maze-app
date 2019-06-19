import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  search = new FormControl('', [Validators.minLength(2)]);
  @Output() onSearchEvent = new EventEmitter<string>();

  constructor() { }
  
  ngOnInit() {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((searchvalue : string) => {
      console.log(searchvalue);
      this.onSearchEvent.emit(searchvalue);
    })
  }

}
