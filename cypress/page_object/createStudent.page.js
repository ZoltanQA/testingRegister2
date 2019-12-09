export default class CreateStudentPage {
    get firstName() {
        return cy.get('#firstName')
    }
    get lastName() {
        return cy.get('#lastName')
    }
    get add_images() {
        return cy.get('.btn-sm').contains('Add images')
    }
    get remove_image() {
        return cy.get('.btn-sm').contains('Remove image')
    }
    get move_up_image() {
        return cy.get('.btn-sm').contains('Move image up')
    }
    get move_down_image() {
        return cy.get('.btn-sm').contains('Move image down')
    }
    get submit() {
        return cy.get('button[type=submit]')
    }
    get image_url() {
        return cy.get('input[name=image_NaN]')
    }
    
    createProfessor(name, lName, imgUrl) {
        this.firstName.type(name)
        this.lastName.type(lName)
        this.add_images.click()
        this.image_url.type(imgUrl)
        this.submit.click()
    }
    
    
}
export const createProfessorPage = new CreateProfessorPage()