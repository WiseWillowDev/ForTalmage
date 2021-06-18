import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataWrapper } from '../interfaces/data-wrapper.interface';
import { ApiErrorWrapper } from '../interfaces/error.interface';
import { Gamer } from '../interfaces/gamer.interface';
import { ApiService } from '../services/api.service';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-gamer-list',
  templateUrl: './gamer-list.component.html',
  styleUrls: ['./gamer-list.component.scss']
})
export class GamerListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  gamers: Gamer[] = [];

  gamerForm = new FormGroup({
    gamer: new FormControl('', Validators.required)
  });

  displayedColumns: string[] = ['gamerTag', 'score', 'kills'];

  dataSource = new MatTableDataSource<Gamer>(this.gamers);
  dataSource2 = this.dataSource.connect();

  constructor(private readonly apiService: ApiService, private readonly scoreService: ScoreService) { }

  ngOnInit(): void {
    this.gamers.push(this.createGamer('LilChiimpi'));
    // this.dataSource2.next(this.gamers)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource)
  }

  addGamer(): void {
    if (this.gamerForm.valid) {
      this.gamers.push(this.createGamer(this.gamerForm.controls.gamer.value));
      this.dataSource2.next(this.gamers)
      // console.log(this.dataSource.paginator?.page)
      // console.log(this.dataSource.paginator?.pageSizeOptions)
      // this.dataSource._updatePaginator
    }
  }

  createGamer(tag: string): Gamer {
    const gamerObj: Gamer = {gamerTag: tag, score: 0, kills: 0};
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
    this.dataSource2.next(this.gamers)
  }

}
