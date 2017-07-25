import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character;
  @Output() sideListener = new EventEmitter<{name: string, side: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAssign(side) {
    // this.character.side = side; // this works via obj ref, but is suboptimal since it's not obvious where you modify characters array
    this.sideListener.emit({ name: this.character.name, side: side });
  }
}
