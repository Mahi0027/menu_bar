import React, { useEffect, useState } from "react";

const MenuBar = ({ resourceData }: { resourceData: unknown }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="menu_container"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {resourceData?.name}
        {resourceData?.nesting.length > 0 && <span>{isOpen ? "^" : ">"}</span>}
      </div>
      <div className="nesting">
        {isOpen &&
          resourceData?.nesting.length > 0 &&
          resourceData?.nesting.map((data) => (
            <MenuBar key={data?.id} resourceData={data} />
          ))}
      </div>
    </>
  );
};

export default MenuBar;
