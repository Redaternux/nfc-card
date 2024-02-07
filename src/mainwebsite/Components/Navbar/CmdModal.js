import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { post } from '../../../http/api';
import logoDelivery from './logistics-delivery.png'



const CmdModal = ({closeModal}) => {


    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone_number: '',
        quantity: ''
      });

      const [selectedQuantity, setSelectedQuantity] = useState('1');


    //   const handleCmdChange = (e) => {
    //     if (e.target.name === 'image') {
    //       setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.files[0], 
    //       });
    //     } else {
    //       setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value,
    //       });
    //     }
    //   };

      const handleCmdChange = (e) => {

        const { name, value } = e.target;

        if (name === 'quantity' && !(/^\d+$/.test(value))) {
        return; // Do not update state if not a number
        }

        // // 2. Validate the phone number format for Morocco
        // if (name === 'phone_number' && !/^\+212[0-9]{9}$/.test(value)) {
        // return; // Do not update state if not a valid Moroccan phone number
        // }
        
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      

    const handleSubmitCmd = async (e) => {
        e.preventDefault();
        try {
            const insertData = new FormData();
      
            insertData.append('fullname', formData.fullname);
            insertData.append('email', formData.email);
            insertData.append('phone_number', formData.phone_number);
            insertData.append('quantity', String(selectedQuantity));

            const formDataCopy = { ...formData, quantity: String(selectedQuantity) };

            await axios.post('http://localhost:5000/api/cmds', formDataCopy);
            // setMessage(true)

            setFormData({
                fullname: '',
                email: '',
                phone_number: '',
                quantity: ''
            });
            toast.success("Merci pour votre commande")
          } catch (error) {
            console.log(error);
          }
    }



  return (
    <div className='services-modal-container'>
        <form onSubmit={handleSubmitCmd} className='full-screen-services-modal'>             
            <div className='flexed-services-buttons'>
                <button className='add-service-button'>
                    Commander
                </button>
                <button onClick={closeModal} className='cancel-service-button'>
                    Fermer
                </button>
            </div>

            <ToastContainer/>

            {/* <div className='thanks_cmd'>
                {message && <ToastContainer/>}
            </div> */}
            
            <input value={formData.fullname} onChange={handleCmdChange} name='fullname' className='add-service-input' placeholder='Nom complet *' required />
            <input value={formData.email} onChange={handleCmdChange} name='email' className='add-service-input' placeholder='Email *' type='email' required />
            <input value={formData.phone_number} onChange={handleCmdChange} pattern='^0[0-9]{9}$'  title='Exemple - 0605002300' name='phone_number' className='add-service-input' placeholder='Numéro de téléphone *' required />
            {/* <input value={formData.quantity} onChange={handleCmdChange} name='quantity' className='add-service-input' placeholder='Quantité *' required /> */}
            <select value={selectedQuantity} onChange={(e) => setSelectedQuantity(e.target.value)} name='quantity' className='add-service-input' required>
                {[1, 2, 3, 4, 5].map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>

            <div style={{ display:'flex', justifyContent:'center', color:'black', fontWeight:'bold', fontSize:'18px', marginTop: '10px' }}>
                <img src={logoDelivery} alt="" width={30}/> &nbsp; &nbsp;  Livraison gratuite partout au Maroc 
            </div>

        </form>
    </div>
  )
}

export default CmdModal