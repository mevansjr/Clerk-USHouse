// Components
import Input from '@mui/joy/Input';

// IProps interface for the Search component props
interface IProps {
  placeholder?: string; // Optional placeholder text for the search input
  value?: string; // Optional value for the search input
  searchOnChanged: (event: React.ChangeEvent) => void; // Function to handle search input changes
}

/**
 * Search Component
 * 
 * This component is responsible for rendering a search input field.
 * It takes a placeholder text as an optional prop and a function to handle changes to the search input as a required prop.
 * 
 * @param {IProps} props - The properties that define the behavior of the search input.
 * @returns {JSX.Element} A search input field.
 */
export default function Search({placeholder, value, searchOnChanged}: IProps) {
  return (
    <Input 
      placeholder={placeholder} // Display the provided placeholder text
      value={value} // Display the provided value for the search input
      onChange={searchOnChanged} // Propagate search input changes to parent component
    />
  )
}