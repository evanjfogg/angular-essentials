import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() items = [];
  @Output() itemAdded = new EventEmitter<string>();
  newItem = '';

  addItem() {
    this.itemAdded.emit(this.newItem);
  }
}
