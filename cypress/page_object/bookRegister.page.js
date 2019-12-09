
export default class BookRegisterPage{
    get firstName() {
        return cy.get('input[name="firstName"]')
    }
    get lastName() {
        //return cy.get('input[id="last-name"]')-stara verzija
        return cy.get('input[name="lastName"]')
        
    }
    get email() {
        return cy.get('input[name="email"]')
    }
    get password() {
        return cy.get('input[name="password"]')
    }
    get passwordConfirmation() {
        return cy.get('input[name="passwordConfirmation"]')
    }

    get checkBox() {
        return cy.get('input[type=checkbox]')
      }

    get button() {
        return cy.get("button[type=submit]")
    }



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
            postoji = 'validate it'
        } return postoji
    }
   

    bookRegisterCheck({name, lastName, email, password, passwordConfirmation}) {
        this.checkBox.click()
        this.register({name, lastName, email, password, passwordConfirmation})
      }

    }
    export const bookRegisterPage = new BookRegisterPage()