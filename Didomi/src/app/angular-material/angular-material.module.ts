import {NgModule} from "@angular/core";

// import every material module you ned
const modules = [
  MatButtonModule,
  MatRippleModule,
  MatSidenavModule,
  MatInputModule,
  MatCheckboxModule,
  MatTableModule,
  MatPaginatorModule
];

import {
  MatButtonModule,
  MatRippleModule,
  MatSidenavModule,
  MatInputModule,
  MatCheckboxModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class AngularMaterialModule {}
