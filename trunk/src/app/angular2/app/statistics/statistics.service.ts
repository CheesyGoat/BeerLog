import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ILocationStatistics } from './locationStatistics';
import { IBreweryStatistics } from './breweryStatistics';

@Injectable()
export class StatisticsService {
    //private _url = 'http://localhost:42043/api/statistics/';

    constructor(private _http: Http) {}

    getLocationStatistics(): Observable<ILocationStatistics> {
        //return this._http.get(this._url + "location")
        return this._http.get('api/locationStatistics.json')
            .map((response: Response) => <ILocationStatistics> response.json());
    }

    getBreweryStatistics(): Observable<IBreweryStatistics> {
        //return this._http.get(this._url + "brewery")
        return this._http.get('api/breweryStatistics.json')
            .map((response: Response) => <IBreweryStatistics> response.json());
    }
}