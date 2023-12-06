//go()

describe('mysuite',()=>{

    it('NavigationTest' ,()=>
    {
      cy.visit("https://demo.nopcommerce.com/");
      cy.title().should('eq','nopCommerce demo store');//Home page

      cy.get("/html[1]/body[1]/div[6]/div[2]/ul[1]/li[5]/a[1]").click();
      cy.get("div[class='page-title'] h1").should('have.text',"Books"); // books
      cy.go('back'); //go back to home page
      cy.title().should('eq','nopCommerce demo store');
      cy.go('forward'); //books
      cy.get("div[class='page-title'] h1").should('have.text',"Books"); // books
      cy.go(-1); //home
      cy.title().should('eq','nopCommerce demo store');//Home page
      cy.go(1); //books
      cy.get("div[class='page-title'] h1").should('have.text',"Books"); // books
      cy.reload();
            
     })
    })