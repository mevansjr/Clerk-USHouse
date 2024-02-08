// Components
import Table from '@mui/joy/Table';

// Styles
import '@/styles/MemberList.css';

// Models
import { Member } from '@/models/API';

// Interface
interface IProps {
  members: Member[];
}

// MemberList Component
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
          const memberPartyInfo = member['member-info']?.party || 'O';
          let partyName = 'N/A';
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