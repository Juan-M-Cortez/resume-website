import React, { useRef } from 'react';
import {
  Nav, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import styled from 'styled-components';
import './Navbar.css'
import DropDown from '../drop_down/DropDown';
import { useNavigate } from 'react-router-dom'

const Header = styled.header`
  display: flex;
  height: 101px;
  max-width: 100%;
  background-color: currentColor;
  justify-content: space-evenly;
`;

const Divider = styled.div`
    width: 42rem;
`;

export default function Navbar(props) {
  const { TenDayPick } = props;
  let picOfDay = useRef(true);
  let nearEO = useRef(false);
  // allows us to navigate react router
  let navigate = useNavigate();



  function activateHome() {
    picOfDay.current = true;
    nearEO.current = false;
    console.log('activateHome');
  }

  function activateNEO() {
    picOfDay.current = false;
    nearEO.current = true;
    console.log('activateNEO');
  }

  return (
    <Header className='header-style' >
      
      <Nav pills className='nav' >
        <NavItem>
          <img src='https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg' alt='nasa icon' id='nasa-icon' />
        </NavItem>

        <NavItem >
            <NavLink active={picOfDay.current} onClick={() => { navigate("/"); activateHome() }}>
              🪐Pic Of the Day
            </NavLink>
        </NavItem>


        <NavItem>
          <NavLink active={nearEO.current} onClick={() => { navigate("/near_earth_objects"); activateNEO() }}>
            🌠Near Earth Objects
          </NavLink>
        </NavItem>


        <NavItem>
          <NavLink disabled href="#">
            🚧Coming Soon: Techport
          </NavLink>
        </NavItem>

        <Divider />

        {/*🔽Drop down button start🔽*/}
        <NavItem>
        <i className="arrow down"></i>
        </NavItem>
        {/*🔽Drop down button end🔽*/}
      </Nav>

    </Header>
  )
}
