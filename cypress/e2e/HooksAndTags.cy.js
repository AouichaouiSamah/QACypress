   //before
    //after
    //beforeEach
    //AfterEach

describe('MyTestSuite',()=>{

before(()=>{
    cy.log("****** launch app ******");

})
after(()=>{
    cy.log("****** close app ******");
})
beforeEach(()=>{

    cy.log("***********login ******")
})

afterEach(()=>{

    cy.log("***********close app ******")
})
    it('search',()=>{
        cy.log("****** searching ******");

    });

    it.skip('advanced search',()=>{
        cy.log("****** advanced search ******");
    });

    it.only('listing products',()=>{
        cy.log("****** listing products ******");
    });
})