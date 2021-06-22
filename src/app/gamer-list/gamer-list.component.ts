import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataWrapper } from '../interfaces/data-wrapper.interface';
import { ApiErrorWrapper } from '../interfaces/error.interface';
import { Gamer } from '../interfaces/gamer.interface';
import { ApiService } from '../services/api.service';
import { GamersService } from '../services/gamers.service';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-gamer-list',
  templateUrl: './gamer-list.component.html',
  styleUrls: ['./gamer-list.component.scss']
})
export class GamerListComponent implements OnInit {

  gamers: Gamer[] = [];

  gamerForm = new FormGroup({
    gamer: new FormControl('', Validators.required)
  });

  displayedColumns: string[] = ['gamerTag', 'score', 'kills', 'matches'];

  dataSource = new MatTableDataSource<Gamer>(this.gamers);
  dataSource2 = this.dataSource.connect();

  constructor(
    private readonly gamerService: GamersService
  ) { }

  ngOnInit(): void {
    this.gamerService.getGamers().subscribe(gamers => {
      this.dataSource2.next(gamers)
    })
    this.gamerService.addGamerByGamerTag('LilChiimpi');
    this.gamerService.refreshGamer$()
  }

  addGamer(): void {
    if (this.gamerForm.valid) {
      this.gamerService.addGamerByGamerTag(this.gamerForm.controls.gamer.value);
    }
  }

  getScores(): void {
    this.gamerService.calculateScore();
  }

}
