import { Component, OnInit } from '@angular/core';

import { IDailyStatistics } from './dailyStatistics';
import { StatisticsService } from './statistics.service';

@Component({
    selector: 'bl-daily-statistics',
    templateUrl: 'app/statistics/dailyStatistics.component.html'
})

export class DailyStatisticsComponent {
    private statistics: IDailyStatistics;
    private errorMessage: string;

    constructor(private _statisticsService: StatisticsService) {}

    ngOnInit() {
        this._statisticsService.getDailyStatistics()
            .subscribe(x => this.statistics = x, error => this.errorMessage = <any>error);
    }
}