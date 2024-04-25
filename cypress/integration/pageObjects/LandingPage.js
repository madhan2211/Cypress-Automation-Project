class LandingPage{

getTopbarTitile()
{
    return cy.get('.topbar-title')
}
getSearchBar()
{
    return cy.get('#menuQuickSearch_menuQuickSearch')
}
getPicture(){
    return cy.get('.picture')
}
getName(){
    returncy.get('.name')
}
getJobTitle(){
    return cy.get('.job-title')
}


}
 export default LandingPage