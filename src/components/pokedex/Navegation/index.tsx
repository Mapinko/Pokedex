import React, { useState } from 'react'
import GenerationsFilters from '../pages/generationPage/generationsFilters'
import { StyledButton } from '../../../styles/button';
import { StyledNav } from './style';

const PokeNav: React.FC = () => {
    const [showGenerationsFilters, setShowGenerationsFilters] = useState(false);

    const handleGenerationsClick = () => {
        setShowGenerationsFilters(true);
    };

    return (
        <>
            <StyledNav>
                <StyledButton buttonSize='lg' buttonStyle='solid' onClick={handleGenerationsClick}>Generations</StyledButton>
                <StyledButton buttonSize='lg' buttonStyle='solid'>Pokedex</StyledButton>
                <StyledButton buttonSize='lg' buttonStyle='solid'>Regions</StyledButton>
            </StyledNav>

            {showGenerationsFilters && <GenerationsFilters />}
        </>
    );
};

export default PokeNav;
