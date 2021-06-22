import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TournamentTimeService } from '../services/tournament-time.service';

@Component({
  selector: 'app-tournment-time',
  templateUrl: './tournment-time.component.html',
  styleUrls: ['./tournment-time.component.scss']
})
export class TournmentTimeComponent implements OnInit {

  rulesForm = new FormGroup({
    startDate: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    startTime: new FormControl('', Validators.required)
  });

  currentTime = '';
  currentDuration = 0;
  constructor(private readonly tournamentTime: TournamentTimeService) { }

  ngOnInit(): void {

    this.rulesForm.valueChanges.subscribe(values => {
      this.currentDuration = values.duration;
      this.currentTime = `${values.startDate.toDateString()} ${values.startTime}`

      this.tournamentTime.setDateAndTime(
        {startDate: values.startDate.toDateString(), startTime: values.startTime, duration: values.duration});
    })

    const data = this.tournamentTime.getDateAndTime();
    this.rulesForm.controls.startDate.setValue(new Date(data.startDate));
    this.rulesForm.controls.startTime.setValue(data.startTime);
    this.rulesForm.controls.duration.setValue(data.duration);
  }

}
