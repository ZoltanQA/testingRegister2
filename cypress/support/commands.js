// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
    Cypress.log({
      name: 'loginByForm',
      message: email + ' | ' + password
    })
    cy.request({
      method: 'POST',
      url: Cypress.config('backendUrl') + 'auth/login',
      form: true,
      followRedirect: true,
      body: {
        email: email,
        password: password,
      }
    }).
    then((resp)=>{
       expect(resp.body).to.have.property('access_token')
       localStorage.setItem('token', resp.body.access_token)
       cy.visit('/')
    }) 
  })

  Cypress.Commands.add('login1', (email, password) => {
    Cypress.log({
      name: 'loginByForm',
      message: email + ' | ' + password
    })
    cy.request({
      method: 'POST',
      url: Cypress.config('backendUrl') + 'auth/login',
      form: true,
      followRedirect: true,
      body: {
        email: email,
        password: password,
      }
    }).
    then((resp)=>{
       expect(resp.body).to.have.property('token')
       localStorage.setItem('token', resp.body.token)
       cy.visit('/')
    }) 
  })

  //promenjeno na login1, moram da ubacim novu varijablu pod nekim imenom koji ce imati 
  //kao backand url u cypress.json fajl, ne zaboravi na zarez posle nove varijable za url
  //bilo koji naziv, da promnim path pored toga
  //treba da proverim preko inspecta ime tokena
  //i onda po novom imenu pozivati 
  
