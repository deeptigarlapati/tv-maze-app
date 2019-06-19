import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';


const routes: Routes = [
  { path: 'show-details/:showName', component: ShowDetailsComponent },
  { path: 'search-results/:SearchString', component: SearchResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
