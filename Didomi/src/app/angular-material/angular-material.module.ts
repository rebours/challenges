import {NgModule} from "@angular/core";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSidenavModule,
  MatTableModule
} from '@angular/material';

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

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class AngularMaterialModule {
}
