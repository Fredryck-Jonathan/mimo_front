function CardMesMission(props){

    console.log(props.data)



    return(

        <div className={`card-mes-mission ${props.data.etat_class}`}>


            <div className="card-mes-mission__state">

                <ion-icon name={props.data.etat_class === "confirmee" ? "checkmark-outline" : "hourglass-outline"}  ></ion-icon>

                <p>{props.data.etat}</p>


            </div>


            
            <h3 className="card-mes-mission__title">{props.data.titre}</h3>
            <p className="card-mes-mission__date">{props.data.date}</p>


            <button className="card-mes-mission__button" disabled={props.data.etat_class !== "confirmee"}  onClick={(e) => {e.preventDefault(); props.setModalMesMissionIsOpen(true); props.setMesMssionSelected(props.number);} }>Terminé la mission</button>

        </div>



    )

}

export default CardMesMission