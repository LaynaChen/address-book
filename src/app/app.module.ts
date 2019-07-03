import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressListComponent } from './address-list/address-list.component';
import { MaterialModule } from './material.module';
import { AddressComponent } from './address/address.component';
import { AddressNotesComponent } from './address-notes/address-notes.component';
import { AddressGroceryListComponent } from './address-grocery-list/address-grocery-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressListComponent,
    AddressComponent,
    AddressNotesComponent,
    AddressGroceryListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
