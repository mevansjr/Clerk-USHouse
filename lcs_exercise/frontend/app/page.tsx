'use client';
import { useEffect, useState } from 'react';

// Components
import Menu from '@/components/molecules/Menu';
import MemberList from '@/components/molecules/MemberList';
import Title from '@/components/atoms/Title';

// Utils
import { fetchMemberData, getFilteredMembersByState, getMembers, getSearchedMembersByQuery, getSortedMembersByName } from '@/utils/helpers';
import { PAGE_TITLE, SEARCH_KEY_THRESHOLD } from '@/utils/constants';

// Models
import { Member, SortDirection } from '@/models/API';

// Styles
import '@/styles/page.css';

export default function App() {
  // State
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(1);

  // Event Handlers
  const handleSortMembersASC = async () => {
    try {
      // sorted by name acending
      setIsLoading(true);
      const members = await fetchData();
      const sorted = getSortedMembersByName(members, SortDirection.ASC);
      setMembers(sorted);
    } catch (error) {
      console.error(error);
    } finally {
      resetState();
    }
  }

  const handleSortMembersDESC = async () => {
    try {
      // sorted by name descending
      setIsLoading(true);
      const members = await fetchData();
      const sorted = getSortedMembersByName(members, SortDirection.DESC);
      setMembers(sorted);
    } catch (error) {
      console.error(error);
    } finally {
      resetState();
    }
  }

  const handleFilterMembersByState = async (state: string) => {
    try {
      // filtered by state
      setIsLoading(true);
      const members = await fetchData();
      const filtered = getFilteredMembersByState(members, state);
      setMembers(filtered);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSearch = (event: React.ChangeEvent) => {
    // search by query
    const query = (event.target as HTMLInputElement).value;
    if (query.length === 0) {
      loadData();
      return;
    }
    if (query && query.length > SEARCH_KEY_THRESHOLD) {
      fetchByQuery(query);
    }
  }

  const handleDropdownClose = (index: number) => () => {
    // close dropdown
    if (typeof index === 'number') {
      setSelectedIndex(index);
    }
  };

  // Other Methods
  const loadData = async () => {
    // load initial data and sort by name ascending
    try {
      setIsLoading(true);
      const members = await fetchData();
      const sorted = getSortedMembersByName(members, SortDirection.ASC);
      setMembers(sorted);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setSelectedIndex(0);
    }
  }

  const fetchData = async () => {
    // fetch member data from API
    const data = await fetchMemberData();
    // get members from the data
    const members = getMembers(data);
    return members;
  };

  const fetchByQuery = async (query: string) => {
    try {
      // search api response by query
      setIsLoading(true);
      const members = await fetchData();
      const search = getSearchedMembersByQuery(members, query);
      setMembers(search);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const resetState = () => {
      // reset state
      setIsLoading(false);
      setSelectedIndex(0);
  };

  // Use Effects
  useEffect(() => {
    // filter members by state
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
    // load initial data
    loadData();
  }, []);

  // Render UI
  return (
    <main className="main-container">
      <Title text={PAGE_TITLE} />
      <Menu
        searchOnChanged={handleSearch}
        sortActionASC={handleSortMembersASC}
        sortActionDESC={handleSortMembersDESC}
        handleClose={handleDropdownClose}
        isLoading={isLoading} 
        selectedIndex={selectedIndex}
      />
      <MemberList members={members} />
    </main>
  );
}