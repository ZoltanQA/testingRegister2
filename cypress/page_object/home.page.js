

export default class HomePage{
    get title() {
        return cy.get('#title')
    }
    get description() {
        //return cy.get('input[id="last-name"]')-stara verzija
        return cy.get('#description')
        
    }
    get image() {
        return cy.get('input[type="url"]')
    }

    get upButton() {
        return cy.get('fa-chevron-circle-up')
    }
    get downButtonConfirmation() {
        return cy.get('fa-chevron-circle-down')
    }
    
 // return cy.get(',fas fa-chevron-circle-down').eq(1).click()
    get addButton() {
    return cy.get("button[type=button]").contains('Add image')
    }

    get submitButton() {
        return cy.get("button[type=submit]").contains('Submit')
    }
    get cancelButton() {
        return cy.get("button[type=submit]").contains('Cancel')
    }
    
}
export const homePage = new HomePage()