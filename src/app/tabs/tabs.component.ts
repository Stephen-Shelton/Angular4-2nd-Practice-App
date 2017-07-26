import { Component, OnInit, Input } from '@angular/core';

import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  characters = [];
  chosenList = 'all';
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onChoose(list) {
    this.chosenList = list;
    console.log(this.chosenList);
  }

  getCharacters() {
    // const swService = new StarWarsService();
    this.characters = this.swService.getCharacters(this.chosenList);
    return this.characters;
  }
}
