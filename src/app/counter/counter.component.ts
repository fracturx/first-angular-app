import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  public count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementCounter = () => (this.count++)
  decrementCounter = () => (this.count--)

}
