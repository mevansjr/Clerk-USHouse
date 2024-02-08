/**
 * This file serves as the layout for the entire application.
 * It wraps all the pages in the application and defines the metadata for the application.
 */

/**
 * Metadata for the application.
 * @type {object}
 * @property {string} title - The title of the application.
 * @property {string} description - The description of the application.
 */
export const metadata = {
  title: 'LCS Programming Exercise',
  description: '',
}

/**
 * RootLayout is a functional component that serves as the root layout for the application.
 * It wraps all the children components (pages) inside a basic HTML structure.
 *
 * @param {object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child components to be rendered inside the layout.
 * @returns {JSX.Element} The rendered HTML layout with the child components.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}