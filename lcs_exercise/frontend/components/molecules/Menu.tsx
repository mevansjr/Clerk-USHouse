// Components
import Stack from '@mui/joy/Stack';
import Search from '@/components/atoms/Search';
import SortOptions from '@/components/atoms/SortOptions';
import FilterOptions from '@/components/atoms/FilterOptions';

// IProps interface for the Menu component props
interface IProps {
    searchOnChanged: (event: React.ChangeEvent) => void; // Function to handle search input changes
    sortActionASC: () => void; // Function to handle sorting in ascending order
    sortActionDESC: () => void; // Function to handle sorting in descending order
    handleClose: (index: number) => any; // Function to handle closing of filter options
    searchPlaceholder?: string; // Placeholder text for the search input
    searchValue?: string; // Value for the search input
    isLoading: boolean; // Boolean to indicate if the data is still loading
    selectedIndex: number; // Index of the currently selected filter option
}

/**
 * Menu Component
 * 
 * This component is responsible for rendering the menu which includes a search bar, sort options, and filter options.
 * 
 * @param {IProps} props - The properties that define the behavior of the menu.
 * @returns {JSX.Element} A stack layout containing the Search, SortOptions, and FilterOptions components.
 */
export default function Menu({searchOnChanged, sortActionASC, sortActionDESC, handleClose, searchPlaceholder, searchValue, isLoading, selectedIndex}: IProps) {
  return (
    <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        spacing={2}
    >
        <Search 
            placeholder={searchPlaceholder} // Set the placeholder text for the search input
            value={searchValue} // Set the value for the search input
            searchOnChanged={searchOnChanged} // Propagate search input changes to parent component
        />
        <SortOptions 
            isLoading={isLoading} // Disable sort options while data is loading
            sortActionASC={sortActionASC} // Propagate request to sort in ascending order to parent component
            sortActionDESC={sortActionDESC} // Propagate request to sort in descending order to parent component
        />
        <FilterOptions 
            selectedIndex={selectedIndex} // Pass the currently selected filter option
            handleClose={handleClose} // Propagate request to close filter options to parent component
        />
    </Stack>
  )
}