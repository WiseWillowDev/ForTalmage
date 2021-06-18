import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Gamer } from '../interfaces/gamer.interface';

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

  constructor() { }

  ngOnInit(): void {
  }

  addGamer(): void {

  }

}
