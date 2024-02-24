import { useEffect, useState } from 'react'
import GenerationsList from './generationsList'

const GenerationsFilters = () => {
    const [generations, setGenerations] = useState([]);
    const [selectedGenerationIndex, setSelectedGenerationIndex] = useState<number | null>(null);

    const apiUrl = 'https://pokeapi.co/api/v2/generation/';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setGenerations(data.results);
                console.log('Generations:', data.results);
                
            } catch (error) {
                console.error('Error fetching generations:', error);
            }
        };

        fetchData();
    }, [apiUrl]);

    const handleGenerationClick = (index: number) => {
        setSelectedGenerationIndex(index);
    };

    return (
        <div>
            <h2>Choose the Generation</h2>

            <section >
            {generations.map((generation: { name: string; url: string }, index: number) => (
                    <div key={generation.name}>
                        <button onClick={() => handleGenerationClick(index)}>
                        <ul>
                            <li>{generation.name}</li>
                        </ul>
                        </button>

                        {selectedGenerationIndex === index && (
                            <GenerationsList key={generation.name} generationURL={generation.url} />
                        )}
                    </div>
                    ))}
            </section>
        </div>
    );
};

export default GenerationsFilters;
