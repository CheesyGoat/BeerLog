import { Component, OnInit } from '@angular/core';

import { IYearlyStatistics } from './yearlyStatistics';
import { StatisticsService } from './statistics.service';

@Component({
    selector: 'bl-yearly-statistics',
    templateUrl: 'app/statistics/yearlyStatistics.component.html'
})

export class YearlyStatisticsComponent {
    private statistics: IYearlyStatistics;
    private errorMessage: string;

    constructor(private _statisticsService: StatisticsService) {}

    ngOnInit() {
        this._statisticsService.getYearlyStatistics()
            .subscribe(x => this.statistics = x, error => this.errorMessage = <any>error);
    }
}