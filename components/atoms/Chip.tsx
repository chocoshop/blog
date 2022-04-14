import styled from "styled-components";
import theme from "../variables/theme";

export const Chip : React.FC = (props) => {
    return (
        <Wrapper theme={theme}>
            <div>{props.children}</div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: ${({theme}) => theme.colors.elements.cardBg};
    color: ${({theme}) => theme.colors.elements.cardText};
    font-weight: bold;
    padding: 1rem;
    max-width: 300px;
    border-radius: 3px;
    text-align: center;
`