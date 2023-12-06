
///<reference types="Cypress" />
describe('handle dropdowns', ()=>{

    it.skip('Dropdown with select', ()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
       
        cy.get('#zcf_address_country')
        .select('Italy')
        .should('have.value','Italy')


    })

    it.skip('Dropdown without select', ()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
       
        cy.get('#select2-billing_country-container').click()
       cy.get('.select2-search__field').type('Iran').type('{enter}')
       cy.get('#select2-billing_country-container')
       .should('have.text','Iran')

    })

    it.skip('Auto suggest Dropdown ', ()=>{

        cy.visit("https://www.wikipedia.org/")
       
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi Capitals').click()
 

    })
    it('Auto suggest Dropdown ', ()=>{

        cy.visit("https://www.google.fr/")
        cy.get("#APjFqb").type('cypress automation')
       cy.wait(3000)
        //cy.get('div.wM6W7dspan').should('have.length',20)
       
        cy.get('div.wM6W7d >span').each(($el,index,$list) => {   

            if($el.text() =='cypress automation tool')
            {
               cy.wrap($el).click()

            }
         })


      cy.get("#APjFqb").should('have.value','cypress automation tool')
 

    })
})