// Utils
import { MEMBER_API } from "./constants";

// Models
import { APIData, Member, SortDirection } from "@/models/API";

/**
 * Returns Member data from API
 * @returns {Promise<APIData>}
 */
export const fetchMemberData = async (): Promise<APIData>  => {
  try {
    // Fetch member data from API
    const res = await fetch(MEMBER_API);
    if (!res.ok) {
      // Throw error if unable to fetch member data
      throw new Error(`Unable to fetch member data: ${res.statusText}`);
    }
    // Return member data
    return res.json() as unknown as APIData;
  } catch (err: any) {
    // Throw error if unable to fetch member data
    throw err;
  }
}

/**
 * Parses API response and returns a list of members
 * @param data - API response
 * @returns {Member[]}
 */
export const getMembers = (data: APIData): Member[] => {
  // Get members from API response
  const members = data?.MemberData?.members?.member || [];

  // Filter out members with null namelist
  const filterNullMembers = members.filter((member: any) => member?.['member-info']?.namelist) || [];
  return filterNullMembers;
}

/**
 * Parses API response and returns a list of members sorted by name and sort direction
 * @param data - API response
 * @param sortDirection - 'ASC' or 'DESC'
 * @returns {Member[]}
 */
export const getSortedMembersByName = (members: Member[], sortDirection: SortDirection): Member[] => {
  let sorted = members;
  if (sortDirection === SortDirection.ASC) {
    // Sort members by name in ascending order
    sorted = members.sort((a: Member, b: Member) => {
      const nameA = a?.['member-info']?.['sort-name']?.toLowerCase() || '';
      const nameB = b?.['member-info']?.['sort-name']?.toLowerCase() || '';
      return nameA.localeCompare(nameB);
    });
  } else {
    // Sort members by name in descending order
    sorted = members.sort((a: Member, b: Member) => {
      const nameA = a?.['member-info']?.['sort-name']?.toLowerCase() || '';
      const nameB = b?.['member-info']?.['sort-name']?.toLowerCase() || '';
      return nameB.localeCompare(nameA);
    });
  }
  return sorted;
}

/**
 * Parses API response and returns a list of members sorted by name and sort direction
 * @param members - API response
 * @param state - State name: example: 'CA' for California
 * @returns {Member[]}
 */
export const getFilteredMembersByState = (members: Member[], state: string): Member[] => {
  // Filter members by state
  const filtered = members.filter((member: Member) => ((member?.statedistrict || '') as string).toLowerCase().includes(state.toLowerCase())) || [];
  const sorted = getSortedMembersByName(filtered, SortDirection.ASC);
  return sorted;
}

/**
 * Parses API response and returns a list of members searched by query
 * @param members - API response
 * @param query - Search query
 * @returns {Member[]}
 */
export const getSearchedMembersByQuery = (members: Member[], query: string): Member[] => {
  // Search members by query
  const searched = members.filter((member: Member) => JSON.stringify(member).toLowerCase().includes(query.toLowerCase())) || [];
  const sorted = getSortedMembersByName(searched, SortDirection.ASC);
  return sorted;
}

/**
 * Parses Member data and returns the member's name
 * @param member
 * @returns {string}
 */
export const getMemberName = (member: Member): string => {
  // Return member's name
  return member["member-info"].namelist || '';
};