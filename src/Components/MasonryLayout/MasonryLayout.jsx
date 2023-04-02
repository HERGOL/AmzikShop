// import styles of this component
import styles from "./MasonryLayout.module.css"

// import other react pkg to use
import Masonry from "react-masonry-css"

// import other component to use
import MasonryBox from './MasonryBox/MasonryBox';
import { Link } from "react-router-dom";

// MasonryLayout Component
const MasonryLayout = ({ images }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <>
      
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles["my-masonry-grid"]}
      columnClassName={styles["my-masonry-grid_column"]}
    > 
    {images.map(item => (
     <Link to={`/${item.user.name}`}>
        <MasonryBox 
          key={item.id} 
          wallSrc={item.src} 
          userProf={item.user.src} 
          userName={item.user.name} 
          prix={item.user.prix}
        />
       </Link>
         ))}
    </Masonry>
   
    </>
 
  )
}

export default MasonryLayout