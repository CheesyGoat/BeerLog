import { Component, OnInit } from '@angular/core';

import { ILocationTotals } from './locationTotals';
import { StatisticsService } from './statistics.service';

@Component({
    selector: 'bl-location-statistics',
    templateUrl: 'app/statistics/locationStatistics.component.html'
})

export class LocationStatisticsComponent {
    private statistics: ILocationTotals;
    private errorMessage: string;

    constructor(private _statisticsService: StatisticsService) {}

    ngOnInit() {
        this._statisticsService.getLocationTotals()
            .subscribe(x => this.statistics = x, error => this.errorMessage = <any>error);
    }
}