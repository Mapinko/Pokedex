import React, { useState } from 'react';
import GenerationsFilters from './pages/generationPage/generationsFilters';

const PokeHeaderNav: React.FC = () => {
    const [showGenerationsFilters, setShowGenerationsFilters] = useState(false);

    const handleGenerationsClick = () => {
        setShowGenerationsFilters(true);
    };

    return (
        <nav>
            <button onClick={handleGenerationsClick}>Generations</button>
            <button>Pokedex</button>
            <button>Regions</button>

            {showGenerationsFilters && <GenerationsFilters />}
        </nav>
    );
};

export default PokeHeaderNav;