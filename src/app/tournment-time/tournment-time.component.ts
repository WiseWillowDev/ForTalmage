import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tournment-time',
  templateUrl: './tournment-time.component.html',
  styleUrls: ['./tournment-time.component.scss']
})
export class TournmentTimeComponent implements OnInit {

  rulesForm = new FormGroup({
    startDate: new FormControl('', Validators.required),
    timeDuration: new FormControl('', Validators.required),
    startTime: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

}
