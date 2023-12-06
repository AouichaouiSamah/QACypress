import Login from "../PageObjects/LoginPage2.js";

describe('pom',()=>
{
//General approach
    it('LoginTest',()=>
    {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")

        cy.get("button[type='submit']").click();
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard');
    })
    //Using POM
    it.only('LoginTest',()=>
    {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const ln=new Login();
        ln.setUserName("Admin");
        ln.setPassword("admin123");
        ln.clickSubmit();
        ln.verifyLogin();
    })   

       //Using fixture
       it.only('LoginTest',()=>
       {
   
           cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
           cy.fixture('orangehrm').then((data)=>{
             
            const ln=new Login();
            ln.setUserName(data.username);
            ln.setPassword(data.password);
            ln.clickSubmit();
            ln.verifyLogin();
           })
           
       })   
})
    