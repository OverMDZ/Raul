describe("test suite - conjunto de pruebas", () => {

    beforeEach(() => {

        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })



    

    it("Prueba e2e", () =>{

    
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin123")
        cy.get('.oxd-button').click()
        cy.get('.orangehrm-login-branding > img').should("be.visible")
        cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').contains("OrangeHRM OS 5.6.1")

    })

    
        
 


})
