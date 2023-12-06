

describe('Handle Tables',()=>{
    beforeEach('Login',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php");
        cy.get("#input-username").type("demo");
        cy.get("#input-password").type("demo");
        cy.get("button[type='submit']").click();
        cy.get(".btn-close").click();
        //Customers--->Customers
        cy.get("#menu-customer>a").click(); //Customers main menu
        cy.get("#menu-customer>ul>li:first-child").click(); //Customers main menu
   })

    it.skip('Check Number Rows & Coluùns',()=>{

        cy.get("body > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2)").should("have.length","5");
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should("have.length","7");

     })
     it.skip('Check cell data from specific row  & Columns',()=>{

        cy.get("//td[normalize-space()='olaola@das.com']")
        .contains("olaola@das.com");
     
     })

     it.skip('Read all the rows  & Columns data in the first page',()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
          .each(($row,index,$rows)=>{

            cy.wrap($row).within( ()=>{

                cy.get("td").each( ($col,index,$cols)=>{
                    cy.log($col.text());
                })
            })


          })
     
     })

     it.skip('Pagination',()=>{

        //find total number of pages
        let totalPages;
        cy.get(".col-sm-6.text-end").then( (e) =>{

            let mytext=e.text(); //showing 1 to 10 of 5581
            totalPages=mytext.substring(mytext.indexOf("(") +1 ,mytext.indexOf("Pages")-1);
            cy.log("Total number of pages in a table =======>"+totalPages);
                })
      
     
     })

     
     it.only('Pagination with click',()=>{

        //find total number of pages
        let totalPages=5;
       for(let p=1;p<=totalPages;p++)
       {
         if(totalPages>1)
         {
            cy.log("Active page is ====="+p);
            cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
            cy.wait(3000);

            cy.get("table[class='table table-bordered table-hover']>tbody>tr")
             .each( ($row,index,$rows)=>{
                cy.wrap($row).within( ()=>{

                    cy.get('td:nth-child(3)').then( (e)=>{
                        cy.log(e.text()); //Email
                    })
                })
             })

         }
       }
      
     
     })
    })
