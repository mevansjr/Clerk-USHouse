'use client';
import { useEffect, useState } from 'react';

// Components
import Menu from '@/components/molecules/Menu';
import MemberList from '@/components/molecules/MemberList';
import Title from '@/components/atoms/Title';

// Utils
import { fetchMemberData, getFilteredMembersByState, getMembers, getSearchedMembersByQuery, getSortedMembersByName } from '@/utils/helpers';
import { PAGE_TITLE, SEARCH_KEY_THRESHOLD, SEARCH_PLACEHOLDER } from '@/utils/constants';

// Models
import { Member, SortDirection } from '@/models/API';

// Styles
import '@/styles/page.css';

/**
 * App Component
 * 
 * This is the main component of the application. It manages the state of the members data,
 * loading status, and selected index for filtering. It also defines the event handlers for
 * sorting, filtering, searching, and dropdown closing. It fetches the data from an API, 
 * handles the sorting, filtering, and searching of the members data, and resets the state 
 * when necessary. It uses effects to filter members by state and load initial data.
 * 
 * @returns {JSX.Element} The main container of the application, including the Title, Menu, 
 * and MemberList components.
 */
export default function App() {
  // State
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [error, setError] = useState<any>();

  // Generic method to handle fetching and setting of data
  const handleDataChange = async (isFilter: boolean, callback: (members: Member[]) => Member[]) => {
    try {
      setIsLoading(true);
      const members = await fetchData();
      const updatedMembers = callback(members);
      setMembers(updatedMembers);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      if (!isFilter) resetState();
    }
  }

  // Event Handlers
  const handleSortMembersASC = () => handleDataChange(false, (members: Member[]) => getSortedMembersByName(members, SortDirection.ASC));
  const handleSortMembersDESC = () => handleDataChange(false, (members: Member[]) => getSortedMembersByName(members, SortDirection.DESC));
  const handleFilterMembersByState = (state: string) => handleDataChange(true, (members: Member[]) => getFilteredMembersByState(members, state));

  const handleSearch = (event: React.ChangeEvent) => {
    // Event handler for searching members by query
    const query = (event.target as HTMLInputElement).value;
    setSearchQuery(query);
    if (query.length === 0) {
      loadData();
      return;
    }
    if (query && query.length > SEARCH_KEY_THRESHOLD) {
      fetchByQuery(query);
    }
  }

  const handleDropdownClose = (index: number) => () => {
    // Event handler for closing dropdown
    if (typeof index === 'number') {
      setSelectedIndex(index);
    }
  };

  // Other Methods

  const loadData = async () => {
    // Method for loading initial data and sorting by name in ascending order
    try {
      setIsLoading(true);
      const members = await fetchData();
      const sorted = getSortedMembersByName(members, SortDirection.ASC);
      setMembers(sorted);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      setSelectedIndex(0);
    }
  }

  const fetchData = async () => {
    // Method for fetching member data from API
    const data = await fetchMemberData();
    // Get filtered members that are not null
    const members = getMembers(data);
    return members;
  };

  const fetchByQuery = async (query: string) => {
    try {
      // Method for searching API response by query
      setIsLoading(true);
      const members = await fetchData();
      const search = getSearchedMembersByQuery(members, query);
      setMembers(search);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  const resetState = () => {
    // Method for resetting the state
      setIsLoading(false);
      setSelectedIndex(0);
      setSearchQuery('');
  };

  // Use Effects
  useEffect(() => {
    // Effect for loading initial data
    if (selectedIndex === 1) {
      handleFilterMembersByState('MD');
    } else if (selectedIndex === 2) {
      handleFilterMembersByState('NY');
    } else if (selectedIndex === 3) {
      handleFilterMembersByState('PA');
    } else {
      loadData();
    }
  }, [selectedIndex]);

  useEffect(() => {
    // Effect for handling error
    if (error) {
      console.error(error); // Log error to console
    }
  }, [error]);

  useEffect(() => {
    // Effect for loading initial data
    loadData();
  }, []);

  // Render UI
  return (
    // Render the main container of the application, including the Title, Menu, and MemberList components
    <main className="main-container">
      <Title text={PAGE_TITLE} />
      <Menu
        searchOnChanged={handleSearch}
        sortActionASC={handleSortMembersASC}
        sortActionDESC={handleSortMembersDESC}
        handleClose={handleDropdownClose}
        searchPlaceholder={SEARCH_PLACEHOLDER}
        searchValue={searchQuery}
        isLoading={isLoading} 
        selectedIndex={selectedIndex}
      />
      <MemberList members={members} />
    </main>
  );
}