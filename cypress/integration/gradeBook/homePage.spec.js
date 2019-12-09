import { EMAIL } from "../../fixtures/constants/"
import { bookLoginPage} from '../../page_object/bookLogin.page'


describe('HOME PAGE', function () {
    
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        bookLoginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
            
    })
 
    it('TC-01 Home page pagination ', function() {
        cy.get('.table-dark').children('tbody').should('have.length', 10)
        cy.contains('Next').click()
        cy.get('.table-dark').children('tbody').should('have.length', 10)

        cy.get('.table-dark').children('thead').contains('Gradebook')
        cy.get('.table-dark').children('thead').contains('Professor')
        cy.get('.table-dark').children('thead').contains('Created at')
    })

    
    it.only('TC-02 Home Page FILTER', function() {
        cy.wait(1000)
        bookLoginPage.gradebook_filter.type('LOla')
        bookLoginPage.search.click()
        cy.get('.table-dark').children('tbody').should('have.length', 10)
        cy.contains('Next').click()
        cy.get('.table-dark').children('tbody').should('have.length', 10)
    })

});