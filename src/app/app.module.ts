import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentShowComponent } from './current-show/current-show.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatGridListModule } from '@angular/material';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    CurrentShowComponent,
    ShowDetailsComponent,
    SearchResultsComponent,
    SearchBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule, 
    MatIconModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatGridListModule,
    FlexLayoutModule,
    MatTooltipModule,
    NgbModule 
  ],

  exports: [
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule, 
    MatIconModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatGridListModule
  ],

  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
