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
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '50px auto', maxWidth: '500px' }}>
      <div className={`${styles["inputs"]} `}>
      <label className={`${styles["input-label"]} `} htmlFor="Name">Nom:</label>
      <input className={`${styles["input"]} `} type="text" id="Name" value={Name} onChange={(e) => setName(e.target.value)} style={{ border: 'none', borderBottom: '2px solid #ccc', padding: '10px', marginBottom: '20px', width: '100%', fontSize: '16px' }} required />

      <label className={`${styles["input-label"]} `} htmlFor="firstname">Prénom:</label>
      <input className={`${styles["input"]} `} type="text" id="firstname" value={firstname} onChange={(e) => setfirstname(e.target.value)} style={{ border: 'none', borderBottom: '2px solid #ccc', padding: '10px', marginBottom: '20px', width: '100%', fontSize: '16px' }}required />

      <label className={`${styles["input-label"]} `} htmlFor="phoneNumber">Numéro de téléphone</label>
      <input className={`${styles["input"]} `} type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={{ border: 'none', borderBottom: '2px solid #ccc', padding: '10px', marginBottom: '20px', width: '100%', fontSize: '16px' }} required/>

    
     <label className={`${styles["input-label"]} `} htmlFor="email">Adresse e-mail</label>
      <input className={`${styles["input"]} `} type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    </div>

    <label htmlFor="size">Taille</label>
      <select className={`${styles["input"]} `} id="size" value={size} onChange={(e) => setSize(e.target.value)} style={{ border: 'none', borderBottom: '2px solid #ccc', padding: '10px', marginBottom: '20px', width: '100%', fontSize: '16px' }} required>
        <option value="">Sélectionnez une taille</option>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
      </select>



      <button type="submit" className={`${styles["botton"]} flex`}>Passer la commande</button>
    </form>
  );
};

export default OrderForm;