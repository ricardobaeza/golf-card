import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPlayer} from "../players";

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  private _url: string = '/assets/data/players.json';
  constructor( private http: HttpClient) { }

  getPlayerNames(): Observable<any>{
    return this.http.get<any>(this._url);
  }
}
