/// <reference types="Cypress"/>

//import the page classes
import HomePage from "../pageObjects/HomePage";

describe('CodeInbox Test Suite', ()=>{
    //Before will launch only one time at loading of the page
    before(()=>{
        HomePage.loadHomePage();
    })

    it('Home Page Test cases', ()=>{
        HomePage.getTitle();
        HomePage.getDropDownOption();
        HomePage.searchCountry();
        HomePage.clickonRegForm();
    })
})