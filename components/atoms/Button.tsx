import styled from 'styled-components';
import theme from '../variables/theme';

export const Primary: React.FC<{text: string}> = ({text}) => {
    return (
        <Button theme={theme}>{text}</Button>
    )
}

const Button = styled.button`
    background: ${({theme}) => theme.colors.elements.primaryBtn};
    color: ${({theme}) => theme.colors.elements.btnText};
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 7.5px;
`