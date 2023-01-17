import React from 'react'

import './MatchesDisplay.css'

const Match = ({ match, onDelete }) => {

    return (
        <div className='match'>
            <h3>{match.home} vs {match.away}</h3> 
            <button 
                className='remove-btn'
                onClick={() =>{onDelete(match.id)}}
            >
                Remove
            </button>
            <h4>{match.date}</h4>
        </div>
    )
}

const MatchesDisplay = ({ matches, onDelete }) => {

    return (
        <>
            <h3 className='schduler-header'>Current Schedule</h3>
            {matches.length > 0 ? (
                matches.map((match) => (
                    <Match key={match.id} match={match} onDelete={onDelete}/>
                ))  
            ) : (
                'No match scheduled'
            )
            }
        </>
    )
}

export default MatchesDisplay