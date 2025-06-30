import React from "react";

const Footer = () => {
  return (
    <div className="bg-red-950 text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} Mahesh's Portfolio</p>
    </div>
  );
};

export default Footer;
