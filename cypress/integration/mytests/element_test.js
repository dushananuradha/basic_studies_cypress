describe('launch app', () => {
    it('app testing', () => {
        cy.visit("https://www.kdu.ac.lk/")
        cy.contains("Tenders")
        cy.contains("Tenders").click()
        cy.url().should("include","/tender-notices")
    });
})
