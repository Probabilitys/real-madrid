import React from 'react'
import { useState, useEffect } from 'react'
import MatchesDisplay from '../components/MatchesDisplay'
import MatchScheduler from '../components/MatchScheduler'

const Matches = () => {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        const matchesData = require('./matches.json').matches
        setMatches(matchesData)
    }, [])

    // add match
    const addMatch = (match) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newMatch = {id, ...match}
        setMatches([...matches, newMatch])
        console.log('add match')
    }
    
    // remove match
    const removeMatch = async (id) => {
        setMatches(matches.filter((match) => 
            match.id !== id
        ))
    }

    return (
        <>
            <MatchScheduler onAdd={ addMatch }/>
            <MatchesDisplay matches={ matches }
                            onDelete={ removeMatch }/>
        </>
        
    )
}

export default Matches