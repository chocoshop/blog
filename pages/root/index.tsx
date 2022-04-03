import { createContext } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Card } from '../../components/atoms/Card';
import { Chip } from '../../components/atoms/Chip';
import { Header } from '../../components/header';
import theme from '../../components/variables/theme';

export const ThemeContext = createContext(theme);

const Main = styled.main`
    position: relative;
    background-color: ${({theme}) => theme.colors.illustration.secondary};
    padding-top: ${({theme}) => theme.spacing.padding.m};
    & > h1 {
        margin: ${({theme}) => theme.spacing.margin.m};
    }
`;

const Title = styled.h1`
    font-size: ${({theme}) => theme.typography.h1};
    color: ${({theme}) => theme.colors.elements.headLine};
    font-weight: bold;
    padding-left: 10%;
`;

const Content = styled.section`
    display: flex;
    gap: 20px;
    justify-content: center;
`;

const Container = styled.div`
    width: 90%;
    margin: auto;
`;

const CardGrid = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: auto auto auto;
`;

const ChipWrapper = styled.div`
    position: absolute;
    right: 10%;
`

const items = [
    {
        id: 1,
        title: 'Item1',
        price: 1000,
        description: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText'
    },
    {
        id: 2,
        title: 'Item1',
        price: 1000,
        description: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText'
    },
    {
        id: 3,
        title: 'Item1',
        price: 1000,
        description: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText'
    },
    {
        id: 4,
        title: 'Item1',
        price: 1000,
        description: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText'
    },
    {
        id: 5,
        title: 'Item1',
        price: 1000,
        description: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText'
    },
    {
        id: 6,
        title: 'Item1',
        price: 1000,
        description: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText'
    },
];

const App =
    <>
    <ThemeContext.Provider value={theme}>
        <Header />
        <Main theme={theme}>
            <ChipWrapper>
                <Chip>予約した商品が値下げされました。</Chip>
            </ChipWrapper>
            <Title theme={theme}>商品トップ</Title>
            <Container theme={theme}>
                <Content theme={theme}>
                    <CardGrid>
                        {items.map(item => {
                            return <Card {...item} />
                        })}
                    </CardGrid>
                </Content>
            </Container>
        </Main>
    </ThemeContext.Provider>
    </>
;
ReactDOM.render(App, document.getElementById('app'));
