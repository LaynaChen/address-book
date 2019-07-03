import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatInputModule,MatFormFieldModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
  ]
})
export class MaterialModule {}
