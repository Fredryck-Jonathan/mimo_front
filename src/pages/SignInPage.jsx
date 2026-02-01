import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

//import {data_inscription_createur, data_inscription_benevole } from "../data/data-form"

function SignIn() {
    
    const [type, setType]= useState(false);

    
    useEffect(() => {


        console.log()


    }, []);


    const submitBenevole = () => {

        console.log("Benevole Bonjour")

        
    }


    const submitCreateur = () => {

        console.log(data_inscription_createur, data_inscription_benevole)

    }



    
    return(

        <main className="signin-page">

                <h1>S'inscrire</h1>

                <div className="signin-page__button">

                    <button onClick={(e) => {setType(true)}}>Benevole</button>

                    <button onClick={(e) => {setType(false)}}>Créateur de mission</button>


                </div>




            {type ? (

                <form onSubmit={(e) => {submitBenevole()}} className="">

                    <div className="input-div">
                        <label htmlFor="nom">Nom</label>
                        <p className="error-input"></p>
                        <input id="nom" type="text" />
                    </div>

                    <div className="input-div">
                        <label htmlFor="nom">Prenom</label>
                        <p className="error-input"></p>
                        <input id="prenom" type="text" />
                    </div>

                    <div className="input-div">
                        <label htmlFor="pseudo">Pseudo</label>
                        <p className="error-input"></p>
                        <input id="pseudo" type="text" />
                    </div>

                    <div className="input-div">
                        <label htmlFor="entreprise/association">Entreprise/Association</label>
                        <p className="error-input"></p>
                        <input id="entreprise/association" type="text" />
                    </div>



                    <div className="input-div">
                        <label htmlFor="naissance">Date de naissance</label>
                        <p className="error-input"></p>
                        <input id="naissance" type="date" />
                    </div>

                    <div className="input-div">
                        <label htmlFor="photo">Photo</label>
                        <p className="error-input"></p>
                        <input id="photo" type="file" />
                    </div>


                    <div className="input-div">
                        <label htmlFor="localisation">Localisation</label>
                        <p className="error-input"></p>
                        <input id="localisation" type="text" />
                    </div>

                    <div className="input-div">
                        <label htmlFor="mail">Mail</label>
                        <p className="error-input"></p>
                        <input id="mail" type="mail" />
                    </div>


                    <div className="input-div">
                        <label htmlFor="password">Mots de passe</label>
                        <p className="error-input"></p>
                        <input id="password" type="password" />
                    </div>



                    <div className="input-div">
                        <label htmlFor="verifpassword">Confirmation du mots de passe</label>
                        <p className="error-input"></p>
                        <input id="verifpassword" type="password" />
                    </div>

                    <button type="submit">Envoyer</button>

                </form>



            ) : (


                <form onSubmit={(e) => {submitCreateur()}} className="">

                    <div className="input-div">
                        <label htmlFor="nom">Nom</label>
                        <p className="error-input"></p>
                        <input id="nom" type="text" />
                    </div>

                    <div className="input-div">
                        <label htmlFor="nom">Prenom</label>
                        <p className="error-input"></p>
                        <input id="prenom" type="text" />
                    </div>

                    <div className="input-div">
                        <label htmlFor="pseudo">Pseudo</label>
                        <p className="error-input"></p>
                        <input id="pseudo" type="text" />
                    </div>

                    <div className="input-div">
                        <label htmlFor="entreprise/association">Entreprise/Association</label>
                        <p className="error-input"></p>
                        <input id="entreprise/association" type="text" />
                    </div>



                    <div className="input-div">
                        <label htmlFor="naissance">Date de naissance</label>
                        <p className="error-input"></p>
                        <input id="naissance" type="date" />
                    </div>



                    <div className="input-div">
                        <label htmlFor="localisation">Localisation</label>
                        <p className="error-input"></p>
                        <input id="localisation" type="text" />
                    </div>

                    <div className="input-div">
                        <label htmlFor="mail">Mail</label>
                        <p className="error-input"></p>
                        <input id="mail" type="mail" />
                    </div>


                    <div className="input-div">
                        <label htmlFor="password">Mots de passe</label>
                        <p className="error-input"></p>
                        <input id="password" type="password" />
                    </div>


                    <div className="input-div">
                        <label htmlFor="photo">Photo</label>
                        <p className="error-input"></p>
                        <input id="photo" type="file" />
                    </div>


                    <div className="input-div">
                        <label htmlFor="verifpassword">Confirmation du mots de passe</label>
                        <p className="error-input"></p>
                        <input id="verifpassword" type="password" />
                    </div>

                    <button type="submit">Envoyer</button>

                </form>




            )
        }



        </main>

    )
}

export default SignIn