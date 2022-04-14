import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ItemCard } from '../../components/feature/Purchase/ItemCard';
import { Chip } from '../../components/atoms/Chip';
import { ThemeContext } from '../../components/contexts/global';
import { Header } from '../../components/header';
import theme from '../../components/variables/theme';

const Main = styled.main`
    position: relative;
    padding-top: ${({theme}) => theme.spacing.padding.m};
    & > h1 {
        margin: ${({theme}) => theme.spacing.margin.m};
    }
`;

const Content = styled.section`
    display: flex;
    gap: 20px;
    justify-content: center;
`;

const Container = styled.div`
    width: 90%;
    margin: 40px auto 0;
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
    margin-bottom: 20px;
    margin-left: auto;
`

const items = [
    {
        id: 1,
        title: 'Item',
        price: 1000,
        description: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText'
    },
    {
        id: 2,
        title: 'Item2',
        price: 1000,
        description: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText'
    },
    {
        id: 3,
        title: 'Item3',
        price: 1000,
        description: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText'
    },
    {
        id: 4,
        title: 'Item4',
        price: 1000,
        description: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText'
    },
    {
        id: 5,
        title: 'Item5',
        price: 1000,
        description: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText'
    },
    {
        id: 6,
        title: 'Item6',
        price: 1000,
        description: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText'
    },
];

const App =
    <>
    <ThemeContext.Provider value={theme}>
        <Header />
        <Main theme={theme}>
            <Container theme={theme}>
            <ChipWrapper>
                <Chip>予約した商品が値下げされました。</Chip>
            </ChipWrapper>
                <Content theme={theme}>
                    <CardGrid>
                        {items.map(item => {
                            return <ItemCard {...item} />
                        })}
                    </CardGrid>
                </Content>
            </Container>
        </Main>
    </ThemeContext.Provider>
    </>
;
ReactDOM.render(App, document.getElementById('app'));
