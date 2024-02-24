import React, { useEffect, useState } from 'react'

interface MainRegion {
    name: string;
    url: string;
}
interface Abilities {
    name: string;
    url: string;
}

interface Generation {
    abilities: Abilities[];
    id: number;
    main_region: MainRegion;
    moves: string[];
    name: string;
    // other properties...
}
type GenerationsListProps = {
    generationURL: string;
};

const GenerationsList: React.FC<GenerationsListProps> = ({ generationURL }) => {

    const [generation, setGeneration] = useState<Generation | undefined>(undefined);

    useEffect(() => {
        const fetchGeneration = async () => {
            try {
                const response = await fetch(generationURL);
                const data = await (response as Response).json();
                setGeneration(data);
            } catch (error) {
                console.error('Error fetching generation:', error);
            }
        };

        fetchGeneration();
    }, []);

    console.log('Generation List:', generation);

    return (
        <div>
                <ul>
                    <li>Main Region: {generation?.main_region.name}</li>
                    {generation?.abilities && generation.abilities.length > 0 && (
                        <li>Abilities: {
                            generation.abilities.map(ability => ability.name).join(', ')
                        }</li>
                    )}
                </ul>
        </div>
    );
};

export default GenerationsList;
