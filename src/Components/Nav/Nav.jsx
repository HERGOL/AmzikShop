// import styles of this component
import styles from "./Nav.module.css"
import  "./LOGO.svg"
import "./logo.png"


// Nav component
const Nav = () => {
  return (
    <nav className={`${styles.nav} flex align-items-center`}>
      <img src="https://res.cloudinary.com/dospfkcxd/image/upload/v1680481499/LOGO_fqencf.svg"/> 
    </nav>
  )
}

export default Nav