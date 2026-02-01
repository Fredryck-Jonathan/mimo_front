import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"

//import Helper from "../helpers/helper"


function Login() {
    
    const [benevole, setType]= useState(false);
    const [error, setError] = useState({})

    const mailRef = useRef(null);
    const passwordRef = useRef(null);
    
    useEffect(() => {

    }, [])


    /*function submitLogin(){

        if(Helper.verifMail(mailRef.current.value, setError) && Helper.verifPassword(passwordRef.current.value, setError)) {

              

        }




    }*/


    
    return(

        <main className="login-page">

                <h1>Se Connecter</h1>

                <div className="login-page__button">

                    <button onClick={(e) => {setType(false)}}>Benevole</button>

                    <button onClick={(e) => {setType(true)}}>Créateur de mission</button>


                </div>

                <form onSubmit={(e) => {e.preventDefault(); submitLogin(e)}}>

                    <div className="input-div">
                        <label htmlFor="mail">Mail</label>
                        <p className="error-input">{error.mail}</p>
                        <input ref={mailRef} id="mail" type="text" required />
                    </div>


                    <div className="input-div">
                        <label htmlFor="verifpassword">Mots de passe</label>
                        <p className="error-input">{error.password}</p>
                        <input ref={passwordRef} id="verifpassword" type="password" required  />

                    </div>

                    <button type="submit">Envoyer</button>


                </form>


        </main>

    )
}

export default Login