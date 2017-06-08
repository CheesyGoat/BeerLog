import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DetailsService } from './details.service';
import { IBeer } from './beer';

@Component({
    templateUrl: 'app/details/edit.component.html'
})

export class EditComponent {
    beer: IBeer;
    errorMessage = "Failed to load Beer";

    constructor(private _route: ActivatedRoute, private _detailsService: DetailsService) {};

    ngOnInit(): void {
        let beerId = +this._route.snapshot.params['id'];
        
        if(beerId) {
            this._detailsService.get(beerId)
                    .subscribe(x => this.beer = x, error => this.errorMessage = <any>error);
        }
    }
}