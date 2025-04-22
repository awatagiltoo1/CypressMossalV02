class DetailCollabPage{
    ClickTableCollab(TableCollab){
        cy.contains(TableCollab).click()
    }
    ChosirCollab(ActionBtn){
        cy.get(ActionBtn).click()
    }
    
    OptionEdition(EditBtn){
        cy.get(EditBtn).first().click()
    }
    
    AfficherDetailCollab(DetailsCollab){
        cy.get(DetailsCollab).click()
    }

    AffichageInfoCollab(infoCollab){
        cy.get(infoCollab).should('be.visible')
        // cy.contains(Echeance).should('be.visible')
    }
    

}

export default DetailCollabPage