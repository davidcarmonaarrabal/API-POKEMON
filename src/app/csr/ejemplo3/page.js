'use client'
import { useState, useEffect } from "react";


function Page() {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
    
        const fetchData = async () => {

            const res = await fetch('https://rickandmortyapi.com/api/character')
            const data = await res.json()

            setCharacters(data.results)
        }
        fetchData()

    }, [])


    return (
        <>
            <h2 className="text-xl font-bold text-center">Ejemplo 3: CSR React - Rick & Morty</h2>
            <ul>
                {
                    characters.map(character => (
                        <li key={character.id} className="py-40 text-center">{}
                            <img src={character.image} alt="foto" className="mx-auto" />
                            <b>{character.name}:</b> {character.created}{}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Page  
