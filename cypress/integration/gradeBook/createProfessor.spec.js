import{ EMAIL } from "../../fixtures/constants";
import { bookLoginPage } from "../../page_object/bookLogin.page"
import { createProfessorPage } from "../../page_object/createProfessor.page"
import { CREATE } from "../../fixtures/constants"

describe('HOME PAGE', function () {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        bookLoginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
       // cy.contains('Login').click() visak
            
    })

    it('TC-01 Create professor', function() {
        cy.contains('Professors').click()
        cy.contains('Create Professor').click()
        createProfessorPage.createProfessor('Maxim', 'Max', CREATE.picture)
        cy.url().should('include', 'all-professors')
     
    })

    it('TC-02 Check created professor', function() {
        cy.contains('Professors').click()
        cy.contains('All Professors').click()
        cy.get('.table-dark').children('tbody').last().should('contain', 'Max')
    })


    it('TC-03 single professor page', function() {
        cy.get('td').eq(1).click()
        cy.get('.table-striped').should('contain', 'Professor')
        cy.get('.table-striped').should('contain', 'Gradebook')
        cy.get('.table-striped').should('contain', 'Image')
        cy.get('.table-striped').should('contain', 'Number of students')
        cy.get('td').eq(1).click()
        cy.url().should('include', 'single-gradebook')
    })

    it('TC-04 Gradebook all-professors', function() {
        cy.contains('Professors').click()
        cy.contains('All Professors').click()
        cy.get('.table-dark').should('contain', 'FirstName')
        cy.get('.table-dark').should('contain', 'LastName')
        cy.get('.table-dark').should('contain', 'Picture')
        cy.get('.table-dark').should('contain', 'Gradebook')
    })
})