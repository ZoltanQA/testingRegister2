export default class CreateGradeBPage {

    get gradebook_title() {
        return cy.get('#title')
    }
    get professor() {
        return cy.get('#professor')
    }
    get submit() {
        return cy.get('.btn-primary').contains('Submit')
    }
    get add_student() {
        return cy.get('.btn-primary').contains('Add Student').click()
    }
    get student_add_image() {
        return cy.get('.btn-primary').contains('Add images')
    }
    get comment() {
        return cy.get('textarea')
    }

    get filter(){
        return cy.get('input[class="form-control"]')
    }

    get edit_gradebook() {
        return cy.get('.btn-warning').contains('Edit Gradebook')
    }
    get delete_gradebook() {
        return cy.get('.btn-danger').first().contains('Delete').click()
    }

    get my_gradebook() {
        return cy.contains('My Gradebook').click()
    }
    get table_dark() {
        return cy.get('.table-dark')
    }

    createGradebook(gradebookName, selectedProfessor) {
        this.gradebook_title.type(gradebookName)
        this.professor.type(selectedProfessor)
        this.submit.click()
    }
    
    
}
export const createGradeBPage = new CreateGradeBPage()