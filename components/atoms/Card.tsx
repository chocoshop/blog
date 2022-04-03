import styled from "styled-components";
import theme from "../variables/theme";
import { Primary } from "../atoms/Button";

type Item = {
    id: number,
    title: string,
    price: number,
    description: string,
}

export const Card : React.FC<Item> = (item) => {
    return(
        <Wrapper theme={theme} key={item.id}>
            <h4>{item.title}</h4>
            <img src="public/images/dummy1.png" alt="ダミー画像" />
            <br />
            <span>¥{item.price}</span>
            <br />
            <p>{item.description}</p>
            <Primary text="予約"/>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    background-color: ${({theme}) => theme.colors.elements.bgColor};
    padding: 1.5rem 2.5rem;
    border-radius: 5px;
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
`