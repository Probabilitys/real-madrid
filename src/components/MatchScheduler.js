import React from 'react'
import { useState } from 'react'
import './MatchScheduler.css'

const MatchScheduler = ({ onAdd }) => {

    const [home, setHome] = useState('')
    const [away, setAway] = useState('')
    const [date, setDate] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!home || !away || !date) {
            alert('Please complete the form')
            return
        }
        onAdd({ home, away, date })
        setHome('')
        setAway('')
        setDate('')
    }

    return (
        <div className='scheduler-container'>
            <h1>Match Scheduler</h1>
            <form onSubmit={ onSubmit }>
                <div className='form-component'>
                    <input 
                        type='text'
                        required
                        value={home}
                        onChange={(e) => setHome(e.target.value)}
                    />
                    <label>Home team</label>
                </div>
                <div className='form-component'>
                    <input 
                        type='text'
                        required
                        value={away}
                        onChange={(e) => setAway(e.target.value)}
                    />
                    <label>Away team</label>
                </div>
                <div className='form-component'>
                    <input 
                        type='text'
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />  
                    <label>Date</label>
                </div>

                <div className='submit-btn-holder'>
                    <input className='submit-btn' type='submit' value='Schedule match' />
                </div>
            </form>
        </div>
        
    )
}

export default MatchScheduler