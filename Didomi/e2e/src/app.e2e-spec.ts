import {AppPage} from './app.po';
import {browser} from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;

  const userName: string = 'Pierre-louis';
  const email: string = 'Pierrelouis.rebours@gmail.com';

  beforeEach(() => {
    page = new AppPage();
    browser.sleep(1000);
  });

  it('should write the username and email, click on the checkbox and on the button', async () => {
    page.navigateTo();
    await page.putInformation(userName, email);
    await browser.sleep(1000);
  });

  it('click to the next pages (2)', async () => {
    await page.getDataTable();
    await browser.sleep(1000);
  });

  it('The table Name should have ' + userName, async () => {
    await expect(await page.getNameInTheTable().getText()).toEqual(userName);
  });

  it('The table Name should have ' + email, async () => {
    await expect(await page.getEmailInTheTable().getText()).toEqual(email);
  });

  it('The table Name should have Receive newsletter.' , async () => {
    await expect(await page.getConsentsInTheTable().getText()).toEqual('Receive newsletter.');
  });

});
