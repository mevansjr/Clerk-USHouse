// Utils
import { MEMBER_API } from "./constants";

// Models
import { APIData, Member, SortDirection } from "@/models/API";

/**
 * Fetches Member data from the API.
 * @returns {Promise<APIData>} A Promise that resolves to the API data.
 * @throws Will throw an error if the API request fails.
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
 * Parses the API response and returns a list of members.
 * @param {APIData} data - The API response data.
 * @returns {Member[]} An array of Member objects.
 * @throws Will throw an error if the API response data is not as expected.
 */
export const getMembers = (data: APIData): Member[] => {
  // Get members from API response
  const members = data?.MemberData?.members?.member || [];

  // Filter out members with null namelist
  const filterNullMembers = members.filter((member: any) => member?.['member-info']?.namelist) || [];
  return filterNullMembers;
}

/**
 * Sorts an array of members by name in the specified sort direction.
 * @param {Member[]} members - The array of Member objects to sort.
 * @param {SortDirection} sortDirection - The direction to sort in ('ASC' or 'DESC').
 * @returns {Member[]} The sorted array of Member objects.
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
 * Filters an array of members by state and returns a sorted list.
 * @param {Member[]} members - The array of Member objects to filter.
 * @param {string} state - The state to filter by (e.g., 'CA' for California).
 * @returns {Member[]} The filtered and sorted array of Member objects.
 */
export const getFilteredMembersByState = (members: Member[], state: string): Member[] => {
  // Filter members by state
  const filtered = members.filter((member: Member) => ((member?.statedistrict || '') as string).toLowerCase().includes(state.toLowerCase())) || [];
  const sorted = getSortedMembersByName(filtered, SortDirection.ASC);
  return sorted;
}

/**
 * Searches an array of members by a query string and returns a sorted list.
 * @param {Member[]} members - The array of Member objects to search.
 * @param {string} query - The query string to search by.
 * @returns {Member[]} The searched and sorted array of Member objects.
 */
export const getSearchedMembersByQuery = (members: Member[], query: string): Member[] => {
  // Search members by query
  const searched = members.filter((member: Member) => JSON.stringify(member).toLowerCase().includes(query.toLowerCase())) || [];
  const sorted = getSortedMembersByName(searched, SortDirection.ASC);
  return sorted;
}

/**
 * Parses a Member object and returns the member's name.
 * @param {Member} member - The Member object to parse.
 * @returns {string} The member's name.
 */
export const getMemberName = (member: Member): string => {
  // Return member's name
  return member["member-info"].namelist || '';
};