import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Ng2CompleterModule } from 'ng2-completer';

import { AppComponent }  from './app.component';

import { SearchComponent } from './search.1/search.component';
import { SearchResultsComponent } from './search.1/search.results.component';
import { SearchService } from './search.1/search.service';

import { DetailsComponent } from './details/details.component';
import { DetailsService } from './details/details.service';
import { EditComponent } from './details/edit.component';

import { StatisticsComponent } from './statistics/statistics.component';
import { StatisticsService } from './statistics/statistics.service';
import { LocationStatisticsComponent } from './statistics/locationStatistics.component';
import { BreweryStatisticsComponent } from './statistics/breweryStatistics.component';

import { YearlyComparisonComponent } from './statistics/graphs/yearlyComparison.component';

@NgModule({
  imports: [ 
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2CompleterModule,
    RouterModule.forRoot([
      { path: 'search', component: SearchComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'beerDetails/:id', component: DetailsComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: 'yearlyComparisonGraph', component: YearlyComparisonComponent },
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: '**', redirectTo: 'search', pathMatch: 'full' }
    ])
  ],
  declarations: [ 
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
    DetailsComponent,
    EditComponent,
    StatisticsComponent,
    LocationStatisticsComponent,
    BreweryStatisticsComponent,
    YearlyComparisonComponent
  ],
  providers: [
    SearchService,
    DetailsService,
    StatisticsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
