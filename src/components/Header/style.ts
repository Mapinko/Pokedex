import { styled } from "styled-components";

export const StyledHeader = styled.header`
    width: 100vw;
    padding: 2rem;
    background-color: red;


    display: flex;
    justify-content: center;

    .title{
        color: ${ ({ theme }) => theme.colors.amarelo };
        text-shadow: 3px 3px 0 #007ACC, -3px 3px 0 #007ACC, 3px -3px 0 #007ACC, -3px 3px 0 #007ACC;
    }
`