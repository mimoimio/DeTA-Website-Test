import React from "react"
import Link from "next/link";
import Pill from "./Pill";
const Header = () => {
  return (
    <header className="flex flex-wrap items-center justify-center w-full p-4 bg-white">
      <ul className="flex space-x-8">
        <Pill address="" title="Home"></Pill>
        <Pill address="activities" title="Activities"></Pill>
        <Pill address="organisation" title="Organisation"></Pill>
        <Pill address="contact" title="Contact us"></Pill>
      </ul>
    </header>
  );
}

export default Header;