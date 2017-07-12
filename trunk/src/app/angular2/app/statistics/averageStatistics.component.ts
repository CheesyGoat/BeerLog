import { Component, OnInit } from '@angular/core';

import { IAverageStatistics } from './averageStatistics';
import { StatisticsService } from './statistics.service';

@Component({
    selector: 'bl-average-statistics',
    templateUrl: 'app/statistics/averageStatistics.component.html'
})

export class DailyStatisticsComponent {
    private statistics: IAverageStatistics;
    private errorMessage: string;

    constructor(private _statisticsService: StatisticsService) {}

    ngOnInit() {
        this._statisticsService.getAverageStatistics()
            .subscribe(x => this.statistics = x, error => this.errorMessage = <any>error);
    }
}