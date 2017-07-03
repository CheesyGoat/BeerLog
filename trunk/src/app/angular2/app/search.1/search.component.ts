import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { IBeerListing } from './beerListing';
import { SearchService } from './search.service';

@Component({
    templateUrl: 'app/search/search.component.html'
})

export class SearchComponent implements OnInit {
    searchCriteria: string;
    searchCriteriaControl = new FormControl();
    
    private searchTermStream = new Subject<string>();
    private items: IBeerListing[];

    constructor(private _searchService: SearchService) {}

    ngOnInit(): void {
        this.searchCriteriaControl.valueChanges
                .debounceTime(1000)
                .subscribe(x => this.searchTermStream.next(this.searchCriteria))
        
        this.items = this.searchTermStream
                .distinctUntilChanged()
                .switchMap((term: string) => this._searchService.search(term));
    }
}