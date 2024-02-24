import React, { useEffect, useState } from 'react'

interface MainRegion {
    name: string;
    url: string;
}

interface Generation {
    abilities: string[];
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
                
console.log(generation);

return (
    <div>
        {generation && (
            <ul>
                <li>Main Region: {generation.main_region['name']}</li> 
                {/* {generation.abilities.length > 0 && (
                    <li>Abilities: {generation.abilities}</li>
                )} */}
            </ul>
        )}
    </div>
);
};

export default GenerationsList;
