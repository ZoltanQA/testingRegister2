
import { authPage } from '../../register/register.page'

describe('Register Page testing', function(){


    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Register').click()
      })


      it('Galery app check Register', function() {
        cy.url().should("include", "/register")
      })

      it('Galery app check Register with valid data', function() {
        authPage.firstName.type('Marko')
        authPage.lastName.type('Markovic')
        authPage.email.type('demoMail@yahoo.com')
        authPage.password.type('demo1password')
        authPage.passwordConfirmation.type('demo1password')

        authPage.button.click()
        cy.url().should("include", "/home")//ovo treba proveriti

        //ovde bi trebalo napisati da treba da nas prebaci na stranicu sa sledeim url
        //i da ta stranica treba da sadrzi link my galleris ili logout opciju
      })

      it('Galery app check Register with no firts name', function() {
        authPage.firstName.type('')
        authPage.lastName.type('Markovic')
        authPage.email.type('demoMail@yahoo.com')
        authPage.password.type('demo1password')
        authPage.passwordConfirmation.type('demo1password')

        authPage.button.click()

        regPage.firstName.then(($input)=>{
          expect($input[0].validationMessage).to.eq('PLease fill out this field.')
        })
      })

      it('Galery app check Register with no last name', function() {
        authPage.firstName.type('Marko')
        authPage.lastName.type('')
        authPage.email.type('demoMail@yahoo.com')
        authPage.password.type('demo1password')
        authPage.passwordConfirmation.type('demo1password')

        authPage.button.click()
        
        regPage.lastName.then(($input)=>{
          expect($input[0].validationMessage).to.eq('PLease fill out this field.')
        })
      })

      it('Galery app check Register with 1 character first name and 1 character last name', function() {
        authPage.firstName.type('M')
        authPage.lastName.type('M')
        authPage.email.type('jovanMail@yahoo.com')
        authPage.password.type('demo1password')
        authPage.passwordConfirmation.type('demo1password')

        authPage.button.click()
        //ovaj test prolazi
      })

      it('Galery app check Register with just digit in name and last name', function() {
        authPage.firstName.type('1')
        authPage.lastName.type('2')
        authPage.email.type('digitMail@yahoo.com')
        authPage.password.type('demo1password')
        authPage.passwordConfirmation.type('demo1password')

        authPage.button.click()
        
        //i ovaj test prolazi
      })

      it('Galery app check Register with 100 char name and last name', function() {
        authPage.firstName.type('ENi5LKWuaBp5dLi0sNA8uD0nPFv5bbY3dY3fPtBJzLb8jJTkE2XmoL8AWYeVbWFy0Rd81e9VZVFTygzzK6ghVCgs9hx68rc87kIU')
        authPage.lastName.type('ENi5LKWuaBp5dLi0sNA8uD0nPFv5bbY3dY3fPtBJzLb8jJTkE2XmoL8AWYeVbWFy0Rd81e9VZVFTygzzK6ghVCgs9hx68rc87kIU')
        authPage.email.type('d100Mail@yahoo.com')
        authPage.password.type('demo1password')
        authPage.passwordConfirmation.type('demo1password')

        authPage.button.click()
        
        //i ovaj test prolazi
      })

      it('Galery app check Register with no email', function() {
        authPage.firstName.type('Marko')
        authPage.lastName.type('Markovic')
        authPage.email.type('demoMail@yahoo.com')
        authPage.password.type('demo1password')
        authPage.passwordConfirmation.type('demo1password')

        authPage.button.click()

        regPage.email.then(($input)=>{
          expect($input[0].validationMessage).to.eq('PLease fill out this field.')
        })
        
      })

      it('Galery app check Register with invalid email', function() {
        authPage.firstName.type('Marko')
        authPage.lastName.type('Markovic')
        authPage.email.type('demo.yahoo.com')
        authPage.password.type('demo1password')
        authPage.passwordConfirmation.type('demo1password')

        authPage.button.click()

        regPage.email.then(($input)=>{
          expect($input[0].validationMessage).to.eq("Please includ'@' in the email address.")
        })
        

      })

      it('Galery app check Register with no password', function() {
        authPage.firstName.type('Marko')
        authPage.lastName.type('Markovic')
        authPage.email.type('demoMail@yahoo.com')
        authPage.password.type('')
        authPage.passwordConfirmation.type('')

        authPage.button.click()

        regPage.password.then(($input)=>{
          expect($input[0].validationMessage).to.eq('PLease fill out this field.')
        })

      })

      it('Galery app check Register with no confirmed password', function() {
        authPage.firstName.type('Marko')
        authPage.lastName.type('Markovic')
        authPage.email.type('demoMail@yahoo.com')
        authPage.password.type('demo1password')
        authPage.passwordConfirmation.type('')

        authPage.button.click()
        
        regPage.password.then(($input)=>{
          expect($input[0].validationMessage).to.eq('PLease fill out this field.')
        })
      })
      it('Galery app check Register with mis-matched password', function() {
        authPage.firstName.type('Marko')
        authPage.lastName.type('Markovic')
        authPage.email.type('demoMail@yahoo.com')
        authPage.password.type('demo1password')
        authPage.passwordConfirmation.type('password1demo')

        authPage.button.click()
        
        cy.get('.alert-danger').should('have.text', 'The password confirmation does not match.')
      })
      it('Galery app check Register with 1 character', function() {
        authPage.firstName.type('Marko')
        authPage.lastName.type('Markovic')
        authPage.email.type('demoMail@yahoo.com')
        authPage.password.type('d')
        authPage.passwordConfirmation.type('d')

        authPage.button.click()

        regPage.password.then(($input)=>{
          expect($input[0].validationMessage).to.eq("The password must be at least 8 characters.")
        })
        
        
      })
      it('Galery app check Register with 2 character', function() {
        authPage.firstName.type('Marko')
        authPage.lastName.type('Markovic')
        authPage.email.type('demoMail@yahoo.com')
        authPage.password.type('de')
        authPage.passwordConfirmation.type('de')

        authPage.button.click()
        
        regPage.password.then(($input)=>{
          expect($input[0].validationMessage).to.eq("The password must be at least 8 characters.")
        })
      })

      it('Galery app check Register with 7 character', function() {
        authPage.firstName.type('Marko')
        authPage.lastName.type('Markovic')
        authPage.email.type('demoMail@yahoo.com')
        authPage.password.type('demomai')
        authPage.passwordConfirmation.type('deemomai')

        authPage.button.click()
        
        regPage.password.then(($input)=>{
          expect($input[0].validationMessage).to.eq("The password must be at least 8 characters.")
        })
      })
      it('Galery app check Register with 8 character with no digit', function() {
        authPage.firstName.type('Marko')
        authPage.lastName.type('Markovic')
        authPage.email.type('demoMail@yahoo.com')
        authPage.password.type('demomail')
        authPage.passwordConfirmation.type('demomail')

        authPage.button.click()
        
        cy.get('.alert-danger').should('have.text', 'The password format is invalid.') 
      })
      it('Galery app check Register with 9 character with no digit', function() {
        authPage.firstName.type('Marko')
        authPage.lastName.type('Markovic')
        authPage.email.type('demoMail@yahoo.com')
        authPage.password.type('demomaild')
        authPage.passwordConfirmation.type('demomaild')

        authPage.button.click()
        
        cy.get('.alert-danger').should('have.text', 'The password format is invalid.') 
      })
      it('Galery app check Register with 6 character and 1 digit', function() {
        authPage.firstName.type('Marko')
        authPage.lastName.type('Markovic')
        authPage.email.type('demoMail@yahoo.com')
        authPage.password.type('demoma1')
        authPage.passwordConfirmation.type('demoma1')

        authPage.button.click()
        
        cy.get('.alert-danger').should('have.text', 'The password must be al least 8 characters') 
      })
      it('Galery app check Register with 7 digit', function() {
        authPage.firstName.type('Marko')
        authPage.lastName.type('Markovic')
        authPage.email.type('demoMail@yahoo.com')
        authPage.password.type('1234567')
        authPage.passwordConfirmation.type('1234567l')

        authPage.button.click()
        
        cy.get('.alert-danger').should('have.text', 'The password must be al least 8 characters.') 
      })
      it('Galery app check Register with 0 character, just 8 digit', function() {
        authPage.firstName.type('Marko')
        authPage.lastName.type('Markovic')
        authPage.email.type('demoMail@yahoo.com')
        authPage.password.type('12345678')
        authPage.passwordConfirmation.type('12345678')

        authPage.button.click()
        
        //ovaj test prolazi jer moze bez slova
      })
      it('Galery app check Register withaut accepting terms-checkbox', function() {
        authPage.firstName.type('Marko')
        authPage.lastName.type('Markovic')
        authPage.email.type('demoMail@yahoo.com')
        authPage.password.type('demo1password')
        authPage.passwordConfirmation.type('demo1password')

        //not checking the checkox for terms and conditions

        authPage.button.click()
        
        cy.get('.alert-danger').should('have.text', 'The password must be al least 8 characters.') 
      })
      it('Galery app check Register with used email address', function() {
        authPage.firstName.type('Jovan')
        authPage.lastName.type('Jovanovic')
        authPage.email.type('demomail@yahoo.com')
        authPage.password.type('jovan123')
        authPage.passwordConfirmation.type('jovan123')

        authPage.button.click()
        
        cy.get('.alert-danger').should('have.text', 'The email has already been taken.') 
      })
});