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
            <h2 className={styles["heading-header-title"]}>Bienvenue dans AmZik Shop!</h2>
           
             <h1 className={styles["heading-header-second-title"]}>
             Soyez les premiers<br />à porter la collection t-shirts  <span>AMZIK.</span></h1>
           <h1 className={styles["heading-header-second-title1"]}>Passez votre commande et recevez <br />nos produits en exclusivité.</h1>

          <svg className={styles["arow"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M7 10l5 5 5-5z"/>
          </svg>

          </div>
        </ContainerCard>
    </header> 
  )
}

export default Header