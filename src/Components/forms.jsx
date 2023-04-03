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

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, {
      Name,
      firstname,
      phoneNumber,
      email,
      size,
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
  };

  return (
      <div className={styles.container}>
        <h1>Confirmation de commande</h1>
        <p className={styles.subtitle}>Vérifiez que toutes les informations sont correctes avant de passer votre commande.</p>
  
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
              <label htmlFor="firstname" className={styles.label}>Prénom</label>
              <input type="text" id="firstname" value={firstname} onChange={(e) => setfirstname(e.target.value)} className={`${styles.input} ${styles.firstName}`} />
          </div>
          <div className={styles.inputGroup}>
              <label htmlFor="Name" className={styles.label}>Nom</label>
              <input type="text" id="Name" value={Name} onChange={(e) => setName(e.target.value)} className={`${styles.input} ${styles.lastName}`} />
          </div>
  
          <div className={styles.inputGroup}>
            <label htmlFor="phoneNumber" className={styles.label}>Numéro de téléphone</label>
            <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className={styles.input} />
          </div>
  
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Adresse e-mail</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} />
          </div>
  
          <div className={styles.inputGroup}>
            <label htmlFor="size" className={styles.label}>Taille</label>
            <select id="size" value={size} onChange={(e) => setSize(e.target.value)} className={styles.select}>
              <option value="">Sélectionnez une taille</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
          </div>
  
          <button type="submit" className={styles.submitButton}>Passer la commande</button>
        </form>
      </div>
    );
  };
  

export default OrderForm;