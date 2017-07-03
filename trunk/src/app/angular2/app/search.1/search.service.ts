import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IBeerListing } from './beerListing';

@Injectable()
export class SearchService {
    private _url = 'api/beerListings.json';
    //private _url = 'http://localhost:42043/api/search/';

    constructor(private _http: Http) {}

    search(searchCriteria: string): Observable<IBeerListing[]> {
        //return this._http.get(this._url + searchCriteria)
        return this._http.get(this._url)
            .map((response: Response) => <IBeerListing[]> response.json());
    }
}