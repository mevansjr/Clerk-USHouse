// Components
import Input from '@mui/joy/Input';

// Utils
import { SEARCH_PLACEHOLDER } from '@/utils/constants';

// Interface
interface IProps {
  searchOnChanged: (event: React.ChangeEvent) => void;
}

// MemberItem Component
export default function Search({searchOnChanged}: IProps) {
  return (
    <Input 
      placeholder={SEARCH_PLACEHOLDER}
      onChange={searchOnChanged}
    />
  )
}