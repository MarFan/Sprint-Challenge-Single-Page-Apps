import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="ui">
      <h1 className="ui">Rick &amp; Morty Fan Page</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Characters">Characters</Link>
      </nav>
    </header>
  );
}
