import React from "react";
import MiniVarientDrawer from './MiniVarientDrawer';

const Layout = ({ children }) => {
  return (
    <>
      <MiniVarientDrawer>{children}</MiniVarientDrawer>
    </>
  );
};

export default Layout;
