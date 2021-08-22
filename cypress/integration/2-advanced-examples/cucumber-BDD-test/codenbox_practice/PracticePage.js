/// <reference types="Cypress"/>

//Get related code lines form ste definition code

class PracticePage {

    static loadHomePage(){
        cy.visit('https://codenboxautomationlab.com/')
        cy.url().should('include', 'codenbox')
    }

    static clickonPracticeButton(){
        cy.get('[href="http://codenboxautomationlab.com/practice/"]').click({force:true})
    }

    static getTitle(pageTitle){ 
        cy.get('.page-title').invoke('text').then((text1) =>{
            expect(text1.trim()).to.equal(pageTitle)
         })
    }

    static getDropdownOption(){
        cy.get('#dropdown-class-example').select('Selenium')
    }

    static selectSeleniumOption(){
        cy.get('#dropdown-class-example').select('Selenium').should('have.value','option1')
    }
}

export default PracticePage;