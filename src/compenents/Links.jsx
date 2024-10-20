import { Link } from "react-router-dom";
function Links() {
  return (
    <>
      <div id="links">
        <Link to="/about">About US</Link>
        <Link to="/ourvision" id="vision">
          Our Vision
        </Link>
        <Link to="/ourtechnology" id="tech">
          Our Technology
        </Link>
      </div>
    </>
  );
}

export default Links;
