import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between"></div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" | "}
          <a href="https://linktree.berkyasar.dev/" className="hover:underline">
            Berk Yaşar™
          </a>
          &nbsp; All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
