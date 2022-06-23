import React from 'react';
import { DropdownItem, DropdownMenu } from 'reactstrap';
import styled from 'styled-components';
import './DropDown.css';

const P = styled.p`
    text-align: center;
`;

export default function DropDown(props) {
  const { TenDayPick } = props;
    // getting the current date and spliting it
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    // Formating the drop down dates and structuring it
    let datesAccordion = [];
    function dropDownDates() {
        let countDown = dd;
        for (let index = 1; index <= 10; index++) {
            let valueDate = `${mm}/${countDown}/${yyyy}`;
            --countDown;

            datesAccordion.push(
            <DropdownItem key={index} value={valueDate} onClick={(event) => TenDayPick(event)}>
                {valueDate}
            </DropdownItem>
            );
        }
        return datesAccordion;
    }

    return (
        <DropdownMenu end>
            <P>Past 10 days</P>
            <DropdownItem divider />
            {dropDownDates()}
        </DropdownMenu>
    )
}
