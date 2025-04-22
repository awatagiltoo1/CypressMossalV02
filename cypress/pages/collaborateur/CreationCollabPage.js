class CreationMossalCollabPage{

    ClickTableCollab(TableCollab){
        cy.contains(TableCollab).click()
    }
    
    ClickAjoutCollab(){
        //cy.get('[routerlink="/dashboard/collaborators/create-collaborator"]').click()
        cy.get('[style="margin-right: 19px; place-content: center; align-items: center; flex-direction: row; box-sizing: border-box; display: flex;"]').click()
    }

    SetPrenomCollab(PrenomCollab)
{
    cy.get('#prenom').type(PrenomCollab)

}
SetNomCollab(NomCollab)
{
    cy.get('#nom').type(NomCollab)

}
SetAdresse(EmailCollab)
{
    cy.get('#email').type(EmailCollab)

}

SetPhone(PhoneCollab)
{
    cy.get('#telephone').type(PhoneCollab)

}
SetIdUser(MatriculeUser)
{
    cy.get('#matricule').type(MatriculeUser)

}
SetDateNaissCollab(DateNaissCollab)
{
    cy.get('#date-naissance').type(DateNaissCollab)

}

ClearSalaireCollab()
{
    cy.get('#salaire').clear()

}
SetSalaireCollab(SalaireCollabBis)
{
    cy.get('#salaire').type(SalaireCollabBis)

}

SetCSPCollab()
{
      //cy.get('#categorie').select('67bddfb7614c74418a4bf90b').should('have.value', '67bddfb7614c74418a4bf90b')   
      cy.get('#categorie').select('Cadre supérieur').should('have.value', '677e5a9596efeaf6ccaad97f')

}
    ClickSaveCollab(saveCollab){
        cy.get(saveCollab).click()
    }
}
export default CreationMossalCollabPage

