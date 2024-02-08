// Components
import Typography from '@mui/joy/Typography';

// IProps interface for the Title component props
interface IProps {
  text: string; // The text to be displayed as the title
}

/**
 * Title Component
 * 
 * This component is responsible for rendering a title text.
 * The text is passed as a prop and is displayed within a Typography component with a level of 'h1'.
 * 
 * @param {IProps} props - The properties that define the content of the title.
 * @returns {JSX.Element} A Typography component containing the title text.
 */
export default function Title({text}: IProps) {
  return (
    <Typography level="h1">{text}</Typography> // Display the provided text as a title
  )
}