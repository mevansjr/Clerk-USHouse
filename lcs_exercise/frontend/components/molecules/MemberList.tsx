// Components
import Table from '@mui/joy/Table';

// Styles
import '@/styles/MemberList.css';

// Models
import { Member } from '@/models/API';

// IProps interface for the MemberList component props
interface IProps {
  members: Member[]; // Array of Member objects
}

/**
 * MemberList Component
 * 
 * This component is responsible for displaying a list of members in a table format.
 * Each row in the table represents a member with columns for name, party, state, and district.
 * 
 * @param {IProps} props - The properties that define the members to be displayed in the list.
 * @returns {JSX.Element} A table populated with member data.
 */
export default function MemberList({members}: IProps) {
  return (
    <Table aria-label="table sizes" size={'md'}>
      <thead>
        <tr>
          <th>Name</th>
          <th style={{ width: '10%' }}>Party</th>
          <th style={{ width: '10%' }}>State</th>
          <th style={{ width: '10%' }}>District</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member) => {
          // Extract party information from member data, default to 'O' if not available
          const memberPartyInfo = member['member-info']?.party || 'O';
          let partyName = 'N/A';
          // Determine party name based on party information
          switch (memberPartyInfo) {
            case 'D':
              partyName = 'Democrat';
              break;
            case 'R':
              partyName = 'Republican';
              break;
            default:
              break;
          }
          // Render a table row for each member
          return (
            <tr key={member.statedistrict || ''}>
              <td>{member['member-info'].namelist || ''}</td>
              <td>{partyName}</td>
              <td>{member['member-info'].state['state-fullname'] || ''}</td>
              <td>{member['member-info'].district || ''}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}