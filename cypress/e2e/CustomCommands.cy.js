//click on link using labem
//over writing existing contains() command
//re-usuable custom command

describe('Custom commands',()=>{

   
    it('handling links',()=>{

        cy.visit("https://demo.nopcommerce.com/")
        //cy.get('body > div:nth-child(7) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1)').click();
        //cy.wait(3000);
      
        //using custom command
        cy.clickLink("Apple MacBook Pro 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');

    })

    it('overwriting existing command',()=>{
        cy.visit("https://demo.nopcommerce.com/");
        //using custom command
        cy.clickLink("APPLE MACBOOK PRO 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');

        
    })

    it.only('login command',()=>{

        cy.visit("https://demo.nopcommerce.com/");
        //Login
       cy.clickLink("Log in"); //custom command
       cy.loginapp('testing@gmail.com','test123');  //custom command
       cy.get('.new-wrapper > .title > strong').should('have.text','New Customer');



       

        
    })

     })