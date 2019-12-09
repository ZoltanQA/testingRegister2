import{ EMAIL } from "../../fixtures/constants";
import { bookLoginPage } from "../../page_object/bookLogin.page"
import { createGradeBPage } from "../../page_object/createGradebook.page" // promeniti 
import { CREATE } from "../../fixtures/constants"
import { createProfessorPage } from "../../page_object/createProfessor.page";


describe('Create Student', function () {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        bookLoginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
            
    })

    it('TC-01 Create student', function() {
        cy.contains('My Gradebook').click()
        createGradeBPage.add_student.click()
        createProfessorPage.first_name.type('Maximus')
        createProfessorPage.last_name.type('Max')
        createGradeBPage.student_add_image.click()
        createProfessorPage.image_url.type(CREATE.picture)
        createGradeBPage.submit.click()
        cy.url().should('include', 'single-gradebook')
        
    })

    it('TC-02 Check created student', function() {
        cy.contains('My Gradebook').click()
        cy.get('td').eq(3).children('ul').children('li').last().should('contain', 'Maximus Max')
        
    })

    it.only('TC-03 Delete Gradebook', function() {
        cy.contains('My Gradebook').click()
        cy.get('td').eq(3).children('ul').children('li').last().should('contain', 'Maximus Max')
        cy.contains('Delete Gradebook').click()

    })
    
    
})