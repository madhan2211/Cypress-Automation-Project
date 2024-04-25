
import HomePage from '../pageObjects/HomePage'



describe('Login Failed Invalidation', () => {
    it('Login Page Validation', () => {
      cy.visit('https://madhankumar-trials712.orangehrmlive.com/auth/login')
      const homePage = new HomePage()
       homePage.getUserName().type('admn')
       homePage.getPassword().type('@3RgyK9aRO')
       homePage.getLoginButton().click();
       cy.get('.toast-message').should('contains.text', 'Invalid credentials');
       
      });
    })

   