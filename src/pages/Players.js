import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import PlayerComponent from '../components/PlayerComponent'

// A page displaying the Players

const Players = () => {

    const TITLE = {        
        number: "No.",
        position: "Pos.",
        name: "Player",
        birthDate: "Birth Date"
    }

    const [players, setPlayers] = useState([])

    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        const playersData = require('./players.json').players
        setPlayers(playersData)
    }, [])

    function handleSearch(e) {
        setSearchValue(e.target.value)
    }

    const filterPlayers = players.filter((player) => {
        return searchValue.length === 0 || player.name.includes(searchValue)
    })

    return (
        <>
            <h1 className='page-title'>Our Team</h1>
            <SearchBar onSearch={handleSearch} />
            <PlayerComponent player={TITLE} />
            {
                filterPlayers.map((player) => {
                    return <PlayerComponent key={player.number} player={player} />
                })
            }   
        </>
    )
}

export default Players
