import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IBeer } from './beer';

@Injectable()
export class DetailsService {
    private _url = 'api/beer.json';
    //private _url = 'http://localhost:42043/api/beer/';

    constructor(private _http: Http) {}

    get(beerId: number): Observable<IBeer> {
        //return this._http.get(this._url + beerId)
        return this._http.get(this._url)
            .map((response: Response) => <IBeer> response.json());
    }
}