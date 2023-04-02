import styles from "./Background.module.css"

const BrickLayout = () => {
  return (
    <div className={styles["brick-layout"]}>
      <div className={styles["brick-column"]}>
        <img src="https://res.cloudinary.com/dmq21zp6g/image/upload/c_scale,h_549,q_80/1_bimnkm.jpg" alt="" />
        <img src="https://res.cloudinary.com/dmq21zp6g/image/upload/c_scale,h_549,q_80/3_twn5fk.jpg" alt="" />
        <img src="https://res.cloudinary.com/dmq21zp6g/image/upload/c_scale,h_549,q_80/6_nmjbqv.jpg" alt="" />
      </div>
      <div className={styles["brick-column"]}>
        <img src="https://res.cloudinary.com/dmq21zp6g/image/upload/c_scale,h_549,q_80/4_fgqgom.jpg" alt="" />
        <img src="https://res.cloudinary.com/dmq21zp6g/image/upload/c_scale,h_549,q_80/12_bmli57.jpg" alt="" />
        
      </div>
      <div className={styles["brick-column"]}>
        <img src="https://res.cloudinary.com/dmq21zp6g/image/upload/c_scale,h_549,q_80/9_e9tf4g.jpg" alt="" />
        <img src="https://res.cloudinary.com/dmq21zp6g/image/upload/c_scale,h_549,q_80/13_cjmod7.jpg" alt="" />
        <img src="https://res.cloudinary.com/dmq21zp6g/image/upload/c_scale,h_549,q_80/14_zz8usc.jpg" alt="" />
      </div>
    </div>
  )
}

export default BrickLayout