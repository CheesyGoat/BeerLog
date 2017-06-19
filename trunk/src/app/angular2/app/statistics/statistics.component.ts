import { Component, OnInit } from '@angular/core';

import { StatisticsService } from './statistics.service';
import { ILocationTotals } from './locationTotals';

@Component({
    templateUrl: `app/statistics/statistics.component.html`
})

export class StatisticsComponent {
    private locationTotals: ILocationTotals;
    private errorMessage: string;

    constructor(private _statisticsService: StatisticsService) {}

    ngOnInit(): void {
        this._statisticsService.getLocationTotals()
                    .subscribe(x => this.locationTotals = x, error => this.errorMessage = <any>error);;
    }
}