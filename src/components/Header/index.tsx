import { StyledHeader } from "./style";

//import Logo from '../../assets/Logo.png'
import { StyledTitle } from "../../styles/typography";

const Header = () => {
    return (
      <StyledHeader>
        {/*<img src={Logo} alt="Pokemon" className="logo"/>*/}
        <StyledTitle fontSize="slg" fontWeight={700} tag="h1" className="title">
          Pokédex
        </StyledTitle>
      </StyledHeader>
    );
  };
  
  export default Header;
  