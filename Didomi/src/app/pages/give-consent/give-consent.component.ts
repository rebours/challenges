import {Component, OnInit} from '@angular/core';
import {Form} from "../../models/form";
import {Router} from "@angular/router";
import {ConsentsServices} from "../../services/consents";
import {consentsEnum} from "../../enums/consents.enum";

@Component({
  selector: 'app-give-consent',
  templateUrl: './give-consent.component.html',
  styleUrls: ['./give-consent.component.scss']
})
export class GiveConsentComponent implements OnInit {
  formulary: Array<Form> = [];
  buttonDisable = true;
  consentEnum = consentsEnum;

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
    if (this.formulary['receiveNewletter']) {
      this.formulary['consents'] = this.formulary['consents'].concat(this.consentEnum.receiveNewletter);
    }
    if (this.formulary['targetedAds']) {
      this.formulary['consents'] = this.formulary['consents'].concat(this.consentEnum.targetedAds);
    }
    if (this.formulary['anonymousVisit']) {
      this.formulary['consents'] = this.formulary['consents'].concat(this.consentEnum.anonymousVisit);
    }

    // fake call API
    this.consentsService.addNewConsent(this.formulary);
    this.router.navigate(['/consents']);

    // real call API
    // this.consentsService.addNewConsent(this.formulary).subscribe(
    //   (data) => {
    //     this.router.navigate(['/consents'])
    //   },
    //   (error) => console.log('add new consent error', error));

  }
}
