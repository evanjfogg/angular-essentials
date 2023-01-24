import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent {
  @Input() items = [];
  @Output() itemAdded = new EventEmitter<string>();
  newItem = '';

  addItem() {
    this.itemAdded.emit(this.newItem);
  }
}
