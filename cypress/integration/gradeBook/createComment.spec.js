import{ EMAIL } from "../../fixtures/constants";
import { bookLoginPage } from "../../page_object/bookLogin.page"
import { createGradeBPage } from "../../page_object/createGradebook.page" // promeniti 


describe('CREATE', function () {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        bookLoginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
            
    })


    it('TC-01 Create comment', function() {
        cy.contains('My Gradebook').click()
        createGradeBPage.comment.type('My first comment')
        createGradeBPage.submit.click()  
    })

    it('TC-02 Create secound comment', function() {
        cy.contains('My Gradebook').click()
        createGradeBPage.comment.type('My secound comment')
        createGradeBPage.submit.click()  
    })
    
    it('TC-03 Checking created comment', function() {
        cy.contains('My Gradebook').click()
        cy.get('div').children('div').eq(1).children('div').last().should('contain', 'My secound comment')
        

    })

    it('TC-04 delete comment', function() {
        cy.contains('Delete').click()

    })


    it('TC-05 Check page functionality', function() {
        cy.contains('My Gradebook').click()
        cy.get('.table-dark').should('contain', 'Gradebook')
        cy.get('.table-dark').should('contain', 'Professor')
        cy.get('.table-dark').should('contain', 'Students')
        cy.get('.table-dark').should('contain', 'Add Student')
    
    })
    
})