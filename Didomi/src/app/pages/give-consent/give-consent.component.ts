import {Component, OnInit} from '@angular/core';
import {Form} from "../../models/form";
import {Router} from "@angular/router";
import {ConsentsServices} from "../../services/consents";

@Component({
  selector: 'app-give-consent',
  templateUrl: './give-consent.component.html',
  styleUrls: ['./give-consent.component.scss']
})
export class GiveConsentComponent implements OnInit {
  formulary: Array<Form> = [];
  buttonDisable = true;

  constructor(private router: Router, private consentsService: ConsentsServices) {
    this.formulary['consents'] = "";
  }

  ngOnInit() {
  }


  checkedButton() {
    this.buttonDisable = true;
    if (this.formulary['receiveNewletter'] ||
      this.formulary['targetedAds'] ||
      this.formulary['anonymousVisit']) {
      this.buttonDisable = false;
    }
  }

  clickedButton() {
    // no subscribe
    this.mapCheckBoxString();
    this.consentsService.postForms(this.formulary);
    this.router.navigate(['/consents']);
  }

  mapCheckBoxString() {
    if (this.formulary['receiveNewletter']) {
      this.formulary['consents'] = this.formulary['consents'].concat(' Receive newsletter. ');
    }
    if (this.formulary['targetedAds']) {
      this.formulary['consents'] = this.formulary['consents'].concat(' Be shown targeted ads. ');
    }
    if (this.formulary['anonymousVisit']) {
      this.formulary['consents'] = this.formulary['consents'].concat(' Contribute to anonymous visit statistics. ');
    }
  }

}
