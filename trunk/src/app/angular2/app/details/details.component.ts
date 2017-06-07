import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DetailsService } from './details.service';
import { IBeer } from './beer';

@Component({
    templateUrl: 'app/details/details.component.html'
})

export class DetailsComponent implements OnInit {
    beer: IBeer;
    errorMessage = "Failed to load Beer";

    constructor(private _route: ActivatedRoute, private _detailsService: DetailsService) {};

    ngOnInit(): void {
        let beerId = +this._route.snapshot.params['id'];
        console.log(beerId);
        if(beerId) {
            this._detailsService.get(beerId)
                    .subscribe(x => this.beer = x, error => this.errorMessage = <any>error);
        }
    }
}