import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './api.service';
import { DataWrapper } from './data-wrapper.interface';
import { ApiErrorWrapper } from './error.interface';
import { Gamer } from './gamer.interface';
import { ScoreService } from './score.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ForTalmage';
  gamers: Gamer[] = []

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
    const gamerObj: Gamer = {gamerTag: tag, score: 0, kills: 0};
    return gamerObj;
  }

  killerWhales(): void {
    this.gamers.forEach(gamer => {
      this.apiService.getTestingFromFlask(gamer.gamerTag).subscribe((data: DataWrapper | ApiErrorWrapper) => {
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
