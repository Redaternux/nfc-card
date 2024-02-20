import React from 'react'
import './ContactSection.css'
import { FaEnvelope, FaPhone, FaAddressCard } from 'react-icons/fa'
import { Footer } from 'antd/es/layout/layout'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios'


const ContactSection = () => {

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        message: ''
      });

      const cl = () => {
        console.log(formData)
      }

    const handleContactChange = (e) => {

        const { name, value } = e.target;
        
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      

    const handleSubmitContact = async (e) => {
        e.preventDefault();
        try {
            const insertData = new FormData();
      
            insertData.append('fullname', formData.fullname);
            insertData.append('email', formData.email);
            insertData.append('message', formData.message);


            await axios.post('http://localhost:5000/api/contact', formData);
            setFormData({
                fullname: '',
                email: '',
                message: '',
            });
            toast.success(" Votre message a été bien envoyé ")
          } catch (error) {
            console.log(error);
          }
    }

  return (
    <div className='wb-contact-container' id='sixth-div'>
        <ToastContainer/>
        <div className="wb-contact-content">
            <div className="wb-contact-left-side">
                <div className="wb-contact-address wb-contact-details">
                <FaAddressCard size={30} />
                <div className="wb-contact-topic">Addresse</div>
                <div className="wb-contact-text-one"> Maroc </div>
                <div className="wb-contact-text-two"> Mohammedia </div>
                </div>
                <div className="wb-contact-phone wb-contact-details">
                <FaPhone size={30} />
                <div className="wb-contact-topic">Télephone</div>
                <div className="wb-contact-text-one">+212 648 016 115</div>
                {/* <div className="wb-contact-text-two">+212 932 146 678</div> */}
                </div>
                <div className="wb-contact-email wb-contact-details">
                <FaEnvelope size={30} />
                <div className="wb-contact-topic">Email</div>
                <div className="wb-contact-text-one">smart21card@gmail.com</div>
                {/* <div className="wb-contact-text-two">info.codinglab@gmail.com</div> */}
                </div>
            </div>
            <div className="wb-contact-right-side">
                <div className="wb-contact-topic-text">Nous contacter</div> <br/>
                <form onSubmit={handleSubmitContact}>
                    <div className="wb-contact-input-box">
                        <input onChange={handleContactChange} required name='fullname' value={formData.fullname} type="text" placeholder="Entrez votre nom complet"/>
                    </div>
                    <div className="wb-contact-input-box">
                        <input onChange={handleContactChange} required name='email' value={formData.email} type="email" placeholder="Entrez votre email"/>
                    </div>
                    <div className="wb-contact-input-box message-box">
                        <textarea onChange={handleContactChange} required name='message' value={formData.message} placeholder='Message'></textarea>
                    </div>
                    <div className="wb-contact-button">
                        <input onClick={cl} type="submit" value="Envoyer"/>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default ContactSection