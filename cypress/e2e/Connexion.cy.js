import ConnexionMossal from "../pages/collaborateur/ConnexionPage";
import CreationMossalCollabPage from "../pages/collaborateur/CreationCollabPage";
import DetailCollabPage from "../pages/collaborateur/DetailCollabPage";
import RechercheCollab from "../pages/collaborateur/RechercheCollab";
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
    const RechercheMossalCollab=new RechercheCollab ();
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

it("Rechercher un Collab", () => {

    cnx.SetUrl('https://app-dev.mossall.com/auth/login') 
    cnx.SetEmail('input[name="email"]','genieouzog+mossallv2@gmail.com')
    cnx.SetPassword('input[name="password"]','password')
    cnx.ClickSubmit('.submit')
    RechercheMossalCollab.ClickTableCollab('Collaborateurs')
    RechercheMossalCollab.searchCollab('M00299')
    //RechercheCollab.ClickTableCollab('Collaborateurs')
   // CreationMossalCollab.ClickTableCollab('Collaborateurs')
    //RechercheCollab.searchCollab('M00299')
    
  
        }) 

//if (true) {
    it("Verifier les details d'un collaborateur", () => {
        cnx.SetUrl('https://app-dev.mossall.com/auth/login') 
        cnx.SetEmail('input[name="email"]','genieouzog+mossallv2@gmail.com')
        cnx.SetPassword('input[name="password"]','password')
        cnx.ClickSubmit('.submit')
        CreationMossalCollab.ClickTableCollab('Collaborateurs')
      
    })   
   // }

  
         

})