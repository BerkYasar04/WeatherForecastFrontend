import React from "react";

const Header: React.FC = () => {

  return (
    <header>
      <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <h1 className="text-white text-2xl font-bold font-serif">
            Turkey Weather Forecast
          </h1>
          <div className="w-[13.5rem]"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
