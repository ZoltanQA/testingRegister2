//const buttonLocator='.ca-ca-button'

export default class AuthPage{
get email() {
    return cy.get('input[id="email"]')
}
get password() {
    return cy.get('input[id="password"]')
}
get button() {
    return cy.get("button[type=submit]")
}
}

//ovde mi treba register page odnosno login traziti od kolega


export const authPage = new AuthPage()