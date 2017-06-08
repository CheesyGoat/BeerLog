import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompleterService, CompleterData } from 'ng2-completer';

import { DetailsService } from './details.service';
import { IBeer } from './beer';

@Component({
    templateUrl: 'app/details/edit.component.html'
})

export class EditComponent {
    beer: IBeer;
    errorMessage = "Failed to load Beer";
    brewerySearch: string;
    breweries: CompleterData;
    breweryList = [
        { name: 'Brewery 1' },
        { name: 'Brewery 2' }
    ];

    constructor(private _route: ActivatedRoute, private _detailsService: DetailsService, private _completerService: CompleterService) {};

    ngOnInit(): void {
        let beerId = +this._route.snapshot.params['id'];
        
        if(beerId) {
            this._detailsService.get(beerId)
                    .subscribe(x => this.beer = x, error => this.errorMessage = <any>error);
        }

        this.breweries = this._completerService.local(this.breweryList, 'name', 'name');
    }
}