type Props = {
    src: string
}

export const Script: React.FC<Props> = ({ src }) => <script src={`${src}`}></script>;