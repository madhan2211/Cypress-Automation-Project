
import HomePage from '../pageObjects/HomePage'



describe('My First Test', () => {
 

    it('Login Page Validation', () => {
     
  cy.visit("https://teststore.automationtesting.co.uk/index.php?id_product=1&id_product_attribute=1&rewrite=hummingbird-printed-t-shirt&controller=product#/1-size-s/8-color-white");
  cy.get('.add > .btn').click();
  cy.get('.cart-content-btn > .btn-primary').click();
  cy.get('.text-sm-center > .btn').click();
    })

}) 
