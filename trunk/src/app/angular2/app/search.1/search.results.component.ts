import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { IBeerListing } from './beerListing';

@Component({
    selector: 'bl-search-results',
    templateUrl: 'app/search/search.results.component.html'
})

export class SearchResultsComponent implements OnInit {
    @Input() items: IBeerListing[];
}