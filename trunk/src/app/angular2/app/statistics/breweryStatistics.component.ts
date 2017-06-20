import { Component, OnInit } from '@angular/core';

import { IBreweryStatistics } from './breweryStatistics';
import { StatisticsService } from './statistics.service';

@Component({
    selector: 'bl-brewery-statistics',
    templateUrl: 'app/statistics/breweryStatistics.component.html'
})

export class BreweryStatisticsComponent {
    private statistics: IBreweryStatistics;
    private errorMessage: string;

    constructor(private _statisticsService: StatisticsService) {}

    ngOnInit() {
        this._statisticsService.getBreweryStatistics()
            .subscribe(x => this.statistics = x, error => this.errorMessage = <any>error);
    }
}