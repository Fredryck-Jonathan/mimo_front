import { useState } from "react";

function ModalMission(props){

     const [state, setState] = useState(1);

     const data = props.data[props.index];

    console.log(props.data, props.index, data)

    function buttonSelectedFunction(e) {
        e.preventDefault();
        console.log(e.currentTarget);
        const allButton = document.querySelectorAll('.modal-mission__button');

        allButton.forEach(element => {
            element.classList.remove("selected");
        });

        e.currentTarget.classList.add('selected');


    }


    function submitButton(){

        //setState(2)

        const selected = document.querySelectorAll('.selected');

        if(!selected[0]){
            alert("Veuillez sélectionner un créneau")
            return false

        }

        const id = selected[0].getAttribute('data-id');

        console.log(data.creneaux)

        const creneau = data.creneaux.find((c) => c.id === Number(id));

        console.log(creneau, data, props.userData);

        const new_data = {
            id: data.id,
            etat: "Confirmée",
            etat_class: "confirmee",
            titre: data.titre,
            creneaux: creneau
        }

        const newMission = props.userData.mission;
        newMission.push(new_data)

        const newUserData = {
            ...props.userData,
            mission: newMission
        }

        props.setUserData(newUserData)

        console.log(new_data, newUserData)

        setState(2);

    }




    if(state == 1){


        return(

        

        <div className={`modal-mission ${props.modalIsOpen ? "active" : ""}`}>



            <button className="modal-mission__button-return" onClick={(e) => { props.setModalIsOpen(false); const selected = document.querySelectorAll('.selected'); selected[0].classList.remove('selected');}}>

                <ion-icon name="arrow-back-outline"></ion-icon>
                <p>Return</p>

            </button>

            <div className="modal-mission__first-part">

                <div className="modal-mission__bg">
                    <img src="https://picsum.photos/700/300" alt="" />
                </div>

                <div className="modal-mission__avatar">
                    <img src="https://picsum.photos/400/400" alt="" />
                </div>


                <p className="modal-mission__titre">{data.titre}</p>

                
            </div>


            <div className="modal-mission__infos-mission">

                <div className="modal-mission__one-info">
                    <ion-icon name="person-outline"></ion-icon>
                    <p>{data.utilisateur.prenom}, 78 ans</p>
                </div>

                <div className="modal-mission__one-info">
                    <ion-icon name="location-outline"></ion-icon>
                    <p>{data.lieu}</p>
                </div>

                <div className="modal-mission__one-info">
                    <ion-icon name="stopwatch-outline"></ion-icon>
                    <p>{data.duree}h</p>
                </div>

                <div className="modal-mission__one-info">
                    <ion-icon name="trophy-outline"></ion-icon>
                    <p>+ {data.points} points</p>
                </div>



            </div>


            <p className="modal-mission__description">{data.description}</p>


            <div className="modal-mission__creneaux">

                <div className="modal-mission__creneaux-titre">
                    <ion-icon name="calendar-outline"></ion-icon>
                    <p>Créneaux disponibles</p>
                </div>

                <div className="modal-mission__all-creneaux">

                    {data.creneaux.map((item, index) => (

                        <button key={index} data-id={item.id} onClick={(e) => {buttonSelectedFunction(e)}} className="modal-mission__button" disabled={item.place?.libre === 0}>

                            <div className="modal-mission__button-date">
                                <p >{item.date}</p>
                                <ion-icon name="checkmark-outline"></ion-icon>

                            </div>
                            

                            <div className="modal-mission__button-horaire">
                                <ion-icon name="time-outline"></ion-icon>
                                <p>{item.heure}h - {item.heure + data.duree}h</p>
                            </div>

                            <p className={`modal-mission__button-place ${!item.place.libre ? "completed" : ""}`}>{!item.place.libre ? "Complet" : `${item.place?.libre} / ${item.place?.total} place`}</p>

                        </button>




                    ))}

                </div>



            </div>

                

            <button onClick={(e) => {submitButton()}} className="submitButton">
                <p>J'y vais !</p>
                <ion-icon name="checkmark-outline"></ion-icon>
            </button>





        </div>


    )


    } else {

        return(

            <div className={`modal-mission__finish ${props.modalIsOpen ? "active" : ""}`}>

                <h3 className="modal-mission__finish-title">Demande envoyée !</h3>

                <p>{data.utilisateur.prenom} va recevoir votre demande et vous répondra sous peu.</p>

                <p className="grey">Nous vous préviendrons dès qu'elle aura validé votre participation.</p>

                <button onClick={(e) => {e.preventDefault(); props.setModalIsOpen(false), setState(1)}} className="modal-mission__button-continue">Continuer</button>

            </div>




        )




    }

    


}

export default ModalMission