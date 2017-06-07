import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { IBeerListing } from './beerListing';
import { SearchService } from './search.service';

@Component({
    selector: 'bl-search-results',
    templateUrl: 'app/search/search.results.component.html'
})

export class SearchResultsComponent implements OnInit {
    @Input() searchCriteria: string;
    beers: IBeerListing[];
    errorMessage: string;

    constructor(private _searchService: SearchService) {}

    ngOnInit(): void {
        if(this.searchCriteria) {
            this._searchService.search(this.searchCriteria)
                    .subscribe(x => this.beers = x, error => this.errorMessage = <any>error);
        }
    }

    ngOnChanges(): void {
        if(this.searchCriteria) {
            this._searchService.search(this.searchCriteria)
                    .subscribe(x => this.beers = x, error => this.errorMessage = <any>error);
        }
    }
}