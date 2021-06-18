import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataWrapper } from '../interfaces/data-wrapper.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private endpoint = 'https://api.tracker.gg/api/v2/warzone/standard/matches/xbl/';

  constructor(private readonly http: HttpClient) { }

  public getDataForGamer(gamerTag: string): Observable<DataWrapper> {
    // return this.http.get<DataWrapper>(`http://localhost:5000/${gamerTag}`)
    return this.http.get<DataWrapper>(`https://fortalmage.uc.r.appspot.com/gamertag/${gamerTag}`)
  }
}
