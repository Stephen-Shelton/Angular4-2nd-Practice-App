import { Component, OnInit, Input } from '@angular/core';

import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() character;
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onAssign(side) {
    // this.character.side = side; // this works via obj ref, but is suboptimal since it's not obvious where you modify characters array
    // this.sideListener.emit({ name: this.character.name, side: side });

    // const swService = new StarWarsService();
    this.swService.onSideChosen({ name: this.character.name, side: side });
  }
}
