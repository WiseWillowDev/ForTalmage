import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ForTalmage';

  constructor(private readonly apiService: ApiService) {}

  ngOnInit(): void {
    const talmagesTag = 'LilChiimpi'
    this.apiService.getStuff(talmagesTag).subscribe(data => {
      console.log(data);
    })
  }
}
