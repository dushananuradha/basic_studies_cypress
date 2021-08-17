describe('Login Suite', () => {
    it('Login Testing', () => {
        cy.visit("https://www.coursera.org/learn/machine-learning?authMode=login")
        cy.get('input[type="email"]').type('')
        cy.get('input[type="password"]').type('')
        cy.get('button[type="submit"]').click()
    });
})
