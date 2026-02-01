function Footer(){

    return(

        <footer className="footer">

            <button className="footer__button active">

                <ion-icon name="home-outline"></ion-icon>
                <p>Accueil</p>

            </button>

            <button className="footer__button">

                <ion-icon name="gift-outline"></ion-icon>
                <p>Récompenses</p>

            </button>

            <button className="footer__button">

                <ion-icon name="person-outline"></ion-icon>
                <p>Profil</p>

            </button>

        </footer>


    )


}

export default Footer