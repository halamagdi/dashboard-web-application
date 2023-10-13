import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  dateTime: Observable<Date>;

  constructor() { }

  ngOnInit(): void {
    this.dateTime = timer(0, 100).pipe(
      map(() => {
        return new Date();
      })
    )

  }

}
