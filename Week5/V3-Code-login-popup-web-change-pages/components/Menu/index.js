import styled from 'styled-components';
import { FlexBox } from '../../styles/globals';
import Link from 'next/link';

export default function Menu({
    login = "Home",
    about = "About",
    logout = "Logout"
}) {
    return(
        <FlexBox>
            <HeaderArea>
                <ul>
                    <LiItems>
                        <Link href="../Login">{login}</Link>
                    </LiItems>
                    <LiItems>
                        <Link href="../About">{about}</Link>
                    </LiItems>
                    <LiItems>
                        <Link href="../">{logout}</Link>
                    </LiItems>
                </ul>
            </HeaderArea>
        </FlexBox>
    )
}

const HeaderArea = styled.header`
    font-size: 20px;
`;

const LiItems = styled.li`
    display: inline;
    padding: 0px 10px;
`

