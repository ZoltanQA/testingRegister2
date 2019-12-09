import{ EMAIL } from "../../fixtures/constants";
import { bookLoginPage } from "../../page_object/bookLogin.page"
import { createGradeBPage } from "../../page_object/createGradebook.page"


describe('CREATE GRADEBOOK', function () {
   
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        bookLoginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
            
    })

    it('TC 01 Create gradebook ', function() {
        cy.contains('Create Gradebook').click()
        createGradeBPage.gradebook_title.type('Lola')
        cy.get('#professor > option').eq(100)
            .then(element => cy.get('#professor').select(element.val()))
        //createGradeBPage.professor.select('Orhan Pamuk')
        createGradeBPage.submit.click()
        cy.url().should('include', 'gradebook')

        cy.get('#professor > option').eq(0)
            .then(element => cy.get('#professor').select(element.val()))
        
    })

    it('TC 02 Checking created gradebook', function() {

            cy.wait(1000)
            createGradeBPage.filter.type('Lola')
            createGradeBPage.search.click()
            cy.get('.table-dark').children('tbody').should('have.length', 10)
            cy.contains('Next').click()
            cy.get('.table-dark').children('tbody').should('have.length', 10)

        //cy.get('.table-dark').children('tbody').last().should('contain', 'Lola')
        //cy.get('.table-dark').find('>td').contains('Lola')
        //createGradeBPage.filter.type('Lola'))
        //moram naci kako da filtriram pa tako da uhvatim

    })

    it('TC-03 edit gradebook', function() {
        createGradeBPage.my_gradebook.click()
        createGradeBPage.edit_gradebook.click()
        cy.wait(1000)
        createGradeBPage.gradebook_title.clear().type('New Title')
        createGradeBPage.submit.click()
        cy.wait(1000)
        createGradeBPage.filter.type('New Title')
        cy.contains('Search').click()
        cy.wait(1000)
        createGradeBPage.table_dark.children('tbody').last().should('contain', 'New Title')
    })

    it('TC-04 delete gradebook', function() {
        cy.contains('My Gradebook').click()
        cy.contains('Delete Gradebook').click()
        cy.url().should('include', 'gradebooks')
        cy.get('.btn-danger').should('not.exist')
    })

    
})