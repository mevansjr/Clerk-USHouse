// Components
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import CircularProgress from '@mui/joy/CircularProgress';

// Interface
interface IProps {
  isLoading: boolean;
  sortActionASC: () => void;
  sortActionDESC: () => void;
}

// MemberItem Component
export default function SortOptions({isLoading, sortActionASC, sortActionDESC}: IProps) {
  return (
    <ButtonGroup 
      spacing="1rem" 
      aria-label="button group for sorting"
    >
        {isLoading ? 
          <CircularProgress /> :
          <>
              <Button onClick={sortActionASC}>Ascending</Button>
              <Button onClick={sortActionDESC}>Descending</Button>
          </>
        }
    </ButtonGroup>
  )
}