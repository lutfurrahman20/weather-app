import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4 mt-10">
      <p className="text-sm text-gray-700 dark:text-gray-300">
        © {new Date().getFullYear()} Weather App. Developed by{" "}
        <span className="font-bold  dark:text-blue-400">
          Lutfur Rahman Siddiquee
        </span>
      </p>
    </footer>
  );
};

export default Footer;
