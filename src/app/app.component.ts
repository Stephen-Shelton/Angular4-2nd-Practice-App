import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  initialListItems = ['Apples', 'Bananas', 'Cherries'];

  onItemAdded(newItem) {
    this.initialListItems.push(newItem);
    console.log(this.initialListItems);
  }
}
