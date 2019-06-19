import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailsComponent } from './show-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { TvshowService } from '../tvshow.service';
import { TvshowServiceFake } from '../tvshow.service.fake';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShowDetailsComponent', () => {
  let component: ShowDetailsComponent;
  let fixture: ComponentFixture<ShowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule, HttpClientModule, HttpClientTestingModule],
      declarations: [ ShowDetailsComponent ],
      providers:[{provide: TvshowService,
      useClass: TvshowServiceFake}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
