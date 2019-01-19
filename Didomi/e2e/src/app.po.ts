import { browser, by, element, ElementFinder, protractor, ElementArrayFinder } from 'protractor';

const EC = protractor.ExpectedConditions;

export class AppPage {

  until = protractor.ExpectedConditions;

  navigateTo() {
    return browser.get('/');
  }

  async putInformation(user: string, password: string) {
    await this.navigateTo();
    await this.setLoginUserName( user );
    await this.setLoginEmail( password );
    await browser.wait(EC.elementToBeClickable(await this.setCheckBox()), 5000);
    await this.setCheckBox().click();
    await browser.wait(EC.elementToBeClickable(await this.setClickButton()), 5000);
    await this.setClickButton().click();
  }

  async getDataTable() {
    await browser.wait(EC.elementToBeClickable(await this.clickNextPages()), 5000);
    await this.clickNextPages().click();
  }

    async setLoginUserName(userName: string) {
    await browser.wait(EC.visibilityOf(await element(by.id('username'))), 5000);
    await element(by.id('username')).sendKeys( userName );
  }

  async setLoginEmail(password: string) {
    await browser.wait(EC.visibilityOf(await element(by.id('email'))), 5000);
    await element( by.id( 'email' )).sendKeys( password );
  }


  setCheckBox(): ElementFinder {
    browser.wait(EC.visibilityOf(element(by.id('receiveNewsLetter'))), 5000);
    return element(by.id('receiveNewsLetter'));
  }


  setClickButton(): ElementFinder {
    browser.wait(EC.visibilityOf(element(by.id('buttonDisable'))), 5000);
    return element(by.id('buttonDisable'));
  }

  clickNextPages(): ElementFinder {
    browser.wait(EC.visibilityOf(element(by.id('nextPaginator'))), 5000);
    return element(by.id('nextPaginator'));
  }


  getNameInTheTable(): ElementFinder {
    return element(by.css('#mat-table > tbody > tr > td:nth-child(1)'));
  }
  getEmailInTheTable(): ElementFinder {
    return element(by.css('#mat-table > tbody > tr > td:nth-child(2)'));
  }
  getConsentsInTheTable(): ElementFinder {
    return element(by.css('#mat-table > tbody > tr > td:nth-child(3)'));
  }



}
