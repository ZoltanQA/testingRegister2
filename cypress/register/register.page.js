export default class AuthPage{
    get firstName() {
        return cy.get('input[id="first-name"]')
    }
    get lastName() {
        return cy.get('input[id="last-name"]')
        //return cy.get('#last-name')- ovako se pise pravilno
    }
    get email() {
        return cy.get('input[id="email"]')
    }
    get password() {
        return cy.get('input[id="password"]')
    }
    get passwordConfirmation() {
        return cy.get('input[id="password-confirmation"]')
    }

    /*get checkbox() {
        return cy.get('check-box-nesto'proveriti)
    }*/

    get button() {
        return cy.get("button[type=submit]")
    }
    }
    export const authPage = new AuthPage()