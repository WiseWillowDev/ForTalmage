import { Injectable } from '@angular/core';
import { DataWrapper, Match } from './data-wrapper.interface';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  public getScore(data: DataWrapper): number {
    const relaventMatches = this.getRelaventMatches(data.data.matches);
    let totalKills = 0;
    let finalScore = 0;
    relaventMatches.forEach(match => {
      totalKills = totalKills + this.getKillsFromMatch(match);
      const matchPlacement = this.getPlacementFromMatch(match); 
      finalScore = finalScore + this.getScoreFromPlacement(matchPlacement);     
    })
    console.log(finalScore);
    console.log(totalKills);
    finalScore = finalScore + this.getScoreFromKills(totalKills)
    console.log(finalScore);
    return finalScore;
  }

  public getRelaventMatches(data: Match[]): Match[] {
    return data;
  }

  public getScoreFromKills(kills: number): number {
    return kills * 10;
  }

  public getScoreFromPlacement(placement: number): number {
    return 100 - placement;
  }

  public getKillsFromMatch(match: Match): number {
    let matchKills = 0;
    match.segments.forEach(seg => {
      const tempKills: number = +seg.stats.kills.displayValue;
      matchKills = matchKills + tempKills;
    });
    return matchKills;
  }

  public getPlacementFromMatch(match: Match): number {
    let placement = match.segments[0].stats.placement.displayValue;
    placement = placement.substring(0, placement.length-2);
    return +placement;
  }
}
 