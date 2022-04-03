import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../pages/root';
import { Primary } from './atoms/Button';

export const Header: React.FC = () => {
    const context = useContext(ThemeContext);
    return (
        <StyledHeader theme={context}>
            <AppName theme={context}>Auction</AppName>
            <Link theme={context} href='/components'>
                <Primary text="components" />
            </Link>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: ${props => props.theme.spacing.padding.s};
    box-sizing: border-box;
    height: 60px;
`;

const AppName = styled.div`
    color: ${props => props.theme.colors.elements.headLine};
    font-size: ${props => props.theme.typography.h2};
    font-weight: bold;
`;

const Link = styled.a`
    color: ${props => props.theme.colors.elements.anchor};
    font-size: ${props => props.theme.typography.p};
    font-weight: bold;
`