import React from "react";

const Layout = (props) => {
  return (
    <div className="max-w-[136rem] px-[3rem] mx-auto">{props.children}</div>
  );
};

export default Layout;
