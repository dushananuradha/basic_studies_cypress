/// <reference types="Cypress"/>

//import the page classes
import HomePage from "../pageObjects/HomePage";
import RegistrationPage from "../pageObjects/RegistrationPage";

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

    it('Registration Page Test cases', ()=>{
        RegistrationPage.getFirstName('Dushan');
        RegistrationPage.getLastName('Anuradha');
        RegistrationPage.getEmail('ohdatest@gmail.com');
        RegistrationPage.selectDropDown();
        RegistrationPage.selectCheckBox();
        RegistrationPage.submitForm();
    })
})