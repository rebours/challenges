import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Routing
import {AppRoutingModule} from './app-routing.module';

// Pages Component
import {AppComponent} from './app.component';
import {GiveConsentComponent} from './pages/give-consent/give-consent.component';
import {ConsentsComponent} from './pages/consents/consents.component';

// Shared Component
import {SidebarComponent} from './shared/sidebar/sidebar.component';

// import Angular material module
import {AngularMaterialModule} from "./angular-material/angular-material.module";

// services
import {ConsentsServices} from "./services/consents";

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
    AngularMaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ConsentsServices],
  bootstrap: [AppComponent]
})
export class AppModule {
}
