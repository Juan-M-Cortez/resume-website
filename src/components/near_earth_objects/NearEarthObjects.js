import styled from 'styled-components'
import React from 'react'

const DeleteDiv = styled.div`
    display: flex;
`;
const DivNEO = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function NearEarthObjects() {
  return (
    <DivNEO>
        <img src='https://innovationlabs.harvard.edu/wp-content/uploads/sites/5/2018/08/Coming-soon-stamp.jpg' alt='comingsoon' />
        <DeleteDiv />
    </DivNEO>
  )
}
