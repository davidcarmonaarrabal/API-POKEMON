import Image from 'next/image';
export const dynamic = 'force-dynamic'

async function fetchPokemon() {
    
    const res =  await fetch('https://pokeapi.co/api/v2/pokemon');
    if (!res.ok){
        throw new Error('Error al hacer el fetch de Pokémon');
    }
    const data = await res.json();
    return data.results;
}

export default async function Page(){
    const pokemon = await fetchPokemon();

    return (
        <>
            <h2 className='text-xl font-bold text-center'>Ejemplo 3: SSR Next - Pokémon</h2>
            <ul>
                {pokemon.map(pokemon => (
                    <li className='py-40 text-center'>
                        <b>{pokemon.name}</b>
                        <br />   
                        <b>{pokemon.url}</b>
                    </li>
                ))}
            </ul>
        </>
    );
}