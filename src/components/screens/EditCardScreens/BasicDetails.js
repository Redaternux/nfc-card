import React from 'react'
import "./Edition.css"
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { getImage, get } from '../../../http/api';
import { useLocation, useParams } from 'react-router-dom';
import noImgSs from '../../../no-image.png'
import axios from 'axios';
import { toast } from 'react-toastify';



const BasicDetails = ({ handleEditInputChange, handleHideEditCard, id_card}) => {

    // const [file, setFile] = useState("");
    const [imageUrl, setImageUrl] = useState('');
    const [file, setFile] = useState("");
    const [userData, setUserData] = useState({})
    const [editedCard, setEditedCard] = useState({})


    const location = useLocation();


    const handleValueChange = (e) => {
        if (e.target.name === "photo") {
          const selectedFile = e.target.files[0];
          console.log(selectedFile)
          setEditedCard({
                  ...editedCard,
                  [e.target.name]: e.target.files[0],
                });
          setFile(URL.createObjectURL(selectedFile));
        } else {
            setEditedCard({ ...editedCard, [e.target.name]: e.target.value });
        }
      };

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await get('cards/card/'+id_card);
            const imageData = response.data.photo
            ? await getImage(response.data.photo)
            : { url: noImgSs };
    
            setFile(imageData.url)
            setEditedCard(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData(); 
      
      }, []);

      const handleEditSubmit = async (event) => {
        try {
            const formData = new FormData();
                // formData.append('photo', editedCard.photo);
            await axios.patch('http://localhost:5000/api/cards/'+id_card, editedCard);
            toast.success("Vos données ont été enregistrées")

          } catch (error) {
            console.error('Error fetching data:', error);
          }
 
    };
    

    // const fetchPhoto = async () => {
    //     try {
    //     let card = location.state?.card || JSON.parse(localStorage.getItem('basic')) || {};
    //     const id_card = card.id
    //     const response = await get(`cards/card/${id_card}`);
    //     // setImageUrl(`http://localhost:5000/api/uploads/${response.data.photo}`);
    //     setImageUrl(response.data.photo ? `http://localhost:5000/api/uploads/${response.data.photo}` : noImgSs)
    //     } catch (error) {
    //       console.error('Error fetching user data:', error);
    //     }
    //   }

    //   useEffect(() => {
    //     fetchPhoto();
    //   }, [])



    const cancelTheModal = () => {
        handleHideEditCard(false)
    }

    useEffect(() => {
        localStorage.setItem('basic', JSON.stringify(editedCard));
        console.log("basic details : ", editedCard)
    },[editedCard])


    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const id_user = localStorage.getItem("id_user");
    //         const response = await get('cards/'+id_user);
    //         const imageData = await getImage(response.data.photo);
    //         setFile(imageData.url)
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };
      
    //     fetchData(); 
      
    //   }, []);

  return (
    <div className='basic-details-container'>
        <div className='basic-details-content'>
            <div className='basic-details-form'>
               <div className="basic-details-input-row">
                    <div>
                        <label className='basic-details-label'>Nom de la carte</label> <br/>
                        <input className='basic-details-input' type="text" placeholder="card name" name='card_name' value={editedCard.card_name} onChange={handleValueChange}/> 
                    </div>
                    <div>
                        <label className='basic-details-label'>Occupation</label> <br/>
                        <input className='basic-details-input' type="text" placeholder="Occupation" name='fonction' value={editedCard.fonction} onChange={handleValueChange} />
                    </div>
                    {/* <div>
                        <label className='basic-details-label'>Photo</label> <br />
                        <input
                            className='basic-details-input'
                            type='file'
                            accept='image/*'
                            name='photo'
                            onChange={handleEditInputChange}
                        />
                    </div> */}
                    
                </div>

                <h2 className='basic-details-h2'> Détails de la carte </h2> 

                <div className="basic-details-input-row">
                    <div>
                        <label className='basic-details-label'>Nom complet</label> <br/>
                        <input className='basic-details-input' type="text" placeholder="full name" name='full_name' value={editedCard.full_name} onChange={handleValueChange} />
                    </div>
                    <div>
                        <label className='basic-details-label'>Email</label> <br/>
                        <input className='basic-details-input' type="email" placeholder="email" name='email' value={editedCard.email} onChange={handleValueChange} />
                    </div>
                </div>
                <div className="basic-details-input-row">
                    <div>
                        <label className='basic-details-label'>Phone</label> <br/>
                        <input className='basic-details-input' type="text" placeholder="Phone" name='phone_number' value={editedCard.phone_number} onChange={handleValueChange} />
                    </div>
                    <div>
                        <label className='basic-details-label'>Adresse</label> <br/>
                        <input className='basic-details-input' type="text" placeholder="Adresse" name='adresse' value={editedCard.adresse} onChange={handleValueChange} />
                    </div>
                </div>
                <div className="basic-details-input-row">
                    <div>
                        <label className='basic-details-label'>Société</label> <br/>
                        <input className='basic-details-input' type="text" placeholder="Société" name='societe' value={editedCard.societe} onChange={handleValueChange} />
                    </div>
                    
                </div>
                <div>
                    <label className='basic-details-label'>Image de la carte</label> <br/>
                    <div className="settings-image-container" style={{ maxWidth: '150px', maxHeight: '150px', marginTop: '10px' }}>
                        <img src={file} className="settings-image" alt='im' />
                        <input type="file" name="image" id="image" accept='image/*' className="inputfile" onChange={handleValueChange}  hidden/>
                        <label htmlFor="image" className="add-image-overlay">
                            <FontAwesomeIcon icon={faPlus} className='add-image-button' />
                        </label>
                    </div>
                </div>
                <div className='basic-details-buttons-flex'>
                    <button className='save-basic' onClick={()=> {handleEditSubmit(editedCard)}}>
                        Sauvegarder
                    </button>
                    <button onClick={cancelTheModal} className='cancel-basic'>
                        Annuler
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BasicDetails