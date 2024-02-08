/**
 * The URL of the Member API. If the API_URL environment variable is not set, it defaults to 'http://127.0.0.1:5000/test/json'.
 * @type {string}
 */
export const MEMBER_API = process.env.API_URL || 'http://127.0.0.1:5000/test/json';

/**
 * The title of the page.
 * @type {string}
 */
export const PAGE_TITLE = 'LCS Programming Exercise';

/**
 * The placeholder text for the search input field.
 * @type {string}
 */
export const SEARCH_PLACEHOLDER = 'Search by keyword';

/**
 * The minimum number of characters in the search input field before a search is triggered.
 * @type {number}
 */
export const SEARCH_KEY_THRESHOLD = 3;