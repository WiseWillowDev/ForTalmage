import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataWrapper } from './data-wrapper.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private endpoint = 'https://api.tracker.gg/api/v2/warzone/standard/matches/xbl/';

  constructor(private readonly http: HttpClient) { }


  public getStuff(gametag: string): Observable<any> {
    return this.http.get(`${this.endpoint}${gametag}?type=wz`);
  }

  public getTestingFromFlask(gamerTag: string): Observable<DataWrapper> {
    return this.http.get<DataWrapper>(`http://fortalmage.uc.r.appspot.com/gamertag/${gamerTag}`)
  }
}
