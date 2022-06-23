import React from 'react';
import { DropdownItem, DropdownMenu } from 'reactstrap';
import styled from 'styled-components';
import './DropDown.css';

const P = styled.p`
    text-align: center;
`;

export default function DropDown(props) {
    const {todaysDate} = props;
    console.log('DropDown: ', todaysDate);
    /*
    let formatDate = todaysDate.split('');
    console.log(formatDate);
    // 2022-06-22

    const year = formatDate.filter((element, index) => {
        return index < 4;
    });
    
    console.log('formatYear: ', year);
    */

    let dates = [];
    function dropDownDates() {
        for (let index = 1; index <= 10; index++) {
            let valueDate = index > 9 ? `05-${index}-2022` : `05-0${index}-2022`;
            dates.push(<DropdownItem key={index} value={valueDate} >
                {valueDate}
            </DropdownItem>);
        }
        return dates;
    }

    return (
        <DropdownMenu end>
            <P>Past 10 days</P>
            <DropdownItem divider />
            {dropDownDates()}
        </DropdownMenu>
    )
}
