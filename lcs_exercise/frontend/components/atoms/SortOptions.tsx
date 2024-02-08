// Components
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import CircularProgress from '@mui/joy/CircularProgress';

// IProps interface for the SortOptions component props
interface IProps {
  isLoading: boolean; // Boolean to indicate if the data is still loading
  sortActionASC: () => void; // Function to handle sorting in ascending order
  sortActionDESC: () => void; // Function to handle sorting in descending order
}

/**
 * SortOptions Component
 * 
 * This component is responsible for rendering the sort options in a button group.
 * The options include 'Ascending' and 'Descending'.
 * While the data is loading, a circular progress indicator is displayed instead of the sort options.
 * 
 * @param {IProps} props - The properties that define the behavior of the sort options.
 * @returns {JSX.Element} A button group containing the sort options or a circular progress indicator.
 */
export default function SortOptions({isLoading, sortActionASC, sortActionDESC}: IProps) {
  return (
    <ButtonGroup 
      spacing="1rem" 
      aria-label="button group for sorting"
    >
        {isLoading ? 
          <CircularProgress /> : // Display circular progress indicator while data is loading
          <>
              <Button onClick={sortActionASC}>Ascending</Button>
              <Button onClick={sortActionDESC}>Descending</Button>
          </>
        }
    </ButtonGroup>
  )
}