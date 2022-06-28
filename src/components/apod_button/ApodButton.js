import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';
import DropDown from '../drop_down/DropDown';
import './ApodButton.css';
import React, {useState, useEffect, useRef} from 'react';

export default function ApodButton(props) {
    const { TenDayPick, ButtonHeight } = props;
    const [ toggleDrop, setToggleDrop ] = useState('none');
    console.log('TenDayPick Drop: ', TenDayPick);
    const elem = useRef(document.querySelector('dropdown-toggle'));

    useEffect(() => {
        elem.current = document.activeElement;
        console.log(elem.current, ' === ', document.activeElement);
        if (elem.current === document.activeElement) {
            console.log('Element has focus!');
        } else {
            console.log('Element is not focused.');
        }
    }, [elem.current]);
    
    function noRefCheck(event) { 
        setToggleDrop(toggleDrop !== 'none' ?  'none' : 'block');
        console.log('toggle: ', event)
        console.log('active: ', document.activeElement);
    }
    
    return (
       
        <UncontrolledDropdown inNavbar nav style={{top: 87}}>
         {/*🔽Drop down button start🔽*/}


          <DropdownToggle caret nav >
            📅Dates
          </DropdownToggle>

          <DropDown TenDayPick={TenDayPick} />


         {/*🔽Drop down button end🔽*/}
        </UncontrolledDropdown>
       

        
        
    )
}


/*
        <ButtonDropdown children
            toggle={(event) => { noRefCheck(event) }} className="div-grab" >
            <DropdownToggle caret>
                Button Dropdown
            </DropdownToggle>
            <DropdownMenu style={{display: `${toggleDrop}`}}>
                <DropdownItem header>
                    Header
                </DropdownItem>
                <DropdownItem disabled>
                    Action
                </DropdownItem>
                <DropdownItem>
                    Another Action
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    Another Action
                </DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    */