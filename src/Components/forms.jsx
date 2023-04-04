import React, { useState , useEffect } from 'react';
import styles from "./forms.module.css"
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Swal from 'sweetalert2';

const firebaseConfig = {
  apiKey: "AIzaSyCtcbTIJjjkRJN6r7RYdcgu1SfisQTAmzU",
  authDomain: "amzikshop.firebaseapp.com",
  projectId: "amzikshop",
  storageBucket: "amzikshop.appspot.com",
  messagingSenderId: "669486071522",
  appId: "1:669486071522:web:d770b5994af252ba52e8bb"
};
initializeApp(firebaseConfig);

const OrderForm = () => {
  const [Name, setName] = useState('');
  const[firstname,setfirstname]=useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [size, setSize] = useState(''); 
  const [pathname, setPathname] = useState('');
  const [color, setColor] = useState('');
const [type, setType] = useState('');
const [imageSrc, setImageSrc] = useState('');
const [css,setCss] =useState('');
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  useEffect(() => {
    setImageSrc(require(`../Assets/img${pathname}.jpg`));
  }, [pathname]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, {
      Name,
      firstname,
      phoneNumber,
      email,
      type,
      size,
      color,
      timestamp: serverTimestamp(),
      collectionID: {pathname},
    }).then((docRef) => {
      console.log('Data successfully saved:', docRef.id);
      Swal.fire(
        'Votre commande a été traitée!',
        "notre équipe travaille dur pour la préparer et vous l'envoyer dès que possible.",
        'success'
      );
    }).catch((error) => {
      console.log(error);
    });
    // Reset the form after submitting the order
    setName('');
    setfirstname('');
    setPhoneNumber('');
    setEmail('');
    setSize('');
    setColor('');
    setCss('');
  };

  return (
      <div className={styles.container}>
        <h1 className={styles.headertext}>Confirmation de commande</h1>
        <p className={styles.subtitle}>Vérifiez que toutes les informations sont correctes avant de passer votre commande.</p>
        <img className={styles.image} src={imageSrc}/>
        <h1 className={styles.price}>Prix:</h1>
  
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
              <label htmlFor="firstname" className={styles.label}>Prénom</label>
              <input type="text" id="firstname" value={firstname} onChange={(e) => setfirstname(e.target.value)} className={`${styles.input} ${styles.firstName}`} required />
          </div>
          <div className={styles.inputGroup}>
              <label htmlFor="Name" className={styles.label}>Nom</label>
              <input type="text" id="Name" value={Name} onChange={(e) => setName(e.target.value)} className={`${styles.input} ${styles.lastName}`} required />
          </div>
  
          <div className={styles.inputGroup}>
            <label htmlFor="phoneNumber" className={styles.label}>Numéro de téléphone</label>
            <input type="number" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className={styles.input} required />
          </div>
  
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Adresse e-mail</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} required />
          </div>
  
          <div className={styles.inputGroup}>
            <label htmlFor="size" className={styles.label}>Taille</label>
            <select id="size" value={size} onChange={(e) => setSize(e.target.value)} className={styles.select}required >
              <option value="">Sélectionnez une taille</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="type" className={styles.label}>Type</label>
            <select id="type" value={type} onChange={(e) => setType(e.target.value)} className={styles.select}required >
              <option value="">Sélectionnez le type</option>
              <option value="Basic">Basic</option>
              <option value="Over-Size">Over-Size</option>
              </select>
              </div>

          <div className={styles.inputGroup}>
           <label htmlFor="color" className={styles.label}>Couleur: <span style={{ color: `${css}`, fontSize: "20px"}}>{color}</span></label>
          <div className={styles.colorButtons} required>
          {type === "Basic" && (
            <>
             <button type="button"
             className={`${styles.WhiteButton}`} 
             onClick={() => {setColor("Blanc"); setCss("#454545")}}
           >
             Blanc
           </button>
                      <button type="button"
                        className={styles.BlackButton}
                        onClick={() => {setColor("Noir"); setCss("#111")}}
                      > 
                        Noir
                      </button>
                      <button type="button"
                        className={`${styles.BeigeButton}`} 
                        onClick={() =>{setColor("Beige"); setCss("#FFA559")}}
                      >
                        Beige
                      </button>
                      <button type="button"
                        className={`${styles.GreenButton} ${color === "Vert" ? styles.active : "Vert"}`} 
                        onClick={() => {setColor("Vert");setCss("#00FF00")}}
                      >
                        Vert
                      </button>
                      <button type="button"  
                        className={`${styles.YellowButton} ${color === "Jaune" ? styles.active : "Jaune"}`} 
                        onClick={() => {setColor("Jaune"); setCss("#FFBF00")}}
                      >
                        Jaune
                      </button>
                      <button type="button"
                        className={`${styles.RedButton}`}
                        onClick={() =>{setColor("Rouge"); setCss("#FF0000")}}
                      >
                        Rouge
                      </button>
                      <button type="button" className={`${styles.BlueButton} ${color === "Blue" ? styles.active : ""}`} 
                        onClick={() => {setColor("Blue"); setCss("#0000FF")}}
                      >
                        Blue
                      </button>
                      </>
           )}
             {type === "Over-Size" && (
    <>
      <button
        type="button"
        className={`${styles.WhiteButton} ${
          color === "Blanc" ? styles.active : ""
        }`}
        onClick={() => {setColor("Blanc"); setCss("#454545")}}
      >
        Blanc
      </button>
      <button type="button"
                        className={`${styles.BlackButton} ${color === "Noir" ? styles.active : "Noir"}`} 
                        onClick={() => {setColor("Noir"); setCss("#111")}}
                      > 
                        Noir
                      </button>
    </>
  )}

         
        </div>
        </div>
        <div className={styles.price}>Prix:</div>
  
          <button type="submit" className={styles.submitButton}>Passer la commande</button>
        </form>
      </div>
    );
  };
  

export default OrderForm;