import styled from "styled-components";
import { PrimaryButton } from "../../atoms/Button";
import theme from "../../variables/theme";
import { BookingResult, bookingResults } from "./bookingResult";

type ItemStatus = {
    isBooked: boolean,
    bookingResult: BookingResult,
}

type Props = {
    item: Item,
    itemStatus: ItemStatus,
    bookHandler: (itemId: number) => void,
}

export const ItemModal: React.FC<Props> = ({item, itemStatus, bookHandler}) => {
    let message = handleBookingMessage(itemStatus.bookingResult);
    return (
        <Wrapper theme={theme} onClick={(e) => {e.stopPropagation()}}>
            <img src="public/images/dummy1.png" alt="ダミー画像" />
            <h4>{item.title}</h4>
            <span>¥{item.price}</span>
            <p>{item.description}</p>
            <ButtonWrapper>
                <PrimaryButton text={itemStatus.isBooked ? "☑️ 予約済み": "予約する"} onClick={() => bookHandler(item.id)}/>
            </ButtonWrapper>
            <BookedMessage theme={theme}>
                {message}
            </BookedMessage>
        </Wrapper>
    )
}

const handleBookingMessage = (bookingResult: BookingResult) :string|null => {
    if (bookingResult === bookingResults.SUCCESS) {
        return '予約が完了しました！';
    }
    if (bookingResult === bookingResults.FAIL) {
        return '予約に失敗しました';
    }
    return null;
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

const BookedMessage = styled.p`
    color: ${({theme}) => theme.colors.elements.anchor};
    height: 1.5rem;
    text-align: end;
    padding-top: 0.5rem;
    display: block;
`;

const ButtonWrapper = styled.div`
    width: 100%;
    text-align: right;
`;