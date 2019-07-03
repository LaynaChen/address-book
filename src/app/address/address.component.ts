import { Component, Input, Output, EventEmitter } from '@angular/core';
import { address } from '../models/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  @Input() address: address;
  @Input() index: number;
  @Output() delete: EventEmitter<number> = new EventEmitter();

  deleteClicked() {
    this.delete.emit(this.index)

  }
}
