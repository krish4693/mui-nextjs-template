import React from 'react';
// Import the React library, necessary for using React features such as functional components.

import Drawer from '@/components/Drawer/Drawer';
// Import the `Drawer` component, which is likely a reusable sidebar or navigation component located in the specified path.

const layout = ({ children, }: Readonly<{ children: React.ReactNode }>) => {
  // Define the `layout` component as a functional component.
  // It accepts a single prop `children`, which represents the dynamic content to be displayed inside the layout.
  // The `Readonly` utility ensures the `children` prop cannot be modified, making it immutable.

  return (
    <div>
      {/* A container div that wraps the `Drawer` and the `children` content */}

      <Drawer >
        {/* Render the `Drawer` component, which is likely a navigation or sidebar element that stays consistent across pages */}

        {children}
      </Drawer>
      {/* Render the `children` prop, which represents the dynamic content passed to this layout component */}
    </div>
  );
};

export default layout;
// Export the `layout` component as the default export so it can be imported and used in other parts of the application.
