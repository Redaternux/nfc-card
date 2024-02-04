import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';



const CmdModal = ({closeModal}) => {


    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone_number: '',
        quantity: ''
      });

      const handleCmdChange = (e) => {
        if (e.target.name === 'image') {
          setFormData({
            ...formData,
            [e.target.name]: e.target.files[0], 
          });
        } else {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        }
      };

    const handleSubmitCmd = async (e) => {
        e.preventDefault();
        try {
            const insertData = new FormData();
      
            insertData.append('fullname', formData.fullname);
            insertData.append('description', formData.email);
            insertData.append('phone_number', formData.phone_number);
            insertData.append('name', formData.quantity);

            await axios.post('http://localhost:5000/api/user_cmd', insertData);
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
            
            <input value={formData.fullname} onChange={handleCmdChange} name='fullname' className='add-service-input' placeholder='Nom complet *' />
            <input value={formData.email} onChange={handleCmdChange} name='email' className='add-service-input' placeholder='Email *' />
            <input value={formData.phone_number} onChange={handleCmdChange} name='phone_number' className='add-service-input' placeholder='Numéro de téléphone *' />
            <input value={formData.quantity} onChange={handleCmdChange} name='quantity' className='add-service-input' placeholder='Quantité *' />

        </form>
    </div>
  )
}

export default CmdModal