import React from "react"
import Link from "next/link";
const Header = () => {
    return(
        <header>
        <div className="flex"></div>
        <ul className="flex space-x-8">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/about"}>
            <li>About</li>
          </Link>
          <Link href={"/activities"}>
            <li>Activities</li>
          </Link>
          <Link href={"/organisation"}>
            <li>Organisation</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact us</li>
          </Link>
        </ul>
        </header>
    );
}

export default Header;