import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ILocationTotals } from './LocationTotals';

@Injectable()
export class StatisticsService {
    private _url = 'api/locationTotals.json';
    //private _url = 'http://localhost:42043/api/statistics/';

    constructor(private _http: Http) {}

    getLocationTotals(): Observable<ILocationTotals> {
        //return this._http.get(this._url + "locationTotals")
        return this._http.get(this._url)
            .map((response: Response) => <ILocationTotals> response.json());
    }
}