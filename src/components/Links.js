import React from 'react';
import { Link } from "react-router-dom";

const white = {color: "white"}

const Links = (props) => {
	return (
		<div>
		  <ul>
        <li>
          <Link to="/" style={white}>Home</Link>
        </li>
        <li>
          <Link to="/joke" style={white}>Joke</Link>
        </li>
        <li>
          <Link to="/quote" style={white}>Quote</Link>
        </li>
      </ul>
		</div>
	)
}

export default Links;
