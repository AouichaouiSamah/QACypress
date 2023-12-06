//const cypress = require("cypress")

describe("Check UI Elements", ()=>{

    it("Checking Radio Buttons",()=>{

        //visibility of radio buttons
        cy.visit("https://demoqa.com/radio-button")
        cy.get("//input[@id='noRadio']").should('be.visible')


        //selecting radio buttons
        cy.visit("https://demoqa.com/radio-button")
        cy.get("//input[@id='noRadio']").check().should('be.checked')
        cy.get("//input[@id='noRadio']").should('not.be.checked')


    })

    it("Checking Radio Buttons",()=>{

        
        cy.visit("https://demoqa.com/radio-button")
      //Visibility of the element
      cy.get("")
    })
})