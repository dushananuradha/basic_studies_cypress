/// <reference types="Cypress"/>

class RegistrationPage {

    static getFirstName(firstName){
        //when getFirstName() is invoked, it assigns the input first name by the user to firstName variable
        cy.get('#nf-field-17').type(firstName, {delay:30}).should('have.value',firstName)
    }

    static getLastName(lastName){
        cy.get('#nf-field-18').type(lastName, {delay:30}).should('have.value',lastName)
    }

    static getEmail(email){
        //cy.get('#nf-field-19').type(email, {delay:30}).should('have.value',email)
        cy.get('input[type="email"]').type(email, {delay:30}).should('have.value',email)
    }

    static selectDropDown(){
        cy.get('#nf-field-22').select('Selenium Automation').should('have.value', 'selenium-automation')
    }

    static selectCheckBox(){
        cy.get('#nf-field-23-0').click({force:true}).should('have.value', 'facebook')
    }

    static submitForm(){
        cy.get('input[type="button"]').click().wait(4000)
        cy.get('.nf-response-msg').invoke('text').then((text2)=> {
            expect(text2).to.include('Thank you for registering for our event.')
        })
    }

}

export default RegistrationPage; 

