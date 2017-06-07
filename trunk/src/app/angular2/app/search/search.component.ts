import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
    templateUrl: 'app/search/search.component.html'
})

export class SearchComponent implements OnInit {
    searchCriteria: string;
    newSearchCriteria: string;
    searchCriteriaControl = new FormControl();
    
    ngOnInit(): void {
        this.searchCriteriaControl.valueChanges
                .debounceTime(1000)
                .subscribe(x => this.newSearchCriteria = this.searchCriteria)
    }
}