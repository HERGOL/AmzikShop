// import styles of this component
import styles from "./Header.module.css"

// import other components
import ContainerCard from '../ContainerCard/ContainerCard';
import Nav from "../Nav/Nav"
import BrickLayout from "../Background/Background";

// Header component
const Header = () => {
  return (
    <header className={`${styles.header} flex justify-content-center`}>
        <ContainerCard className="flex flex-column">
          <div className={styles["blur-circle-shape"]}></div>

          <Nav />
          <BrickLayout />
          
          <div className={`${styles["headings-header"]} flex justify-content-center flex-column `}>
            <h2 className={styles["heading-header-title"]}>Rejoignez le mouvement Amzik dès maintenant !</h2>
            <div className={`${styles["main_text"]}`}>
             <h1 className={styles["heading-header-second-title"]}>
             Bénéficiez du service précommande<br /> de la marque <span>AMZIK SHOP</span> <br /> soyez les premiers à recevoir nos produits <br />dès la sortie de la nouvelle collection <br />
             </h1>
            </div>
          </div>
        </ContainerCard>
    </header>
  )
}

export default Header