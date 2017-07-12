import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ILocationStatistics } from './locationStatistics';
import { IBreweryStatistics } from './breweryStatistics';
import { IYearlyStatistics } from './yearlyStatistics';
import { IDailyStatistics } from './dailyStatistics';
import { IAverageStatistics } from './averageStatistics';

@Injectable()
export class StatisticsService {
    //private _url = 'http://localhost:42043/api/statistics/';

    constructor(private _http: Http) {}

    getLocationStatistics(): Observable<ILocationStatistics> {
        //this._url + 'location'
        return this.getStatistics<ILocationStatistics>('api/locationStatistics.json');
    }

    getBreweryStatistics(): Observable<IBreweryStatistics> {
        //this._url + 'brewery'
        return this.getStatistics<IBreweryStatistics>('api/breweryStatistics.json');
    }

    getYearlyStatistics(): Observable<IYearlyStatistics> {
        //this._url + 'yearly'
        return this.getStatistics<IYearlyStatistics>('api/yearlyStatistics.json');
    }

    getDailyStatistics(): Observable<IDailyStatistics> {
        //this._url + 'daily'
        return this.getStatistics<IDailyStatistics>('api/dailyStatistics.json');
    }

    getAverageStatistics(): Observable<IAverageStatistics> {
        //this._url + 'average'
        return this.getStatistics<IAverageStatistics>('api/averageStatistics.json');
    }

    private getStatistics<T>(url: string): Observable<T> {
        return this._http.get(url)
            .map((response: Response) => <T> response.json());
    }
}