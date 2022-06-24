import styled from 'styled-components';
import React from 'react'

const FooterStyle = styled.footer`
  display: block;
  height: 89px;
  background: currentColor;
  position: sticky;
`;

export default function Footer() {
  return (
    <FooterStyle>
        Footer
    </FooterStyle>
  )
}
