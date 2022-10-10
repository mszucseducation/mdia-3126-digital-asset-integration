import styled from 'styled-components';

export default function AppText({
    text = "Welcome",
    size = "18px"
}) {
    return(
        <TextContent sz={size}>
            {text}
        </TextContent>
    )
}

const TextContent = styled.div`
    font-size: ${props => props.sz}
`;