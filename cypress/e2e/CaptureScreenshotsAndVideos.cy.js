describe('mysuite',()=>
{

    it('Capture screenshots & Videos',()=>
    {
      cy.visit("https://demo.nopcommerce.com/");
      /*cy.screenshot("homepage");
      cy.wait(5000);
      cy.get("img[alt='nopCommerce demo store']").screenshot("logo");
      */

      //Automatically capture screenshots & video on failure -only when ou execute through CLI

       cy.get("h2[class='title'] a[title='Show products in category Digital downloads']").click();
       cy.get("div[class='page-title'] h1").should('have.text','Digital downloads');
       


    })
})