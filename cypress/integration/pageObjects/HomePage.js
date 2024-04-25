
class HomePage{
getUserName()
{
    return cy.get('#txtUsername')
}
getPassword()
{
    return cy.get('#txtPassword')

}
getLoginButton()
{
    return cy.get('button[type="submit"]')
}
}
export default HomePage;
