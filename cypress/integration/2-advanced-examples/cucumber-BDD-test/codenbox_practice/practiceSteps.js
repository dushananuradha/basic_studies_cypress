//Code in accordance with feature file content
/// <reference types="Cypress"/>

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PracticePage from "./PracticePage";


Given('I successfully browse to the application', ()=> {
    //moved below lines to PracticePage.js
   /*  cy.visit('https://codenboxautomationlab.com/')
    cy.url().should('include', 'codenbox') */
    PracticePage.loadHomePage()
})

When('I click on Practice button', ()=>{
    /* cy.get('[href="http://codenboxautomationlab.com/practice/"]').click({force:true}) */
    PracticePage.clickonPracticeButton()
})


//pageTitle holds string type data
Then('I should see the title of the page as {string}', pageTitle => {
    /* cy.get('.page-title').invoke('text').then((text1) =>{
        expect(text1.trim()).to.equal(pageTitle)
    }) */
    PracticePage.getTitle(pageTitle);
})

When ('click on static dropdown option', ()=> {
    /* cy.get('#dropdown-class-example').select('Selenium') */
    PracticePage.getDropdownOption();
})

Then('should be able to select Selenium', ()=> {
    /* cy.get('#dropdown-class-example').select('Selenium').should('have.value','option1') */
    PracticePage.selectSeleniumOption();
})