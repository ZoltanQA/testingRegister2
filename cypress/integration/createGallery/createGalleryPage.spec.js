import { EMAIL } from '../../fixtures/constants'
import { authPage } from '../../page_object/login.page'
import { homePage } from '../../page_object/home.page'
import { randomTitle } from '../../utils'


describe('Create Page testing', function(){


    beforeEach(()=>{
        //cy.visit('/login')
        //authPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
         cy.login(EMAIL.EXISTING, EMAIL.PASSWORD)
      })


      it('TC - 01 Galery app check - paginatiom', function() {
        
        cy.get('.cell').eq(9).should('exist')
        cy.get('.cell').eq(10).should('not.exist')
        cy.get('.btn-custom').click()
        cy.wait(4000)
        cy.get('.cell').eq(19).should('exist')
        cy.get('.cell').eq(20).should('not.exist')
      
        /* it('Does not do much!', function() {
            expect(true).to.equal(true)
          })*/
      })

      it('TC-02 Gallery app pagination druga verzija', function(){
          cy.get('div.grid').children().should('have.length', 10)
          cy.contains('Load More').click()
          cy.get('div.grid').children().should('not.have.length', 10)
      })

      it('TC- 03 create vith valid data', function(){

        var random = randomTitle()

        cy.contains('Create Gallery').click()
        homePage.title.type(random)
        homePage.description.type('Inserting the desription')
        homePage.image.type("https://i.pinimg.com/736x/a9/4a/43/a94a4359cbf1808f5cd0df9353501022--game-party-xavier.jpg")
        homePage.submitButton.click()

        cy.wait(2000)
        cy.contains('All Galleries')
        cy.get('.box-title').eq(0).should('contain', random)

    })

    it('TC- 04 testing add picture input field', function(){

        var random = randomTitle()

        cy.contains('Create Gallery').click()
        homePage.title.type(random)
        homePage.description.type('Inserting the desription')
        homePage.image.type("https://i.pinimg.com/736x/a9/4a/43/a94a4359cbf1808f5cd0df9353501022--game-party-xavier.jpg")
        homePage.addButton.click()
        cy.wait(2000)
        homePage.image.eq(1).should('exist')
        cy.get('.fa-trash').eq(1).click()
       

    })

    it('TC- 05  adding then deleting input field for url', function(){

        var random = randomTitle()

        cy.contains('Create Gallery').click()
        homePage.title.type(random)
        homePage.description.type('Inserting the desription')
        homePage.image.type("https://i.pinimg.com/736x/a9/4a/43/a94a4359cbf1808f5cd0df9353501022--game-party-xavier.jpg")
        homePage.addButton.click()
        homePage.image.eq(1).should('exist')
        cy.get('.fa-trash').eq(1).click()
        homePage.image.eq(0).should('exist')

    })

    it('TC- 06 invalid title field - 1 character', function(){

        var title1Char = "t";

        cy.contains('Create Gallery').click()
        homePage.title.type(title1Char)
        homePage.description.type('Inserting the desription')
        homePage.image.type("https://i.pinimg.com/736x/a9/4a/43/a94a4359cbf1808f5cd0df9353501022--game-party-xavier.jpg")
        homePage.submitButton.click()

        cy.get('.alert-danger').eq(0).contains('The title must be at least 2 characters.')

    })

    it.only('TC- 07n invalid title field - with 260 character', function(){

        var title260Char = "WtX8Kyxzmq8XZqnnOsHmI1zOektYohmTPIeaMR347l4IAXsaJAHAxn1a6VPB3Avx7psvHqn9PIKumh123EdG0gjNaLe5NEzyrSqoO4mXgr6WQuRdkm0Ng2bLSvZMIZbECbJ8lFDk1AN8PURiYVFizVND4r2CIWh6wXz6HJpkr0ZVYuKZ4MXDcDNqI0atvAW6uGkm3DjXt5PwRZe7N1Wsy9n68Ax5eoudN7sNpwZU887ivGhtSgLC3b4mqGwmk6G2vm7H";
        // ovo bi trebalo u konstantu,  znam, znam...nije lepo
        
        cy.contains('Create Gallery').click()
        homePage.title.type(title260Char)
        homePage.description.type('Inserting the desription')
        homePage.image.type("https://i.pinimg.com/736x/a9/4a/43/a94a4359cbf1808f5cd0df9353501022--game-party-xavier.jpg")
        homePage.submitButton.click()

        cy.get('.alert-danger').eq(0).contains('The title may not be greater than 255 characters.')
    
    })

    it('TC- 08 -testing description with max 1000 character', function(){
        
        var random = randomTitle()
        var desc1000c = "NHsRVmhhLXbH3Tjl3Q4by93SSmEhK5NiDnvomFq1GnfIKhQ8ixKbSwIPek8tX8jZSC6F9UZw28CDZ1XjOJajwQjtU9yFCKNSbhB44b4QfBAOAj6hgfqAnzl9NuCsSQg1lpuSDTvJYwaIlpEGKNBFCxZYbmTt5HC1irqBjkM2QD8mJuwhf7dP7E3agyo8uQsoSFafQoz3PefX5p3oI61oNMJOT2hYFmhnHJGSiO9k9DoVSOtehfEE32BDryBe8ST598v1QOfaDyI8PArAHKTXnhef7wNM7l1ArfAXGhe2UvmAmoCHPlBCLsYLDYo0sNDNRhhPaYvYslaRq8kxJGKitxEwR9x3JRYPdyT30WVHmBlrm5TXJLWjleQwCpCk7WflMovcvQi6tgHLFlekSxsRAhd2Ep6OMyzoRPjIiWj39b4IBYRWvLPDoUgGuIigz0zA1BGMEbGXV5nITHj8YC34kVOJTO8lzCKoYwVZGgBFJ4ro76OG35lGxsXRtfLTYponVhQ0gUgahMTmfpJYq0AcpbAoN9bm2dZsX4N9hd78SnJpAiDU7ZCOf1fG9E6sXWAwoePLaGxkx2aKR4geIrAvkAQX6ljqen5iT36sruEC7CBW0RYoaK5TtrIOvJMBoWuIylotV2RZvJoa5NlrLnCs2NTxfiIoXggynNl4slCT2mSwuZ5FxZtgIGhK0UGemlv2wbfahh14PZtEBXpPXDpFWKcDtUlw0KFbyixThZaa31A0TMv1ZZrK4hokBKkj03xmRcuOZeQGPZwv7HmLo01FGnlF5ATMQWHPwOasiUThcgFSQtGrvgFnWeJfvBJlvpg5zlapiIwgDbh25hPAaUIR3nEZhLItynTHCTtpo8GPl5LUw1qfGfOoSmPffGCSZbbHUN8OR9KGbxdlRejZW0aDlNhXvZj2p4qVU3gJgticiVoI8pf6Xdz054B1DvJBLySTfwNtC8ikvBlEhw5K7WTYJu022ZjXPzOLWql5XY7W";

        cy.contains('Create Gallery').click()
        homePage.title.type(random)
        homePage.description.type(desc1000c)
        homePage.image.type("https://i.pinimg.com/736x/a9/4a/43/a94a4359cbf1808f5cd0df9353501022--game-party-xavier.jpg")
        homePage.submitButton.click()
        //prolazi

    })

    it('TC- 09 cancel button functionaliti', function(){

        var random = randomTitle()

        cy.contains('Create Gallery').click()
        homePage.title.type(random)
        homePage.description.type('Inserting the desription')
        homePage.image.type("https://i.pinimg.com/736x/a9/4a/43/a94a4359cbf1808f5cd0df9353501022--game-party-xavier.jpg")
        homePage.cancelButton.click()

    
        cy.contains('All Galleries')

    })

    it('TC- 10 up and down functionaliti functionaliti', function(){

        var random = randomTitle()
        var pTrumpet= "https://i.pinimg.com/736x/a9/4a/43/a94a4359cbf1808f5cd0df9353501022--game-party-xavier.jpg";
        var pLeaf= "https://images.pexels.com/photos/1131458/pexels-photo-1131458.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
        
        cy.contains('Create Gallery').click()
        homePage.title.type(random)
        homePage.description.type('Inserting the desription')
        homePage.image.type(pTrumpet)
        homePage.addButton.click()
        homePage.image.eq(1).type(pLeaf)
        cy.get('.fa-chevron-circle-up').eq(1).click()

        //cy.get('homePage.image').eq(1).should('have.value', pTrumpet)
        cy.get('input[type="url"]').eq(1).should('have.value', pTrumpet)
    })

      it('TC - 01 Galery app - paginatiom load more count 9', function() {
        cy.server()
        cy.route('GET',Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:galleryC9.json').as('stub')
        cy.get('.btn-custom').should('not.exist')

      
      })

      it('TC - Galery app - paginatiom load more count 10', function() {
        cy.server()
        cy.route('GET',Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:galleryC10.json').as('stub')
        cy.get('.btn-custom').should('not.exist')
      
      })

        it('TC - 01 Galery app - paginatiom load more count 11', function() {
        cy.server()
        cy.route('GET',Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:galleryC11.json').as('stub')
        cy.get('.btn-custom').should('exist')
      
      })

      it('TC - 04 Galery app - CHECK paginatiom load more count 9', function() {
        cy.server()
        cy.route('GET',Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:galleryC9.json').as('stub')
        cy.visit('/')
        cy.get('.cell').eq(8).should('exist')
        cy.get('.cell').eq(9).should('not.exist')

      
      })

      it('TC - 04 Galery app - paginatiom load more count 10', function() {
        cy.server()
        cy.route('GET',Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:galleryC10.json').as('stub')
        cy.visit('/')
        cy.get('.cell').eq(9).should('exist')
        cy.get('.cell').eq(10).should('not.exist')

      
      })

        it.only('TC - domaci Galery app - paginatiom load more count 11', function() {
        cy.server()
        cy.route('GET',Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:galleryC10.json').as('stub')
        cy.visit('/')
        
        cy.route('GET',Cypress.config('backendUrl') + 'galleries?page=2&term=', 'fixture:galleryC1.json').as('stubgg')
       // cy.get('.cell').eq(10).should('exist') 
        cy.get('.btn-custom').click()

        cy.get('.cell').eq(10).should('exist') 
      })

})