import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GiveConsentComponent} from "./pages/give-consent/give-consent.component";
import {ConsentsComponent} from "./pages/consents/consents.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/give-consent'},
  {path: 'give-consent', component: GiveConsentComponent},
  {path: 'consents', component: ConsentsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
