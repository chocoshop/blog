import styled from "styled-components"

export const Bell: React.FC = () => {
    return(
        <Img src="/public/images/bell.png" alt="通知バッチ" />
    )
}

const Img = styled.img`
    width: 100%;
`