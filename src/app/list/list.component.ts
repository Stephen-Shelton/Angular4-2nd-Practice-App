import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() characters;
  @Output() charListener = new EventEmitter<{ name: string, side: string }>();

  constructor() { }

  ngOnInit() {
  }

  onSideAssigned(updatedChar) {
    this.charListener.emit(updatedChar);
  }
}
