import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiveConsentComponent } from './pages/give-consent/give-consent.component';
import { ConsentsComponent } from './pages/consents/consents.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

// import Angular material module
import {AngularMaterialModule} from "./angular-material/angular-material.module";
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    GiveConsentComponent,
    ConsentsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
