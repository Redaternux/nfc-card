import React from 'react'
import { useState, useEffect } from 'react'

const Horaires = () => {

    const [selectedDays, setSelectedDays] = useState([]);
    const [businessHours, setBusinessHours] = useState([]);

    const [formData, setFormData] = useState({
        day:'',
        open_time:'12:00',
        close_time:'12:00'
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleDaySelection = (e) => {
        const { value } = e.target;
        if (selectedDays.includes(value)) {
        setSelectedDays(selectedDays.filter((day) => day !== value));
        } else {
        setSelectedDays([...selectedDays, value]);
        }
    };

    const generateTimeOptions = () => {
        const timeOptions = [];
        for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
            const formattedHour = hour.toString().padStart(2, '0');
            const formattedMinute = minute.toString().padStart(2, '0');
            const time = `${formattedHour}:${formattedMinute}`;
            timeOptions.push(time);
        }
        }
        return timeOptions;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        for (const day of selectedDays) {
            const dataForDay = { ...formData, day };
            try {
            const response = await fetch('http://localhost:3001/api/business-hours', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataForDay),
            });
            if (response.status === 201) {
                console.log(`Business hours for ${day} inserted successfully.`);
            } else {
                console.error(`Error inserting business hours for ${day}.`);
            }
            } catch (error) {
            console.error('Error:', error);
            }
        }
    }

return (
    <div className='hours-container'>
        <div className='hours-content'>
            <form onSubmit={handleSubmit}>
                <div className='day_line'>
                        <input 
                            name='day' 
                            type='checkbox' 
                            value="Lundi" 
                            onChange={handleDaySelection}
                            checked={selectedDays.includes('Lundi')}
                        />
                        <h4> Lundi </h4>
                        <div className='hhhh'>
                            <select
                                onChange={handleChange}
                                name='open_time'
                                value={formData.open_time}
                            >
                                {generateTimeOptions().map((time, index) => (
                                    <option key={index} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                            <h4> To </h4>
                            <select
                                onChange={handleChange}
                                name='close_time'
                                value={formData.close_time}
                            >
                                {generateTimeOptions().map((time, index) => (
                                    <option key={index} value={time}>
                                    {time}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className='day_line'>
                        <input 
                            name='day' 
                            type='checkbox' 
                            value="Mardi" 
                            onChange={handleDaySelection}
                            checked={selectedDays.includes('Mardi')}
                        />
                        <h4> Mardi </h4>
                        <div className='hhhh'>
                            <select
                                onChange={handleChange}
                                name='open_time'
                                value={formData.open_time}
                            >
                                {generateTimeOptions().map((time, index) => (
                                    <option key={index} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                            <h4> To </h4>
                            <select
                                onChange={handleChange}
                                name='close_time'
                                value={formData.close_time}
                            >
                                {generateTimeOptions().map((time, index) => (
                                    <option key={index} value={time}>
                                    {time}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className='day_line'>
                        <input 
                            name='day' 
                            type='checkbox' 
                            value="Mercredi" 
                            onChange={handleDaySelection}
                            checked={selectedDays.includes('Mercredi')}
                        />
                        <h4> Mercredi </h4>
                        <div className='hhhh'>
                            <select
                                onChange={handleChange}
                                name='open_time'
                                value={formData.open_time}
                            >
                                {generateTimeOptions().map((time, index) => (
                                    <option key={index} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                            <h4> To </h4>
                            <select
                                onChange={handleChange}
                                name='close_time'
                                value={formData.close_time}
                            >
                                {generateTimeOptions().map((time, index) => (
                                    <option key={index} value={time}>
                                    {time}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className='day_line'>
                        <input 
                            name='day' 
                            type='checkbox' 
                            value="Jeudi" 
                            onChange={handleDaySelection}
                            checked={selectedDays.includes('Jeudi')}
                        />
                        <h4> Jeudi </h4>
                        <div className='hhhh'>
                            <select
                                onChange={handleChange}
                                name='open_time'
                                value={formData.open_time}
                            >
                                {generateTimeOptions().map((time, index) => (
                                    <option key={index} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                            <h4> To </h4>
                            <select
                                onChange={handleChange}
                                name='close_time'
                                value={formData.close_time}
                            >
                                {generateTimeOptions().map((time, index) => (
                                    <option key={index} value={time}>
                                    {time}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className='day_line'>
                        <input 
                            name='day' 
                            type='checkbox' 
                            value="Vendredi" 
                            onChange={handleDaySelection}
                            checked={selectedDays.includes('Vendredi')}
                        />
                        <h4> Vendredi </h4>
                        <div className='hhhh'>
                            <select
                                onChange={handleChange}
                                name='open_time'
                                value={formData.open_time}
                            >
                                {generateTimeOptions().map((time, index) => (
                                    <option key={index} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                            <h4> To </h4>
                            <select
                                onChange={handleChange}
                                name='close_time'
                                value={formData.close_time}
                            >
                                {generateTimeOptions().map((time, index) => (
                                    <option key={index} value={time}>
                                    {time}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className='day_line'>
                        <input 
                            name='day' 
                            type='checkbox' 
                            value="Samedi" 
                            onChange={handleDaySelection}
                            checked={selectedDays.includes('Samedi')}
                        />
                        <h4> Samedi </h4>
                        <div className='hhhh'>
                            <select
                                onChange={handleChange}
                                name='open_time'
                                value={formData.open_time}
                            >
                                {generateTimeOptions().map((time, index) => (
                                    <option key={index} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                            <h4> To </h4>
                            <select
                                onChange={handleChange}
                                name='close_time'
                                value={formData.close_time}
                            >
                                {generateTimeOptions().map((time, index) => (
                                    <option key={index} value={time}>
                                    {time}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className='day_line'>
                        <input 
                            name='day' 
                            type='checkbox' 
                            value="Dimanche" 
                            onChange={handleDaySelection}
                            checked={selectedDays.includes('Dimanche')}
                        />
                        <h4> Dimanche </h4>
                        <div className='hhhh'>
                            <select
                                onChange={handleChange}
                                name='open_time'
                                value={formData.open_time}
                            >
                                {generateTimeOptions().map((time, index) => (
                                    <option key={index} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                            <h4> To </h4>
                            <select
                                onChange={handleChange}
                                name='close_time'
                                value={formData.close_time}
                            >
                                {generateTimeOptions().map((time, index) => (
                                    <option key={index} value={time}>
                                    {time}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                <div className='social-links-buttons'>
                    <button className='social-links-buttons-save'>
                    Sauvegarder
                    </button>
                    <button className='social-links-buttons-cancel'>
                    Annuler
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Horaires