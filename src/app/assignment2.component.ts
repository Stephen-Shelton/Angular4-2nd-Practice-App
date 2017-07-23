import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  template: `
    <h3>Assignment 2</h3>
    <!--* <button (click)="onClickAddItem(itemToAdd)">Add Item</button> -->
    <button (click)="newItemListener.emit(itemToAdd);">Add Item</button>
    <input type="text" [(ngModel)]="itemToAdd">
  `
})

export class Assignment2Component {
  @Input() items = [];
  @Output() newItemListener = new EventEmitter<string>();
  itemToAdd: string;

  // onClickAddItem(item) {
  //   this.newItemListener.emit(item);
  //   console.log('THE ITEMS', this.items);
  // }
}
