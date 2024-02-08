// Components
import Stack from '@mui/joy/Stack';
import Search from '@/components/atoms/Search';
import SortOptions from '@/components/atoms/SortOptions';
import FilterOptions from '@/components/atoms/FilterOptions';

// Interface
interface IProps {
    searchOnChanged: (event: React.ChangeEvent) => void;
    sortActionASC: () => void;
    sortActionDESC: () => void;
    handleClose: (index: number) => any;
    isLoading: boolean;
    selectedIndex: number;
}

// MemberItem Component
export default function Menu({searchOnChanged, sortActionASC, sortActionDESC, handleClose, isLoading, selectedIndex}: IProps) {
  return (
    <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        spacing={2}
    >
        <Search 
            searchOnChanged={searchOnChanged}
        />
        <SortOptions 
            isLoading={isLoading} 
            sortActionASC={sortActionASC} 
            sortActionDESC={sortActionDESC} 
        />
        <FilterOptions 
            selectedIndex={selectedIndex} 
            handleClose={handleClose}
        />
    </Stack>
  )
}