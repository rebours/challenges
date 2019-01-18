import {NgModule} from "@angular/core";

// import every material module you ned
const modules = [
  MatButtonModule,
  MatRippleModule,
  MatSidenavModule
];

import {MatButtonModule, MatRippleModule, MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class AngularMaterialModule {}
