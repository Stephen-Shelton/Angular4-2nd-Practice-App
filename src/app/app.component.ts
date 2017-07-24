import { Component } from '@angular/core';
// import js library with type definition, need to install type definition separately
// import { random } from 'lodash';

// import js library without type definition
import 'lodash';
declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rootName = 'Some Other Stephen';
  number = 0;

  onNameChanged(newName) {
    this.rootName = newName;
  }

  generateRandomNumber() {
    // this.number = random(1, 10);
    this.number = _.random(1, 10);

  }
}
