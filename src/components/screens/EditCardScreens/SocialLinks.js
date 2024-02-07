import React from 'react'
import { FaInstagram, FaTwitter, FaFacebook, FaReddit, FaYoutube, FaLinkedin, FaWhatsapp, FaPinterest, FaTiktok, } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg';

const SocialLinks = ({handleEditSubmit, handleEditInputChange, editedCard}) => {


  const generateWhatsappLink = (phoneNumber) => {
    // Remove non-numeric characters from the phone number
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

    // Create the WhatsApp link
    return `https://wa.me/${cleanedPhoneNumber}`;
  };




  return (
    <div className='social-links-card'>
      <div className='social-links-card-body'>
        
          <div className='social-links-rows'>
            <div className='social-links-column'>
              <div className='social-links-row-added'>
                <div className='social-links-icon'>
                  <CgWebsite size={30} />
                </div>
                <div className='social-links-input'>
                  <input className='social-links-form-controller' onChange={handleEditInputChange} value={editedCard.website} type='text' placeholder='Lien site web' name='website' />
                </div>
              </div>
            </div>
          </div>

          <div className='social-links-rows'>
            <div className='social-links-column'>
              <div className='social-links-row-added'>
                <div className='social-links-icon'>
                  <FaInstagram size={30} />
                </div>
                <div className='social-links-input'>
                  <input className='social-links-form-controller' onChange={handleEditInputChange} value={editedCard.instagram} type='text' placeholder='Lien instagram' name='instagram' />
                </div>
              </div>
            </div>
          </div>

          <div className='social-links-rows'>
            <div className='social-links-column'>
              <div className='social-links-row-added'>
                <div className='social-links-icon'>
                  <FaTwitter size={30} />
                </div>
                <div className='social-links-input'>
                  <input className='social-links-form-controller' onChange={handleEditInputChange} value={editedCard.twitter} type='text' placeholder='Lien twitter' name='twitter' />
                </div>
              </div>
            </div>
          </div>

          <div className='social-links-rows'>
            <div className='social-links-column'>
              <div className='social-links-row-added'>
                <div className='social-links-icon'>
                  <FaFacebook size={30} />
                </div>
                <div className='social-links-input'>
                  <input className='social-links-form-controller' onChange={handleEditInputChange} value={editedCard.facebook} type='text' placeholder='Lien facebook' name='facebook' />
                </div>
              </div>
            </div>
          </div>

          <div className='social-links-rows'>
            <div className='social-links-column'>
              <div className='social-links-row-added'>
                <div className='social-links-icon'>
                  <FaReddit size={30} />
                </div>
                <div className='social-links-input'>
                  <input className='social-links-form-controller' onChange={handleEditInputChange} value={editedCard.reddit} type='text' placeholder='Lien reddit' name='reddit' />
                </div>
              </div>
            </div>
          </div>

          <div className='social-links-rows'>
            <div className='social-links-column'>
              <div className='social-links-row-added'>
                <div className='social-links-icon'>
                  <FaYoutube size={30} />
                </div>
                <div className='social-links-input'>
                  <input className='social-links-form-controller' onChange={handleEditInputChange} value={editedCard.youtube} type='text' placeholder='Lien youtube' name='youtube' />
                </div>
              </div>
            </div>
          </div>

          <div className='social-links-rows'>
            <div className='social-links-column'>
              <div className='social-links-row-added'>
                <div className='social-links-icon'>
                  <FaLinkedin size={30} />
                </div>
                <div className='social-links-input'>
                  <input className='social-links-form-controller' onChange={handleEditInputChange} value={editedCard.linkedin} type='text' placeholder='Lien linkedin' name='linkedin' />
                </div>
              </div>
            </div>
          </div>

          <div className='social-links-rows'>
            <div className='social-links-column'>
              <div className='social-links-row-added'>
                <div className='social-links-icon'>
                  <FaWhatsapp size={30} />
                </div>
                <div className='social-links-input'>
                  <input className='social-links-form-controller' 
                  onChange={(e) => {
                    // Update the state for WhatsApp and generate the link
                    handleEditInputChange(e);
                    const whatsappLink = generateWhatsappLink(e.target.value);
                    handleEditInputChange({ target: { name: 'whatsapp', value: whatsappLink } });
                  }}
                  value={editedCard.whatsapp} 
                  type='text' 
                  placeholder='Lien whatsapp' 
                  // name='whatsapp' 
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='social-links-rows'>
            <div className='social-links-column'>
              <div className='social-links-row-added'>
                <div className='social-links-icon'>
                  <FaPinterest size={30} />
                </div>
                <div className='social-links-input'>
                  <input className='social-links-form-controller' onChange={handleEditInputChange} value={editedCard.pinterrest} type='text' placeholder='Lien pinterrest' name='pinterrest' />
                </div>
              </div>
            </div>
          </div>

          <div className='social-links-rows'>
            <div className='social-links-column'>
              <div className='social-links-row-added'>
                <div className='social-links-icon'>
                  <FaTiktok size={30} />
                </div>
                <div className='social-links-input'>
                  <input className='social-links-form-controller' onChange={handleEditInputChange} value={editedCard.tiktok} type='text' placeholder='Lien tiktok' name='tiktok' />
                </div>
              </div>
            </div>
          </div>

          <div className='social-links-buttons'>
            <button onClick={handleEditSubmit} className='social-links-buttons-save'>
              Sauvegarder
            </button>
            <button className='social-links-buttons-cancel'>
              Annuler
            </button>
          </div>

      </div>
    </div>

  )
}

export default SocialLinks