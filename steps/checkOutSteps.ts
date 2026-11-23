import {Page, expect} from '@playwright/test';
import {checkOut} from '../pages/checkOutPages';

export class checkOutSteps{
    classCheckOutPage: Page;
    classclickCheckOutButton: checkOut;

    constructor (consCheckOutPage:Page){
        this.classCheckOutPage = consCheckOutPage;
        this.classclickCheckOutButton = new checkOut(consCheckOutPage);
    }

async clickingOnCheckOutButton(){
    await this.classclickCheckOutButton.classcheckOutButton.click();
}

async verifyAddressPage(){
    if (this.classCheckOutPage.url()===('https://www.saucedemo.com/checkout-step-one.html'))
    {console.log("Checked Out and reached Address page!");}
    else
    {console.log("Not on the Address page.");}
    
    

}
/*async verifyAddressPagefail(){
   await expect(this.classCheckOutPage).toHaveURL('https://www.saucedemo.com/checkout-step-fail.html');
    }*/

   async verifyAddressPageFail() {
  const expectedUrl = 'https://saucedemo.com';// to fail this case
  const currentUrl = this.classCheckOutPage.url();

  if (currentUrl === expectedUrl) {
    console.log('Success');
  } else {
    console.log('not match');
    throw new Error(`URL mismatch! Expected: ${expectedUrl}, but got: ${currentUrl}`);//Error is an object.  calls the constructor of that built-in Error class and returns a new object instance containing properties like .message, .name, and .stack (the stack trace showing which line failed)
  }
   }};