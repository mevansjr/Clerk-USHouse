/*  This file is the layout for the entire application.
    It is used to wrap all the pages in the application.
    It is also used to define the metadata for the application. */

    export const metadata = {
      title: 'LCS Programming Exercise',
      description: '',
    }
    
    // RootLayout Component
    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode
    }) {
      // Return the layout
      return (
        <html lang="en">
          <body>{children}</body>
        </html>
      )
    }
    