import {NgModule} from "@angular/core";

// import every material module you ned
import {MatButtonModule, MatCheckboxModule, MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule],
})
export class AngularMaterialModule {}
