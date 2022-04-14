import styled from "styled-components";
import { Primary } from "../../atoms/Button";
import theme from "../../variables/theme";

export const ItemModal: React.FC<Item> = item => {
    return (
        <Wrapper theme={theme} onClick={(e) => {e.stopPropagation()}}>
            <h4>{item.title}</h4>
            <img src="public/images/dummy1.png" alt="ダミー画像" />
            <br />
            <span>¥{item.price}</span>
            <br />
            <p>{item.description}</p>
            <ButtonWrapper>
                <Primary text="予約を確定する"/>
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