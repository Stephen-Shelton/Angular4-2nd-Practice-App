import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [
    { name: 'Luke Skywalker', side: 'light' },
    { name: 'Darth Vader', side: 'dark' }
  ];
  chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }

  onChoose(list) {
    this.chosenList = list;
    console.log(this.chosenList);
  }

  getCharacters() {
    if (this.chosenList === 'all') {
      return this.characters.slice(); // return copy of array
    }
    return this.characters.filter((char) => {
      return char.side === this.chosenList;
    });
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
  }
}
