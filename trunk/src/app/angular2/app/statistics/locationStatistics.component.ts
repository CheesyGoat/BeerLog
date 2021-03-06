import { Component, OnInit } from '@angular/core';

import { ILocationStatistics } from './locationStatistics';
import { StatisticsService } from './statistics.service';

@Component({
    selector: 'bl-location-statistics',
    templateUrl: 'app/statistics/locationStatistics.component.html'
})

export class LocationStatisticsComponent {
    private statistics: ILocationStatistics;
    private errorMessage: string;

    constructor(private _statisticsService: StatisticsService) {}

    ngOnInit() {
        this._statisticsService.getLocationStatistics()
            .subscribe(x => this.statistics = x, error => this.errorMessage = <any>error);
    }
}