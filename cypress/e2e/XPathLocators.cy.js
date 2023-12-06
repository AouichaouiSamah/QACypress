
const cypress =require("cypress");

describe('XPathLocators', ()=>{

    it('find no of products', ()=>{

        cy.visit("https://automationexercise.com/")
        cy.xpath("//div[@class='features_items']").should('jave.length',40)
    })
})