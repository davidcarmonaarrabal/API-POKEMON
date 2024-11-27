'use client'
import { useState, useEffect } from "react";


function Page() {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
    
        const fetchData = async () => {

            const res = await fetch('https://pokeapi.co/api/v2/pokemon')
            const data = await res.json()

            setPokemon(data.results)
        }
        fetchData()

    }, [])


    return (
        <>
            <h2 className="text-xl font-bold text-center">Ejemplo 3: CSR React - Pokemon</h2>
            <ul>
                {
                    pokemon.map(pokemon => (
                        <li className="py-40 text-center">{}
                            <h1>{pokemon.name}</h1>
                            <b>{pokemon.url}:</b> {pokemon.created}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Page  
