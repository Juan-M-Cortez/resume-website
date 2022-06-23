import React from 'react'
import {
  Nav, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import styled from 'styled-components';
import './Navbar.css'
import DropDown from '../drop_down/DropDown';

const Header = styled.header`
  display: flex;
  height: 101px;
  max-width: 100%;
  background-color: currentColor;
  justify-content: space-evenly;
`;

const Divider = styled.div`
  width: 35rem;
`;

export default function Navbar(props) {
  const { TenDayPick } = props;
  return (
    <Header className='header-style' >
      <Nav pills className='nav' >

        <NavItem>
          <img src='https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg' alt='nasa icon' />
        </NavItem>

        <NavItem >
          <NavLink active href="#">
            Home
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">
            Another Link
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem>

        <Divider />

        {/*🔽Drop down button start🔽*/}
        <UncontrolledDropdown inNavbar nav>

          <DropdownToggle caret nav >
            Dates📅
          </DropdownToggle>

          <DropDown TenDayPick={TenDayPick}/>

        </UncontrolledDropdown>
        {/*🔽Drop down button end🔽*/}

      </Nav>
    </Header>
  )
}
