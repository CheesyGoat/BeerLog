import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IBrewerySearch } from './brewerySearch';

@Injectable()
export class BrewerySearchService {
    private _url = 'api/breweries.json';
    //private _url = 'http://localhost:42043/api/search/breweries/';

    constructor(private _http: Http) {}

    search(searchCriteria: string): Observable<IBrewerySearch[]> {
        //return this._http.get(this._url + searchCriteria)
        return this._http.get(this._url)
            .map((response: Response) => <IBrewerySearch[]> response.json());
    }
}