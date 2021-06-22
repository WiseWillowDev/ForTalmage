import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataWrapper } from '../interfaces/data-wrapper.interface';
import { ApiErrorWrapper } from '../interfaces/error.interface';
import { Gamer } from '../interfaces/gamer.interface';
import { ApiService } from '../services/api.service';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  title = 'ForTalmage';
  gamers: Gamer[] = [];
  
  gamerForm = new FormGroup({
    gamer: new FormControl('', Validators.required)
  });

  rulesForm = new FormGroup({
    startDate: new FormControl('', Validators.required),
    timeDuration: new FormControl('', Validators.required),
    startTime: new FormControl('', Validators.required)
  });

  constructor(private readonly apiService: ApiService, private readonly scoreService: ScoreService) {}

  ngOnInit(): void {
    const talmagesTag = 'LilChiimpi'
    this.gamers.push(this.createGamer(talmagesTag));
  }

  addGamer(): void {
    if (this.gamerForm.valid) {
      this.gamers.push(this.createGamer(this.gamerForm.controls.gamer.value));
    }
  }

  createGamer(tag: string): Gamer {
    const gamerObj: Gamer = {gamerTag: tag, score: 0, kills: 0, matches: []};
    return gamerObj;
  }

  getScores(): void {
    this.gamers.forEach(gamer => {
      this.apiService.getDataForGamer(gamer.gamerTag).subscribe((data: DataWrapper | ApiErrorWrapper) => {
        console.log(gamer);
        console.log(data);
        if ('data' in data) {
          gamer.score = this.scoreService.getScore(data);

        } else if ('errors' in data) { 
          gamer.score = 0;
          gamer.gamerTag = 'X:--' + gamer.gamerTag + '--:X'
          console.log('there was an error');
        }
      })
    })
  }
}
