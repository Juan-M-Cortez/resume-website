import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import React from 'react'

export default function EmergencyPrompt() {
  return (
    <div>EmergencyPrompt
    <ButtonDropdown
  toggle={function noRefCheck(){}}
>
  <DropdownToggle caret>
    Button Dropdown
  </DropdownToggle>
  <DropdownMenu>
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
    </div>
  )
}
