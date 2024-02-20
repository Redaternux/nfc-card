import React from 'react'
import "./EditCard.css"
import EditCardHeader from './EditCardScreens/EditCardHeader'
import { useState, useEffect } from 'react'
import { get,patch, getImage } from '../../http/api';
import { toast } from 'react-toastify';
import axios from 'axios';
import noImgSs from '../../no-image.png';



const EditCard = ({handleHideEditCard, id_card}) => {

    const [editedCard, setEditedCard] = useState({})
    const [file, setFile] = useState('')
    const [allowedCards, setAllowedCards] = useState(1);

    const fetchUserData = async () => {
      try {
        const id_user = localStorage.getItem("id_user");
        const response = await get(`users/${id_user}`);
        setAllowedCards(response.data.allowed_cards);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    useEffect(() => {
      fetchUserData();
    }, []);


    const handleCheckboxChange = async (index) => {

      try {
        if (index >= 0 && index < editedCard.length) {
  
          if (index >= allowedCards) {
            toast.error("Vous n\'avez pas le droit d\'activer les cartes non autorisées.")
            return;
          }
  
          const newStatus = [...editedCard];
          newStatus[index].status = !newStatus[index].status;
          const statusValue = newStatus[index].status ? 1 : null;
  
          const dataState = {
            ...newStatus[index],
            status: statusValue
          }
    
          await patch('cards/'+newStatus[index].id, dataState);
          setEditedCard(newStatus);
        }
  
      } catch (error) {
        console.log(error);
      }
    };

    

    // const handleEditInputChange = (event) => {
    //     console.log(event.target.value)
    //     const currentState = { ...editedCard };

    //     currentState[event.target.name] = event.target.value;
    //     setEditedCard(currentState);

    //     if (event.target.type === 'file') {

    //       const selectedFile = event.target.files[0];
    //       setImageFile(selectedFile);
    //       console.log(selectedFile)
    //     }
       
    // };

    const handleEditInputChange = (e) => {
      if (e.target.name === "photo") {
        const selectedFile = e.target.files[0];
        setEditedCard({
                ...editedCard,
                [e.target.name]: selectedFile,
              });
        // console.log(selectedFile)

        setFile(URL.createObjectURL(selectedFile));
      } else {
          setEditedCard({ ...editedCard, [e.target.name]: e.target.value });
      }
    };

    const fetchBasicData = async () => {
      try {
        const response = await get('cards/card/'+id_card);
        const imageData = response.data.photo
        ? await getImage(response.data.photo)
        : { url: noImgSs };

        setFile(imageData.url)
        // setEditedCard(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    
    const handleEditSubmit = async (event) => {
        try {
            const formData = new FormData();
            formData.append('photo', editedCard.photo);
            await axios.patch('http://localhost:5000/api/cards/'+id_card, editedCard, { headers: { 'Content-Type': 'multipart/form-data' } }, formData);
            toast.success("Vos données ont été enregistrées")

          } catch (error) {
            console.error('Error fetching data:', error);
          }
 
    };

    useEffect(() => {
        const fetchCardData = async() => {
          try {
            const response = await get('cards/card/'+id_card);
            console.log(response.data)
            setEditedCard(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchCardData();
      },[])

  return (
    <div className='edit-card-container'>
        <div className='edit-card-header'>
            <div className='edit-card-title'>
                Modifier votre carte
            </div>
            <div className='edit-card-button'>
                <button onClick={handleHideEditCard} className='edit-card-back-button'>
                    Retour
                </button>
            </div>
        </div>
        <div>
            <EditCardHeader fetchBasicData={fetchBasicData} file={file} handleHideEditCard={handleHideEditCard} id_card={id_card} editedCard={editedCard} handleEditInputChange={handleEditInputChange} handleEditSubmit={handleEditSubmit}/>
        </div>
    </div>
  )
}

export default EditCard