import ConnexionMossal from "../pages/collaborateur/ConnexionPage";
import CreationMossalCollabPage from "../pages/collaborateur/CreationCollabPage";
import DetailCollabPage from "../pages/collaborateur/DetailCollabPage";

import { faker } from '@faker-js/faker';

const telephone = faker.number.int({min: 1000000, max:9999999})
const idenUser = faker.number.int({min:1000, max:9999});
const CSP=faker.person.jobTitle();
//const CompteBancaireCollab = faker.string.alphanumeric();
const prenomCollab= faker.person.firstName();



describe('ConnexionPom', () => {
    const cnx=new ConnexionMossal ();
    const CreationMossalCollab= new CreationMossalCollabPage ();
    const DetailCollab=new DetailCollabPage ();
   // const CreationMossalCollab=new CreationMossalCollab();
    //const searchcollab=new RechercheMossalCollab ();
    //const CreationCollab=new CreationMossalCollab();
   
    it('SeConnecter', () => {


cnx.SetUrl('https://app-dev.mossall.com/auth/login') 
cnx.SetEmail('input[name="email"]','genieouzog+mossallv2@gmail.com')
cnx.SetPassword('input[name="password"]','password')
cnx.ClickSubmit('.submit')
cnx.VerifyEcheance('Echéances Avance sur salaire')

/** */
      
    })

   it('ajouter un Collab', () => {
    cnx.SetUrl('https://app-dev.mossall.com/auth/login') 
    cnx.SetEmail('input[name="email"]','genieouzog+mossallv2@gmail.com')
    cnx.SetPassword('input[name="password"]','password')
    cnx.ClickSubmit('.submit')
    CreationMossalCollab.ClickTableCollab('Collaborateurs')
    //CreationMossalCollab.ClickAjoutCollab('+ Ajouter un collaborateur')
    CreationMossalCollab.ClickAjoutCollab()   
     CreationMossalCollab.SetPrenomCollab(prenomCollab)
    CreationMossalCollab.SetNomCollab(faker.person.lastName())
    CreationMossalCollab.SetAdresse(faker.internet.email())
    CreationMossalCollab.SetPhone('+22177' +telephone.toString())
    CreationMossalCollab.SetIdUser(idenUser.toString())
    CreationMossalCollab.SetDateNaissCollab('2000-01-02')
    CreationMossalCollab.SetCSPCollab()
    CreationMossalCollab.ClearSalaireCollab()
    CreationMossalCollab.SetSalaireCollab('2000000')
    CreationMossalCollab.ClickSaveCollab('.submit-button')
 
})

if (true) {
    it.only("Verifier les details d'un collaborateur", () => {
        cnx.SetUrl('https://app-dev.mossall.com/auth/login') 
        cnx.SetEmail('input[name="email"]','genieouzog+mossallv2@gmail.com')
        cnx.SetPassword('input[name="password"]','password')
        cnx.ClickSubmit('.submit')
        CreationMossalCollab.ClickTableCollab('Collaborateurs')
       /*
       Pour tests
        DetailCollab.ChosirCollab(':nth-child(1) > .cdk-column-action > .dropdown > .btn-edit-statut > .text')
       
        DetailCollab.OptionEdition('tr:nth-child(4) > td:nth-child(5) > .dropdown > .btn-edit-statut > .text > span')
        DetailCollab.AfficherDetailCollab('tr:nth-child(4) > td:nth-child(5) > .dropdown > #dropdown-action > div:nth-child(2)')
       */   
    })   
    }

/*it.only('rechercher un Collab', () => {

    cnx.SetUrl('https://app-dev.mossall.com/auth/login')
    cnx.SetEmail('input[name="email"]','genieouzog+atos@gmail.com')
    cnx.SetPassword('input[name="password"]','$Mossall123')
    cnx.ClickSubmit('.submit')
    searchcollab.ClickTableCollab('Collaborateurs')
    searchcollab.ClickAjoutCollab('00015')
  
        })   */ 
         

})