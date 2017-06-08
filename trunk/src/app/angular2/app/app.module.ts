import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search/search.results.component';
import { SearchService } from './search/search.service';
import { StatisticsComponent } from './statistics/statistics.component';

import { DetailsComponent } from './details/details.component';
import { DetailsService } from './details/details.service';
import { EditComponent } from './details/edit.component';

@NgModule({
  imports: [ 
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'search', component: SearchComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'beerDetails/:id', component: DetailsComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: '**', redirectTo: 'search', pathMatch: 'full' }
    ])
  ],
  declarations: [ 
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
    StatisticsComponent,
    DetailsComponent,
    EditComponent
  ],
  providers: [
    SearchService,
    DetailsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
