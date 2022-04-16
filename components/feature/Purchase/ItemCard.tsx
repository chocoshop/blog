import styled from "styled-components";
import theme from "../../variables/theme";
import { Primary } from "../../atoms/Button";
import React, { ReactElement, useMemo, useState } from "react";
import { ItemModal } from "./ItemModal";

type Props = {
    item: Item
}

export const ItemCard : React.FC<Props> = (props) => {
    const [isModalOpen, toggleModal] = useState(false);
    const [item, setItem] = useState(props.item);
    const [isBooked, setIsBooked] = useState(false);
    const book = (itemId: number) => {
        const item = bookItem(itemId);
        if (item) {
            setItem(item);
            setIsBooked(true);
        }
    }
    return(
        <>
        <Wrapper theme={theme} key={item.id}>
            <img src="public/images/dummy1.png" alt="ダミー画像" />
            <Content>
                <h4>{item.title}</h4>
                <span>¥{item.price}</span>
                <ContentBottom>
                    <Primary text={isBooked ? "予約済み": "予約する"} onClick={() => toggleModal(!isModalOpen)}/>
                </ContentBottom>
            </Content>
        </Wrapper>
        {isModalOpen && 
            <Bg onClick={() => toggleModal(!isModalOpen)} theme={theme}>
                <ItemModal item={item} bookHandler={() => book(item.id)} isBooked={isBooked} />
            </Bg>
        }
        </>
    )
}

const bookItem = (itemId: number): Item|null => {
    try{
        // const item = fetch(url);
        const item = {
            id: 1,
            title: 'マグロ',
            price: 950,
            description: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText'
        };
        return item;
    } catch(e) {
        console.error(e);
    }
    return null;
}

const Wrapper = styled.div`
    position: relative;
    padding: 1.5rem ;
    border-radius: 5px 5px 0 0;
    border-bottom: solid;
    display: flex;
    align-items: baseline;
    flex-flow: column;
    & > img {
        width: 100%;
    }
    & > h4 {
        font-size: 1.5rem;
    }
    & > p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const Content = styled.div`
    width: 100%;
    margin-top: auto;
`;

const ContentBottom = styled.div`
    width: 100%;
    text-align: right;
    margin-right: -2.5rem;
`;

const Bg = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    right: 0;
    top: 60px;
    margin: 0 auto;
    padding-top: 75px;
    z-index: 2;
    background-color: ${({theme}) => theme.colors.elements.bgStrong};
`;