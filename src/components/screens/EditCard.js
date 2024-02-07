import React from 'react'
import "./EditCard.css"
import EditCardHeader from './EditCardScreens/EditCardHeader'
import { useState, useEffect } from 'react'
import { get,patch } from '../../http/api';
import { toast } from 'react-toastify';


const EditCard = ({handleHideEditCard, id_card}) => {

    const [editedCard, setEditedCard] = useState({})
    const [imageFile, setImageFile] = useState(null);
    const [file, setFile] = useState('')

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
        console.log(selectedFile)

        setFile(URL.createObjectURL(selectedFile));
      } else {
          setEditedCard({ ...editedCard, [e.target.name]: e.target.value });
      }
    };
    
    const handleEditSubmit = async (event) => {
        try {
            const formData = new FormData();
            formData.append('photo', editedCard.photo);
            await patch('cards/'+id_card, editedCard, formData);
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
            <EditCardHeader file={file} setFile={setFile} handleHideEditCard={handleHideEditCard} id_card={id_card} editedCard={editedCard} handleEditInputChange={handleEditInputChange} handleEditSubmit={handleEditSubmit}/>
        </div>
    </div>
  )
}

export default EditCard