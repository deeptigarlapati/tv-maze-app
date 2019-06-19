import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule,ReactiveFormsModule,
      FormsModule],
      declarations: [ SearchBarComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
