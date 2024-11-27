import Image from 'next/image';
export const dynamic = 'force-dynamic'

async function fetchCharacter() {
    
    const res =  await fetch('https://rickandmortyapi.com/api/character');
    if (!res.ok){
        throw new Error('Error al hacer el fetch de personajes');
    }
    const data = await res.json();
    return data.results;
}

export default async function Page(){
    const characters = await fetchCharacter();

    return (
        <>
            <h2 className='text-xl font-bold text-center'>Ejemplo 3: SSR Next - Rick & Morty</h2>
            <ul>
                {characters.map(character => (
                    <li key={character.id} className='py-40 text-center'>
                        <Image 
                        src={character.image}
                        alt={character.name}
                        width={300}
                        height={300}
                        className="mx-auto"
                        ></Image>
                    <b>{character.name}:</b>
                    </li>
                ))}
            </ul>
        </>
    );
}