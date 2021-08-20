/// <reference types="Cypress"/>

class HomePage {

    static loadHomePage(){
        cy.visit(Cypress.env('url')+"/practice/")
        cy.url().should('include','codenbox')
    }
    static getTitle(){
        cy.get('.page-title').invoke('text').then((text1) => {
            expect(text1).to.eq.apply('Automation Practice')
        })
    }

    static getDropDownOption(){
        //'select' - To select values from dropdown options
        cy.get('#dropdown-class-example').select('Selenium').should('have.value','option1')
    }

    static searchCountry(){
        //t'type' - to type any text in a textbox
        cy.get('#autocomplete').type('can')
        //ui-menu-item is a class
        //each to traverse all elements in an array
        cy.get('.ui-menu-item').each(($e1, $index, $list)=>{
            if($e1.text()==='canada'){
                cy.wrap($e1).click()
            }
        })
    }

    static clickonRegForm(){
        //force:true command to get hidden elements displaying when hovered
        cy.contains('Registration Form').click({force:true})
        //after click, new url is loaded, and in it, there should be "registration" part
        cy.url().should('include','registration')
    }
}

export default HomePage;