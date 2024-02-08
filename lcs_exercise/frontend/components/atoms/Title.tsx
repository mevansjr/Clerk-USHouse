// Components
import Typography from '@mui/joy/Typography';

// Interface
interface IProps {
  text: string;
}

// MemberItem Component
export default function Title({text}: IProps) {
  return (
    <Typography level="h1">{text}</Typography>
  )
}