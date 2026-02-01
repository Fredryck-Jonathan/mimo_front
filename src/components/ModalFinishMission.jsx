import { useState } from "react"

function ModalFinishMission(props){

    const [state, setState] = useState(1);

    console.log(props)

    function submitButton(e){

        e.preventDefault();
        const confirmationCheck = document.getElementById('check_confirmation')
        if(!confirmationCheck.checked){

            alert("Veuillez confirmer avoir réalisé cette mission dans son intégralité")

        } else {
            console.log("check")
        }

    }


    console.log(props)



    return(

        <div className={`modal-finish${props.modalMesMissionIsOpen ? " active" : ""}`}>

            {state ? (

            <div className="modal-finish__first-state">

                <button className="modal-finish__button-return" onClick={(e) => {props.setModalMesMissionIsOpen(false)}}>

                    <ion-icon name="arrow-back-outline"></ion-icon>
                    <p>Return</p>

                </button>

                <div className="modal-finish__recap">

                    <h2>Mission terminée !</h2>

                    <p>Comment s'est passée cette mission ?</p>

                    <div className="modal-finish__first-recap">

                        <div className="modal-finish__first-recap-1">
                            <div className="modal-finish__first-recap-img">
                                <img src="https://picsum.photos/200/300" alt="" />
                            </div>

                            <div className="modal-finish__first-recap-text">
                                <p className="modal-finish__first-recap-text-1">balade</p>
                                <p className="modal-finish__first-recap-text-2">avec Andrée</p>  
                            </div>
 
                        </div>

                        <p className="modal-finish__first-recap-date">Lundi 03/02 - 14h - 15h</p>

                    </div>


                    <div className="modal-finish__recap-mot">

                        <p>Un mot pour Andrée ? (optionnel)</p>

                        <textarea type="text" placeholder="Partage ton ressenti sur cette mission..." />

                    </div>

                    <div className="modal-finish__recap-confirmation">
                        <input id="check_confirmation" type="checkbox" />
                        <label htmlFor="check_confirmation">Je confirme avoir réalisé cette mission dans don intégralité</label>

                    </div>


                    <button className="modal-finish__recap-submit" onClick={(e) => (submitButton(e))}>Note ta mission</button>


                </div>


            </div>
            




            ) : (


                <div></div>



            )}




        </div>

    )


}

export default ModalFinishMission