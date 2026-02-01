function CardMission(props){

    console.log(props.data)
    const data = props.data;

    function clickFunction(){

        props.setModalIsOpen(true);
        props.setMissionSelected(props.numberMission);

    }



    return(

        <button onClick={() => {clickFunction()}} className="card-mission">
        
            <div className="card-mission__icon"></div>

            <h3 className="card-mission__title">{data.titre}</h3>

            <div className="card-mission__utilisateur">

                <div className="card-mission__utilisateur-img">
                    <img src={`https://picsum.photos/id/1/200/300`} alt="" />
                </div>

                <p className="card-mission__utilisateur-name">{data.utilisateur.prenom}</p>

            </div>

            <p className="card-mission__lieu">{data.lieu}</p>

            <p className="card-mission__points">{"+ " + data.points + " pts"}</p>


        
        </button>

    )


}

export default CardMission