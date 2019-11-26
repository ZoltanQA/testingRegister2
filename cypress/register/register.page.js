import { randomEmail } from "../utils"

export default class AuthPage{
    get firstName() {
        return cy.get('#first-name')
    }
    get lastName() {
        //return cy.get('input[id="last-name"]')-stara verzija
        return cy.get('#last-name')
        
    }
    get email() {
        return cy.get('#email')
    }
    get password() {
        return cy.get('#password')
    }
    get passwordConfirmation() {
        return cy.get('#password-confirmation')
    }

    get checkBox() {
        return cy.get('.form-check-input')
      }
    //ovako se hvata check-box

    get button() {
        return cy.get("button[type=submit]")
    }

    //ovde bih trebao da getujem element te klase za logout button

    register({firstName, lastName, email, password, passwordConfirmation}){
        this.firstName.type(this.ifExist(firstName))
        this.lastName.type(this.ifExist(lastName))
        this.email.type(this.ifExist(email))
        this.password.type(this.ifExist(password))
        this.passwordConfirmation.type(this.ifExist(passwordConfirmation))
        this.checkBox.click()
        this.button.click()
    }
    ifExist(postoji){
        if (!postoji) {
            postoji = 'validata@gmail.com'
        } return postoji
    }
    /*
    ifMailExist(postoji){
        if (!postoji) {
            postoji = 'validata@gmail.com'
        } return postoji
    } */

    registerCheck({name, lastName, email, password, passwordConfirmation}) {
        this.checkBox.click()
        this.register({name, lastName, email, password, passwordConfirmation})
      }

    }
    export const authPage = new AuthPage()