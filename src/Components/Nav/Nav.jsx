// import styles of this component
import styles from "./Nav.module.css"
import  "./LOGO.svg"
import "./logo.png"


// Nav component
const Nav = () => {
  return (
    <nav className={`${styles.nav} flex align-items-center`}>
      <img src="https://res.cloudinary.com/dmq21zp6g/image/upload/v1680479902/LOGO_dbbxma.svg/logo.png"/> 
    </nav>
  )
}

export default Nav