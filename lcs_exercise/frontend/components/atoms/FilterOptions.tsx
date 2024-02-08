// Components
import MenuButton from '@mui/joy/MenuButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';

// Interface
interface IProps {
    selectedIndex: number;
    handleClose: (index: number) => any;
}

// MemberItem Component
export default function FilterOptions({selectedIndex, handleClose}: IProps) {
  return (
    <Dropdown>
        <MenuButton>Filter</MenuButton>
        <Menu>
        <MenuItem
            {...(selectedIndex === 0 && { selected: true, variant: 'soft' })}
            onClick={handleClose(0)}
        >
            None
        </MenuItem>
        <MenuItem 
            selected={selectedIndex === 1}
            onClick={handleClose(1)}
        >
            Maryland
        </MenuItem>
        <MenuItem 
            selected={selectedIndex === 2}
            onClick={handleClose(2)}
        >
            New York
        </MenuItem>
        <MenuItem 
            selected={selectedIndex === 3}
            onClick={handleClose(3)}
        >
            Pennsylvania
        </MenuItem>
        </Menu>
    </Dropdown>
  )
}