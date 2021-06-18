import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PointValue } from '../interfaces/point.interface';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-point-system',
  templateUrl: './point-system.component.html',
  styleUrls: ['./point-system.component.scss']
})
export class PointSystemComponent implements OnInit {

  pointForm = new FormGroup({
    kills: new FormControl(''),
    first: new FormControl(''),
    second: new FormControl(''),
    third: new FormControl(''),
    forth: new FormControl(''),
    fifth: new FormControl(''),
    sixth: new FormControl(''),
    seventh: new FormControl(''),
    eigth: new FormControl(''),
    nineth: new FormControl(''),
    tenth: new FormControl(''),
  });

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.pointForm.controls.kills.setValue(this.scoreService.getPointValues().killValue);
    this.pointForm.controls.first.setValue(this.scoreService.getPointValues().placementValueArray[0]);
    this.pointForm.controls.second.setValue(this.scoreService.getPointValues().placementValueArray[1]);
    this.pointForm.controls.third.setValue(this.scoreService.getPointValues().placementValueArray[2]);
    this.pointForm.controls.forth.setValue(this.scoreService.getPointValues().placementValueArray[3]);
    this.pointForm.controls.fifth.setValue(this.scoreService.getPointValues().placementValueArray[4]);
    this.pointForm.controls.sixth.setValue(this.scoreService.getPointValues().placementValueArray[5]);
    this.pointForm.controls.seventh.setValue(this.scoreService.getPointValues().placementValueArray[6]);
    this.pointForm.controls.eigth.setValue(this.scoreService.getPointValues().placementValueArray[7]);
    this.pointForm.controls.nineth.setValue(this.scoreService.getPointValues().placementValueArray[8]);
    this.pointForm.controls.tenth.setValue(this.scoreService.getPointValues().placementValueArray[9]);

    this.pointForm.valueChanges.subscribe((values) => {
      console.log(values)
      const newValues: PointValue = {
        killValue: values.kills,
        placementValueArray: [
          values.first,
          values.second,
          values.third,
          values.forth,
          values.fifth,
          values.sixth,
          values.seventh,
          values.eigth,
          values.nineth,
          values.tenth
        ]
      }
      this.scoreService.updatePointValues(newValues);
    });
  }

}
