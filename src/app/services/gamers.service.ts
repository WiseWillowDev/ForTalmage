import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataWrapper } from '../interfaces/data-wrapper.interface';
import { ApiErrorWrapper } from '../interfaces/error.interface';
import { Gamer } from '../interfaces/gamer.interface';
import { ApiService } from './api.service';
import { ScoreService } from './score.service';

@Injectable({
  providedIn: 'root'
})
export class GamersService {

  gamers: Gamer[] = [];

  $gamers: Subject<Gamer[]> = new Subject();

  constructor(private readonly apiService: ApiService, 
    private readonly scoreService: ScoreService) { }

  public addGamerByGamerTag(gamerTag: string): void {
    if (!this.doesGamerExist(gamerTag)) {
      const gamer = this.createGamer(gamerTag);
      this.gamers.push(gamer);
      this.refreshGamer$();  
    }
  }

  doesGamerExist(gamerTag: string): boolean {
    let isThere = false;
    this.gamers.forEach(gamer => (gamer.gamerTag == gamerTag) ? isThere = true : null);
    return isThere;
  }

  public refreshGamer$(): void {
    this.$gamers.next(this.gamers);
  }

  private createGamer(tag: string): Gamer {
    const gamerObj: Gamer = {gamerTag: tag, score: 0, kills: 0, matches: []};
    return gamerObj;
  }

  public getGamers(): Observable<Gamer[]> {
    return this.$gamers;
  }

  public calculateScore(): void {
    this.gamers.forEach(gamer => {
      this.apiService.getDataForGamer(gamer.gamerTag).subscribe((data: DataWrapper | ApiErrorWrapper) => {
        if ('data' in data) {
          gamer.score = this.scoreService.getScore(data);
          gamer.kills = this.scoreService.getTotalKills(data);
          gamer.matches = this.scoreService.getRelaventMatches(data.data.matches);
        } else if ('errors' in data) { 
          gamer.score = 0;
          gamer.gamerTag = gamer.gamerTag + '--UNAVAILABLE'
          console.log('there was an error');
        }
      })
    })
    this.refreshGamer$();
  }
}
