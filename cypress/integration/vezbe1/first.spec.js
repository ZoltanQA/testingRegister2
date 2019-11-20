import { EMAIL } from '../../fixtures/constants'
import {authPage} from '../../page_object/login.page'


describe('My First Test', function() {


  beforeEach(()=>{
    cy.visit('/')
    cy.contains('Login').click()
  })
before(()=>{

})
    /*it('Does not do much!', function() {
      expect(true).to.equal(true)
    })
    it('Visits the Kitchen Sink', function() {
        cy.visit('https://example.cypress.io')
        cy.contains("type").click()

        cy.url().should("include", "/commands/actions")
    })*/

    it('Galery app check Login', function() {
        //cy.visit('/')
        //cy.contains("Login").click()
        cy.url().should("include", "/login")
      })
      it('Galery app check Register', function() {
        //cy.visit('/')
        cy.contains("Register").click()
        cy.url().should("include", "/register")
      })
      it('Galery app check Login with data', function() {
        //cy.visit('/')
        //cy.contains("Login").click()
        authPage.email.type(EMAIL.EXISTING)
        authPage.password.type(EMAIL.PASSWORD)

        authPage.button.click()
      })
      it('Galery app check Login with wrong password', function() {
        //cy.visit('/')
        //cy.contains("Login").click()
        authPage.email.type(EMAIL.EXISTING)
        authPage.password.type("vivi")
        authPage.button.click()
        cy.get('.alert-danger').should('have.text', 'Bad Credentials')
      })
      it('Galery app check Login with wrong email', function() {
        //cy.visit('/')
        //cy.contains("Login").click()
        authPage.email.type("zoki.@yahoo.com")
        authPage.password.type("vivify12")
        authPage.button.click()
        cy.get('.alert-danger').should('have.text', 'Bad Credentials')
      })
      it('Galery app check Login with wrong email and password', function() {
       // cy.visit('/')
       // cy.contains("Login").click()
       authPage.email.type("zoki.@yahoo.com")
        cy.get('input[id="password"]').type("vivify")
        authPage.button.click()
        cy.get('.alert-danger').should('have.text', 'Bad Credentials')
      })

      /*it('Galery app check Login with empty password', function() {
        cy.visit('/')
        cy.contains("Login").click()
        cy.get('input[id="email"]').type("zoki.juhas@yahoo.com")
        cy.get('input[id="password"]').type("")
        cy.get("button[type=submit]").click()
        cy.get('.alert-danger').should('have.text', 'Bad Credentials')
      })*/
  })




