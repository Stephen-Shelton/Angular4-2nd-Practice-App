import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  template: `
    <hr>
    <h2>I am assignment 1 component! {{ name }}</h2>
    <h3>{{ loadState }}</h3>
    <p [textContent]="loadState"></p>
    <button (click)="turnOffLoading()">Turn off loading!</button>
    <div>
      <input type="text" [(ngModel)]="loadState">
    </div>
    <div>
      <input type="text" (input)="loadState = $event.target.value">
    </div>
    <hr>
  `
})
export class Assignment1Component {
  name = 'Some random value';
  loadState = 'loading';

  turnOffLoading() {
    this.loadState = 'finished';
  }
}
