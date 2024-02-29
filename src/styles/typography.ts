import { css, styled } from "styled-components";
import BaseTitle from "./components/typography";

export const StyledTitle = styled(BaseTitle)`
    font-family: "Press Start 2P", cursive;

    font-weight: ${ ({ fontWeight }) => fontWeight };

    color: ${ ({ theme }) => theme.colors.white };

    ${ ({ fontSize }) => {
      switch (fontSize) {
         case "lg":
            return css`
                  font-size: 44px;
                  @media (max-width: 800px){
                     font-size: 36px;
                  }
                  @media (max-width: 420px){
                     font-size: 32px;
                  }
               `
         case "slg":
            return css`
                  font-size: 24px;
               `
         case "md":
            return css`
                  font-size: 20px;
               `
         case "sm":
            return css`
                  font-size: 16px;
               `
      }
   } }

`

interface iStyledParagraph {
    fontSize: "sm" | "md" | "lg"
 }

export const StyledParagraph = styled.p<iStyledParagraph>`
    font-family: 'Roboto', sans-serif;

    font-weight: 400;

    strong, b{
        font-weight: 700;
    }

    color: ${ ({ theme }) => theme.colors.white };

    ${ ({ fontSize }) => {
        switch (fontSize) {
            case 'lg':
            return css`
                    font-size: 20px;
                `
            case 'md':
            return css`
                    font-size: 16px;
                `
            case 'sm':
            return css`
                    font-size: 14px;
                `
        }
    } }

`