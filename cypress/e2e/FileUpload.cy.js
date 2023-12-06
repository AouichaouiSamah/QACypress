
import 'cypress-file-upload';

describe('File Uploads',()=>{

       it.skip('Single File Upload' ,()=>{
           cy.visit('https://the-internet.herokuapp.com/upload');
           cy.get('#file-upload').attachFile('Demo4.csv');
           cy.get('#file-submit').click();
           cy.wait(3000);
           cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
        });

        it.skip(' File Upload-Rename' ,()=>{
            cy.visit('https://the-internet.herokuapp.com/upload');
            cy.get('#file-upload').attachFile({filePath:'Demo4.csv',fileName:'myFile.csv'});
            cy.get('#file-submit').click();
            cy.wait(3000);
            cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
    
        });

        it('File Upload-Drag and Drop' ,()=>{
            cy.visit('https://the-internet.herokuapp.com/upload');
            cy.get('#drag-drop-upload').attachFile("Demo4.csv",{subjectType:'drag-n-drop'});
            cy.wait(5000);
            cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
              .contains("Demo4.csv");
        });

        it('Multiple File Upload' ,()=>{
           cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
           cy.get('#filesToUpload').attachFile( [ "Demo4.csv","Cypress.odt"]  );
           cy.wait(3000);
           cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:');

    
        });

        it.only(' File Upload-Shadow dom' ,()=>{
           cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
           cy.get('.smart-browse-input' ,{includeShadowDom:true}).attachFile('Demo4.csv');
           cy.wait(3000);

           cy.get('.smart-item-name' ,{includeShadowDom:true}).contains('Demo4.csv');

    
        });
    })
           