import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ItemCard } from '../../components/feature/Purchase/ItemCard';
import { ThemeContext } from '../../components/contexts/global';
import { Header } from '../../components/layouts/Header';
import theme from '../../components/variables/theme';

const Main = styled.main`
    position: relative;
    padding-top: ${({theme}) => theme.spacing.padding.m};
    & > h1 {
        margin: ${({theme}) => theme.spacing.margin.m};
    }
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

const items = [
    {
        id: 1,
        title: 'マグロ',
        price: 1000,
        description: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText'
    },
    {
        id: 2,
        title: 'カツオ',
        price: 1000,
        description: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText'
    },
    {
        id: 3,
        title: 'サバ',
        price: 1000,
        description: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText'
    },
    {
        id: 4,
        title: 'イワシ',
        price: 1000,
        description: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText'
    },
    {
        id: 5,
        title: 'お茶',
        price: 1000,
        description: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText'
    },
    {
        id: 6,
        title: 'レモン',
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
                <section>
                    <h1>商品一覧</h1>
                    <CardGrid>
                        {items.map(item => {
                            return <ItemCard {...item} />
                        })}
                    </CardGrid>
                </section>
            </Container>
        </Main>
    </ThemeContext.Provider>
    </>
;
ReactDOM.render(App, document.getElementById('app'));
