

describe("Handle tabs" , (()=>{

    it("Approach1", ()=>{

        cy.visit("http://the-internet.herokuapp.com/windows");
        cy.wait(3000);
        cy.get('.example >a').invoke('removeAttr','target').click();
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
    })

}))