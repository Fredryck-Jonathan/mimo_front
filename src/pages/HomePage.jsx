import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import dataUser from "../data/data-user";
import dataMission from "../data/data-mission";
import dataMesMission from "../data/data-mes-mission";

import CardMission from "../components/CardMission";

import ModalInscriptionMission from "../components/ModalInscriptionMission";
import ModalFinishMission from "../components/ModalFinishMission";
import CardMesMission from "../components/CardMesMission";

function Home() {
    
    const [connected, setConnected]= useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [missionSelected, setMissionSelected] = useState(0);
    
    const [userData, setUserData] = useState(undefined)

    const [modalMesMissionIsOpen, setModalMesMissionIsOpen] = useState(false);
    const [mesMissionSelected, setMesMissionSelected] = useState(0);


    useEffect(() => {

        console.log(dataUser)
        setUserData(dataUser)
        console.log(userData)

    }, [])

    
    return(

        <main className="home-page" >

            { connected ? (

                <div className={`home-page__connect ${modalIsOpen ? "no-scroll" : ""}`}>

                    <div className="home-page__logo">
                        <h1>MIMO</h1>
                    </div>

                    <p className="home-page__hello">Bonjour {dataUser.prenom} ! </p>


                    <div className="home-page__dashboard">

                            <div className="home-page__dashboard-element">


                                    <div className="home-page__dashboard-element-content">
                                        <p>{dataUser.point}</p>
                                        <p>points</p>    
                                        
                                    </div>

                            </div>

                            <div className="home-page__dashboard-element">

                                    <div className="home-page__dashboard-element-content">
                                        <p>{dataUser.badge}</p>
                                        <p>Badge</p>    
                                    </div>

                            </div>




                    </div>

                    {
                        userData?.mission?.length > 0 && (

                            <section className="home-page__mes-missions">

                            <h3 className="home-page__mes-missions-title">Mes missions</h3>

                            <div className="home-page__mes-missions-gallery">

                                {userData?.mission.map((item, index) => (

                                    <CardMesMission key={index}  data={item} setModalMesMissionIsOpen={setModalMesMissionIsOpen} setMesMissionSelected={setMesMissionSelected} number={index} ></CardMesMission>

                                ))}

                            </div>


                        </section>



                        )



                    }

                    


                    <section className="home-page__missions-section">

                        <p className="home-page__missions-title">Missions près de toi</p>

                        <div className="home-page__missions-gallery">

                            {
                                dataMission.map((element, index ) => (

                                    <CardMission setModalIsOpen={setModalIsOpen} setMissionSelected={setMissionSelected} numberMission={index} key={index} data={element}></CardMission>

                                ))
                            }

                        </div>



                    </section>

                        
                    <ModalInscriptionMission userData={userData} setUserData={setUserData} index={missionSelected} setModalIsOpen={setModalIsOpen} data={dataMission}  modalIsOpen={modalIsOpen}></ModalInscriptionMission>

                    <ModalFinishMission index={mesMissionSelected} setModalMesMissionIsOpen={setModalMesMissionIsOpen} data={dataMesMission}  modalMesMissionIsOpen={modalMesMissionIsOpen} ></ModalFinishMission>


                </div>



            ) : (

                <div className="home-page__auth">

                        <NavLink to='/login'>Se Connecter</NavLink>
                        <NavLink to='/signin'>S'inscrire</NavLink>

                </div>


            )

            }




        </main>

    )
}

export default Home