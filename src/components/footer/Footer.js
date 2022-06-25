import './Footer.css';
import styled from 'styled-components';
import { Nav, NavItem, NavLink } from 'reactstrap';
import React from 'react'

const FooterDiv = styled.div`
    display: flex;
    height: 89px;
    justify-content: space-around;

`;
const FooterDivider = styled.div`
    width: 300px;
`;

export default function Footer() {
    return (
        <FooterDiv>
            <Nav fill className="footer-nav">

                <NavItem>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg' alt='nasa icon' id='nasa-icon' />
                </NavItem>
                <NavItem>
                    <NavLink active href="https://api.nasa.gov/">
                        api.nasa.gov
                    </NavLink>
                </NavItem>

                <FooterDivider />

                <NavItem>
                    <NavLink href="#">
                        Another Link
                    </NavLink>
                </NavItem>

                <FooterDivider />

                <NavItem>
                    <NavLink disabled href="#">
                        Disabled Link
                    </NavLink>
                </NavItem>
            </Nav>
        </FooterDiv>
    )
}

/*
<Nav>
    <img src='https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg' alt='nasa icon' id='nasa-icon' />
    <Divider />
    <PFooter>Testing block1</PFooter>
    <Divider />
    <PFooter>Testing block2</PFooter>
</Nav>
*/