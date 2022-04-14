import styled from "styled-components";
import theme from "../../variables/theme";
import { Primary } from "../../atoms/Button";
import React, { ReactElement, useState } from "react";
import { ItemModal } from "./ItemModal";

export const ItemCard : React.FC<Item> = (item) => {
    const [isModalOpen, toggleModal] = useState(false);
    return(
        <>
        <Wrapper theme={theme} key={item.id}>
            <h4>{item.title}</h4>
                <span>¥{item.price}</span>
            <img src="public/images/dummy1.png" alt="ダミー画像" />
            <AlignLeft>
                <Primary text="予約する" onClick={() => toggleModal(!isModalOpen)}/>
            </AlignLeft>
        </Wrapper>
        {isModalOpen && 
            <Bg onClick={() => toggleModal(!isModalOpen)}>
                <ItemModal {...item}/>
            </Bg>
        }
        </>
    )
}

const Bg : React.FC<{onClick: () => void, children: ReactElement}> = ({onClick, children}) => {
    return (
        <BgSkin onClick={onClick} theme={theme}>{children}</BgSkin>
    )
}

const BgSkin = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    right: 0;
    top: 60px;
    margin: 0 auto;
    padding-top: 100px;
    z-index: 2;
    background-color: ${({theme}) => theme.colors.elements.bgStrong};
`;

const Wrapper = styled.div`
    position: relative;
    padding: 1.5rem ;
    border-radius: 5px 5px 0 0;
    border-bottom: solid;
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

const AlignLeft = styled.div`
    width: 100%;
    text-align: right;
    margin-right: -2.5rem;
`;