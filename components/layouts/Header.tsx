import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/global';
import { PrimaryButton } from '../atoms/Button';
import { Bell } from '../atoms/Bell';

export const Header: React.FC = () => {
    const context = useContext(ThemeContext);
    return (
        <StyledHeader theme={context}>
            <a href="/mockup">
                <Logo src="public/images/logo.png" alt="" />
            </a>
            <Menu>
                <Link theme={context} href='/components'>
                    <PrimaryButton text="components" />
                </Link>
                <BellWrapper>
                    <Bell />
                </BellWrapper>
            </Menu>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    display: flex;
    z-index: 100;
    position: fixed;
    background-color: ${({theme}) => theme.colors.illustration.secondary};
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${props => props.theme.spacing.padding.s};
    box-sizing: border-box;
    height: 60px;
`;

const Logo = styled.img`
    height: 40px;
`;

const Link = styled.a`
    color: ${props => props.theme.colors.elements.anchor};
    font-size: ${props => props.theme.typography.p};
    font-weight: bold;
`;

const BellWrapper = styled.div`
    width: 20px;
`;

const Menu = styled.div`
    max-width: 200px;
    display: flex;
    gap: 10px;
    align-items: center;
`;