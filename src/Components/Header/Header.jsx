// import styles of this component
import styles from "./Header.module.css"

// import other components
import ContainerCard from '../ContainerCard/ContainerCard';
import Nav from "../Nav/Nav"
import BrickLayout from "../BrickLayout/BrickLayout";

// Header component
const Header = () => {
  return (
    <header className={`${styles.header} flex justify-content-center`}>
        <ContainerCard className="flex flex-column">
          <div className={styles["blur-circle-shape"]}></div>

          <Nav />
          <BrickLayout />
          
          <div className={`${styles["headings-header"]} flex justify-content-center flex-column `}>
            <h2 className={styles["heading-header-title"]}>Rejoignez le mouvement Amzik dès maintenant !!!</h2>
            <h1 className={styles["heading-header-second-title"]}>
            précommander les vêtements <br />
            <span>Amzik </span>dès maintenant et être parmi les premiers<br /> à les recevoir lorsque la collection sera disponible.
            </h1>
          </div>
        </ContainerCard>
    </header>
  )
}

export default Header