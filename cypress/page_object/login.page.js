//const buttonLocator='.ca-ca-button'

export default class AuthPage{
get email() {
    return cy.get('input[id="email"]')
}
get password() {
    return cy.get('input[id="password"]')
}
get button() {
    return cy.get('button[type="submit"]')
}
/*
get navButton() {
    return cy.get("nav-buttons[type=create gallery]")
}
*/

get alert() {
    return cy.get('.alert-danger')
  }

login(email, password) {
    this.email.type(email)
    this.password.type(password)
    this.button.click()
  }

}

export const authPage = new AuthPage()
