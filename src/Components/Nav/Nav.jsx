// import styles of this component
import styles from "./Nav.module.css"


// Nav component
const Nav = () => {
  return (
    <nav className={`${styles.nav} flex align-items-center`}>
        <h1 className={styles["nav-title"]}>Amzik Shop</h1>
    </nav>
  )
}

export default Nav