
const cypress =require("cypress");

describe('CSSLocators', ()=>{
    it("csslocators", ()=>{
        
        cy.visit("https://automationexercise.com/products")
        cy.get("input#search_product").type("T-Shirts")   //id tag is optional
        cy.get("#submit_search").click()
        cy.get(".lighter").contains("T-Shirts")  //Assertion

    })
})