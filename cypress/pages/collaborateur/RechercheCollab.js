class RechercheCollab{

    ClickTableCollab(TableCollab){
        cy.contains(TableCollab).click()
    }
    
    searchCollab(NomCollab){
        
        cy.get('.form-control').type(NomCollab)
    }


}
export default RechercheCollab
