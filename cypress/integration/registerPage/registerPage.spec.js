import { REGISTER } from '../../fixtures/constants'
import { authPage } from '../../register/register.page'
//import {regPage} from '../../page_object/login.page'
import {randomEmail} from '../../utils/index'


describe('Register Page testing', function(){


    beforeEach(()=>{
        cy.visit('/')
        cy.contains('Register').click()
      })


      it('TC - 01 Galery app check Register', function() {
        cy.url().should("include", "/register")
      })

      it('TC - 02 Register to galery app', function() {
        authPage.registerCheck({
          
        })
    })

      it('TC - 03 Register to galery with empty name field', function() {
        authPage.register({ firstName: ' '  })
      
        cy.get('.alert-danger').eq(0).contains('The first name field is required.')
        cy.get('.alert-danger').eq(1).contains('The email must be a valid email address.')
        cy.get('.alert-danger').eq(2).contains('The password format is invalid.').click()
       
      })

      it('TC - 04 Register to galery app with ivalid email', function() {
        authPage.register({email: 'marko.markovic.gmail.com'})

        cy.get('.alert-danger').eq(0).contains('The email must be a valid email address.').click()
        // ovu poruku ne znam da resim

        /*
        authPage.email.then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })*/
    })
    it('TC - 04 Register to galery with empty last name field', function() {
      authPage.register({ lastName: ' '  })
    
      cy.get('.alert-danger').eq(0).contains('The last name field is required.')
      cy.get('.alert-danger').eq(1).contains('The email must be a valid email address.')
      cy.get('.alert-danger').eq(2).contains('The password format is invalid.').click()
     
    })

    it('TC - 05 Register to galery with no email', function() {
      authPage.register({ email: ' '  })

      authPage.email.then(($input)=>{
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
      })
     
    })

    it('TC - 06 Check register to galery with no password', function() {
      authPage.register({ password: ' ' ,passwordConfirmation: ' ' })

      cy.get('.alert-danger').eq(0).contains('The password field is required.')
    k
     
    })

    it('TC - 07 Check register to galery with mismatched password', function() {
      authPage.register({ password: 'marko123 ' ,passwordConfirmation: '123marko ' })

      cy.get('.alert-danger').eq(0).contains('The password confirmation does not match.')
     
    })

    it.only('TC - 08 Check register to galery with used email', function() {
      authPage.register({ email: 'zoki.juhas@yahoo.com' })

      cy.get('.alert-danger').eq(0).contains('The email has already been taken.')
      cy.get('.alert-danger').eq(1).contains('The password format is invalid.')
    
    }) 






    /*



      it('Galery app check Register with no firts name', function() {
        authPage.firstName.type('')
        authPage.lastName.type('Markovic')
        authPage.email.type('demoMail@yahoo.com')
        authPage.password.type('demo1password')
        authPage.passwordConfirmation.type('demo1password')

        authPage.button.click()

        regPage.firstName.then(($input)=>{
          expect($input[0].validationMessage).to.eq('Please fill out this field.')
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
          expect($input[0].validationMessage).to.eq('Please fill out this field.')
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
          expect($input[0].validationMessage).to.eq('Please fill out this field.')
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
          expect($input[0].validationMessage).to.eq('Please fill out this field.')
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
          expect($input[0].validationMessage).to.eq('Please fill out this field.')
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
      })*/
});