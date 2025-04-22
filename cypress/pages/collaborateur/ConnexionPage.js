class ConnexionMossal
{
    SetUrl(url)
    {
        cy.visit(url)
    }


SetEmail(MailLocator,Email)
{
    cy.get(MailLocator).type(Email)

}

SetPassword(MdpLocator,Passeword)
{
    cy.get(MdpLocator).type(Passeword)

}


ClickSubmit(SubmitBtn)
{
    cy.get(SubmitBtn).click()

}
VerifyEcheance(Echeance)
{
    cy.contains(Echeance).should('be.visible')

}
    
}
export default ConnexionMossal

/*

    cy.get('input[name="email"]').type('genieouzog+atos@gmail.com')
    cy.get('input[name="password"]').type('$Mossal1234')
    cy.get('.submit').click()      
    cy.contains('Echéances Avance sur salaire').should('be.visible')
    cy.contains(':nth-child(1) > .nav-item', 'Tableau de bord').should('be.visible')
    cy.get('#dropdown-filter-user-list-saved').should('exist')  
*/