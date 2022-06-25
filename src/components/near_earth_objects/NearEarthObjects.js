import styled from 'styled-components'
import React from 'react'

const DeleteDiv = styled.div`
    height: 500px;
`;
const DivNEO = styled.div`
    display: flex;
`;

export default function NearEarthObjects() {
  return (
    <DivNEO>
        <DeleteDiv />
    </DivNEO>
  )
}
