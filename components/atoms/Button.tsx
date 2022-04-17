import styled from 'styled-components';
import theme from '../variables/theme';

export const PrimaryButton: React.FC<{text: string, onClick?: () => void}> = ({text, onClick}) => {
    return (
        <Primary theme={theme} onClick={onClick}>{text}</Primary>
    );
}

export const DisabledButton : React.FC<{text: string}> = ({text}) => {
    return (
        <Disabled theme={theme} disabled={true}>{text}</Disabled>
    );
}

const Primary = styled.button`
    background: ${({theme}) => theme.colors.elements.primaryBtn};
    color: ${({theme}) => theme.colors.elements.btnText};
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 4px;
    cursor: pointer;
`;

const Disabled = styled.button`
    background: ${({theme}) => theme.colors.elements.disabledBtn};
    color: gray;
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 7.5px;
`;