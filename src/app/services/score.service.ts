import { Injectable } from '@angular/core';
import { DataWrapper, Match } from '../interfaces/data-wrapper.interface';
import { PointValue } from '../interfaces/point.interface';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  pointValues: PointValue = {
    killValue: 10,
    placementValueArray: [100, 60, 40, 35, 30, 25, 20, 15, 10, 5]
  }

  public getPointValues(): PointValue {
    return this.pointValues;
  }

  public updatePointValues(newValues: PointValue): void {
    this.pointValues = newValues;
  }


  public getScore(data: DataWrapper): number {
    const relaventMatches = this.getRelaventMatches(data.data.matches);
    let finalScore = 0;
    relaventMatches.forEach(match => {
      const matchPlacement = this.getPlacementFromMatch(match); 
      finalScore = finalScore + this.getScoreFromPlacement(matchPlacement);     
    })
    const totalKills = this.getTotalKills(data);
    finalScore = finalScore + this.getScoreFromKills(totalKills)
    return finalScore;
  }

  public getTotalKills(data: DataWrapper): number {
    const relaventMatches = this.getRelaventMatches(data.data.matches);
    let totalKills = 0;
    relaventMatches.forEach(match => {
      totalKills = totalKills + this.getKillsFromMatch(match);
    })
    return totalKills;
  }

  public getRelaventMatches(data: Match[]): Match[] {
    return data;
  }

  public getScoreFromKills(kills: number): number {
    return kills * this.pointValues.killValue;
  }

  public getScoreFromPlacement(placement: number): number {
    if (placement > 10) {
      return 0
    } 
    return this.pointValues.placementValueArray[placement-1];
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
 