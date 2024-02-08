// Components
import MenuButton from '@mui/joy/MenuButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';

// IProps interface for the FilterOptions component props
interface IProps {
    selectedIndex: number; // Index of the currently selected filter option
    handleClose: (index: number) => any; // Function to handle closing of filter options
}

/**
 * FilterOptions Component
 * 
 * This component is responsible for rendering the filter options in a dropdown menu.
 * The options include 'None', 'Maryland', 'New York', and 'Pennsylvania'.
 * The currently selected option is highlighted and the selection can be changed by clicking on a different option.
 * 
 * @param {IProps} props - The properties that define the behavior of the filter options.
 * @returns {JSX.Element} A dropdown menu populated with filter options.
 */
export default function FilterOptions({selectedIndex, handleClose}: IProps) {
  return (
    <Dropdown>
        <MenuButton>Filter</MenuButton>
        <Menu>
        <MenuItem
            {...(selectedIndex === 0 && { selected: true, variant: 'soft' })}
            onClick={handleClose(0)} // Close filter options and update selected index to 0
        >
            None
        </MenuItem>
        <MenuItem 
            selected={selectedIndex === 1}
            onClick={handleClose(1)} // Close filter options and update selected index to 1
        >
            Maryland
        </MenuItem>
        <MenuItem 
            selected={selectedIndex === 2}
            onClick={handleClose(2)} // Close filter options and update selected index to 2
        >
            New York
        </MenuItem>
        <MenuItem 
            selected={selectedIndex === 3}
            onClick={handleClose(3)} // Close filter options and update selected index to 3
        >
            Pennsylvania
        </MenuItem>
        </Menu>
    </Dropdown>
  )
}