import styled from "styled-components";
import { Primary } from "../../atoms/Button";
import theme from "../../variables/theme";

type Props = {
    item: Item,
    isBooked: boolean,
    bookHandler: (itemId: number) => void,
}

export const ItemModal: React.FC<Props> = ({item, isBooked, bookHandler}) => {
    return (
        <Wrapper theme={theme} onClick={(e) => {e.stopPropagation()}}>
            <img src="public/images/dummy1.png" alt="ダミー画像" />
            <h4>{item.title}</h4>
            <span>¥{item.price}</span>
            <p>{item.description}</p>
            <ButtonWrapper>
                <Primary text={isBooked ? "予約済み": "予約する"} onClick={() => bookHandler(item.id)}/>
            </ButtonWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: ${({theme}) => theme.colors.elements.bgColor};
    padding: 1.5rem 2.5rem;
    border-radius: 5px;
    width: 350px;
    margin: 0 auto;
    z-index: 2;
    & > img {
        width: 100%;
    }
    & > h4 {
        font-size: 1.5rem;
    }
    & > p {
        overflow-wrap: break-word;
    }
`;

const ButtonWrapper = styled.div`
    width: 100%;
    text-align: right;
`;