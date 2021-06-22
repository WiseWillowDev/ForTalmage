import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { T_Time } from '../interfaces/t-time.interface';

@Injectable({
  providedIn: 'root'
})
export class TournamentTimeService {

  data: T_Time = {
    startDate: new Date().toDateString(),
    startTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
    duration: 90
  };

  data$: Subject<T_Time> = new Subject<T_Time>()

  constructor() { }

  getDataObservable(): Observable<T_Time> {
    return this.data$;
  }


  setDateAndTime(t_time: T_Time): void {
    this.data = t_time;
    this.data$.next(this.data);
  }


  getDateAndTime(): T_Time {
    return this.data;
  }

}
