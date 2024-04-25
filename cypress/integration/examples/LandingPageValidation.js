import { Login } from './Login';
import LandingPage from '../pageObjects/LandingPage';
describe('Landing Page Validation', () => {
 
    before(function()  {

        login();

    })

    it('Titlechecking', () => {
     
    const landingpage =new LandingPage();
    landingpage.getTopbarTitile().should('eq','Employee Managment')
    })

}) 