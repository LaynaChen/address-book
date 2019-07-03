import { Component, OnInit } from '@angular/core';
import { address } from '../models/address';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent  {
  addressList: address []= [
    {
      name: 'Ellayna',
      phoneNumber: '567-712-3566',
      homeAddress: 'Bethany Rd',
      dob: '02-14-96',
    },
     {
      name: 'Matt C.',
      phoneNumber: '937-701-8061',
      homeAddress: 'Bethany Rd',
      dob: '05-07-93',
    },
     {
      name: 'Elisha',
      phoneNumber: '567-712-3564',
      homeAddress: 'Seattle',
      dob: '11-09-93',
    },

  ]
  numContacts() {
    return this.addressList.filter(index => index.homeAddress).length;
  }

  delete(index:number) {
    this.addressList.splice(index,1)
  }
 

}
