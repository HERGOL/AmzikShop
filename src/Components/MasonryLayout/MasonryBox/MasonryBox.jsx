// import styles of this component
import styles from "./MasonryBox.module.css"
import { PropTypes } from 'prop-types';
// MasonryBox component
const MasonryBox = ({ wallSrc, userProf,prix}) => {
  return (
   <>
    <div className={styles["my-masonry"]}>
        <img src={wallSrc} style={{ width: "100%" }} alt="" />
        <div className={`${styles["my-masnry-description"]} flex`}>
          <div className={`${styles["my-masnry-user-box"]} flex align-items-center`}>
            <div className={styles["my-masnry-user-prof"]}>
              <img src={userProf} alt="" />
            </div>
            <div className={`${styles["my-masnry-user-prof-desc"]} flex flex-column`}>
              <h1 className={styles["text_box"]}>commander</h1>
              <h1 className={styles["price_box"]}>{prix}</h1>

            </div>
          </div>
        </div>
    </div>
    </>
  )
}

// validate MasonryBox component
MasonryBox.propTypes = {
  wallSrc: PropTypes.string.isRequired,
  userProf: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  prix: PropTypes.string.isRequired,
}

export default MasonryBox