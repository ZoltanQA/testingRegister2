import { EMAIL } from '../../fixtures/gradebookConstants'
import { REGISTER } from '../../fixtures/gradebookConstants'
import { bookLoginPage } from '../../page_object/bookLogin.page'
import { bookRegisterPage } from '../../page_object/bookRegister.page'


describe('Login Page testing', function(){


   /* beforeEach(()=>{
        cy.visit('/')
         bookLoginPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
      })*/

      it('TC- 01 Gradebook app check Login exists', function() {
        cy.visit('/')
        cy.contains("Login").click()
        cy.url().should("include", "/login")
    })

    it('TC - 02 Gradebook app check Register', function() {
        cy.visit('/')
        cy.contains("Register").click()
        cy.url().should("include", "/register")
    })

      it('TC - 03 Gradebook app check Login with data', function() {
        cy.visit('/')
        bookLoginPage.email.type(EMAIL.EXISTING)
        bookLoginPage.password.type(EMAIL.PASSWORD)

        bookLoginPage.button.click()
      })
/*
      it('TC - 04 Gradebook app check Login with wrong password', function() {
        
        cy.visit('/login')
        bookLoginPage.email.type(EMAIL.EXISTING)
        bookLoginPage.password.type("1234fg")

        bookLoginPage.button.click()
        cy.get('div').should('have.text/javascript', " Message: The given data was invalid.")

        //kako sada ovo hvatati???
      })
*/
      it('TC - 05 Register to Gradebook', function() {
        
        cy.visit('/')
        cy.contains('Register').click()

        bookRegisterPage.firstName.type('Milan')
        bookRegisterPage.lastName.type('Milan')
        bookRegisterPage.email.type("zoki@yahoo.com")
        bookRegisterPage.password.type("vivify12345")
        bookRegisterPage.passwordConfirmation.type("vivify12345")
        bookRegisterPage.checkBox.click()
        bookRegisterPage.button.click()

     })


})