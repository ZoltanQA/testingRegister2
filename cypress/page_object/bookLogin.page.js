
export default class BookLoginPage{

    get email() {
        return cy.get('input[name="email"]')
    }

    get password() {
        return cy.get('input[name="password"]')
    }
    get button() {
        return cy.get('button[type="submit"]')
    }
    
    get search(){
        return cy.get('input[name="filter"]')
    }
    
    login(email, password) {
        this.email.type(email)
        this.password.type(password)
        this.button.click()
      }
    
    }
    
    export const bookLoginPage = new BookLoginPage()