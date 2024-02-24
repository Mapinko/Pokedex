import React, { useState } from 'react'
import GenerationsFilters from './pages/generationPage/generationsFilters'

const PokeNav: React.FC = () => {
    const [showGenerationsFilters, setShowGenerationsFilters] = useState(false);

    const handleGenerationsClick = () => {
        setShowGenerationsFilters(true);
    };

    return (
        <>
        <nav>
            <button onClick={handleGenerationsClick}>Generations</button>
            <button>Pokedex</button>
            <button>Regions</button>
        </nav>

            {showGenerationsFilters && <GenerationsFilters />}
        </>
    );
};

export default PokeNav;
